import Restaurant from "../models/Restaurant.js";

const addRestaurant = async (req, res) => {
    try {
        const duplicate = await Restaurant.findOne({ name : req.body.name})
        if (duplicate) {
            console.log('restaurant already exists');
            res.status(409).json({ succcess : false, message : 'Restaurant already exists'})
        }
        const newRes = await Restaurant.create({
            name : req.body.name,
            password : req.body.password,
            location : req.body.location,
            deliveryPrice : req.body.deliveryPrice,
            estimatedDeliveryTime : req.body.estimatedDeliveryTime
        })

        console.log(`New restaurant registered : ${newRes.name}`);
        res.status(201).json( { succcess : true, message : 'New restaurant registered'})
    }
    catch(err) {
        console.log(err.message);
        res.status(500).json({ message : 'Internal server error'})
    }
}

const restaurantLogin = async (req, res) => {
    const { name, password } = req.body
    try {
        const restaurant = await Restaurant.findOne({ name : name })
        if (!restaurant) {
            res.status(409).json({ success : false, message : `restaurant not found with restaurant ${name}`})
        }
        if (restaurant && password !== restaurant.password) {
            res.status(409).json({ success : false, message : `Wrong password for restaurant ${name}`})
        }
        console.log('restaurant handler logged in');
        res.status(200).json({ restaurant: restaurant, succcess : true})
    }catch (err) {
        console.log(err.message);
        res.status(500).json({ message : 'Internal server error'})
    }
}

export { addRestaurant, restaurantLogin}