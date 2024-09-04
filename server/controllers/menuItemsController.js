import MenuItem from '../models/MenuItem.js'
import Restaurant from '../models/Restaurant.js'
import getItemInfo from '../services/itemInfo.js'

const addMenuItem = async (req, res) => {
    const { name, category, price, providerName, image } = req.body
    try {
        const provider = await Restaurant.findOne({ name : providerName})
        const item = await MenuItem.create({
            name : name,
            category : category,
            price : price,
            provider : provider._id,
            image : image ? image : null
        })
        provider.menuItems.push(item._id)
        await provider.save()
        console.log(`${name} menu added in ${providerName}`);
        res.status(201).json({message : 'menu item added'})
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

// const getMenuItems = async (req, res) => {
//     try {
//         const items = await MenuItem.find().lean(); 
//         const menuItemsPromises = items.map(item => getItemInfo(item)); 
//         const menuItems = await Promise.all(menuItemsPromises);

//         res.status(200).json(menuItems);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

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

const getMenuItemsByRestaurant = async (req, res) => {
    const providerName = req.body.providerName;
    try {
        const provider = await Restaurant.findOne({ name: providerName });
        if (!provider) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        if (provider.menuItems.length === 0) {
            return res.status(204).json({ message: 'No items in menu' });
        }

        const menuItemsIds = provider.menuItems.map(item => item._id);
        const menuItems = await MenuItem.find({ _id: { $in: menuItemsIds } });

        const result = menuItems.map(itemInfo => ({
            ...itemInfo.toObject(),
            providerName: provider.name,
            location: provider.location,
            deliveryPrice: provider.deliveryPrice,
            estimatedDeliveryTime: provider.estimatedDeliveryTime
        }));

        res.status(200).json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const getMenuItemsByName = async (req, res) => {
    const { name } = req.query
    try{
        const items = await MenuItem.find({ name : name })
        let menuItems = []
        if (!items) {
            res.status(204).json({ message : `No items for name ${name}`})
        }
        for (const item of items) {
            menuItems.push(await getItemInfo(item))
        }
        res.status(200).json(menuItems)
    } catch(err) {
        console.log(err.message);
        res.status(500).json({ message : 'Internal server error'})
    }
}

const updatePrice = async (req, res) => {
    const { menuItem} = req.body 
    try {
        const item = await MenuItem.findOne({ name : menuItem})
    } catch (err) {
        console.log(err.message);
    }
}

export { addMenuItem, getMenuItems, getMenuItemsByCategory, getMenuItemsByRestaurant, getMenuItemsByCategory, getMenuItemsByName}