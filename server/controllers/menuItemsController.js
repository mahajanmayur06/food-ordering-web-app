import MenuItem from '../models/MenuItem.js'
import Restaurant from '../models/Restaurant.js'
import getItemInfo from '../services/itemInfo.js'

const addMenuItem = async (req, res) => {
    const { name, category, price, providerName } = req.body
    try {
        const provider = await Restaurant.findOne({ name : providerName})
        const item = await MenuItem.create({
            name : name,
            category : category,
            price : price,
            provider : provider._id
        })
        provider.menuItems.push(item._id)
        await provider.save()
        console.log(`${name} menu added in ${providerName}`);
        res.status(201).json({message : 'menu item addede'})
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message : 'Internal server error'})
    }
}


const getMenuItems = async (req, res) => {
    try {
        const items = await MenuItem.find()
        let menuItems = [];
        for (const item of items) {
            menuItems.push(await getItemInfo(item))
        }
        res.status(200).json(menuItems)
    } catch(err) {
        console.log(err.message);
        res.status(500).json({ message : 'Internal server error'})
    }
}

const getMenuItemsByCategory = async (req, res) => {
    const { category } = req.query
    try {
        const items = await MenuItem.findOne({ category : category})
        if (!items) {
            res.status(204).json({ message : `No items for category ${category}`})
        }

        let menuItems = []
        for (const item of items) {
            menuItems.push(await getItemInfo(item))
        }
        res.status(200).json(menuItems)
    } 
    catch(err) {
        console.log(err.message);
        res.status(500).json({ message : 'Internal server error'})
    }
}

const getMenuItemsByrestaurant = async (req, res) => {
    const providerName = req.body.providerName;
    try {
        const provider = await Restaurant.findOne({ name : providerName})
        if (provider.menuItems.length === 0) {
            res.status(204).json({ message : 'No items in menu'})
        }
        let menuItems = []
        for (const item of provider.menuItems) {
            let itemInfo = await MenuItem.findById(item._id)
            menuItems.push({
                ...itemInfo,
                providerName : provider.name,
                location : provider.location,
                deliveryPrice : provider.deliveryPrice,
                estimatedDeliveryTime : provider.estimatedDeliveryTime
            })
        }
    }
    catch(err) {
        console.log(err.message);
        res.status(500).json({ message : 'internal serve error'})
    }
}