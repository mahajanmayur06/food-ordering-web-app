import Restaurant from '../models/Restaurant.js'

const getItemInfo = async (item) => {
    try {
        const restaurant = await Restaurant.findById({ _id : item.provider})
        if (!restaurant) {
            throw new Error('restaurant not found')
        }
        item = {
            ...item,
            providerName : restaurant.name,
            location : restaurant.location,
            deliveryPrice : restaurant.deliveryPrice,
            estimatedDeliveryTime : restaurant.estimatedDeliveryTime
        }   
        return item
    } catch(err) {
        console.log(err.message);
        return null
    }
}

export default getItemInfo