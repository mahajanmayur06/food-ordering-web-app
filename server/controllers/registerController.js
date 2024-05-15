import User from '../models/User.js'

const registerUser = async (req, res) => {
    const { username, password, name, email } = req.body
    try {
        const duplicate = await User.findOne({ username : username })
        if (duplicate) {
            console.log('User with username already exists');
            res.status(409).json({ message : 'User with username already exists', success : false})
        }
        const newUser = await User.create({
            username : username,
            password : password,
            name : name,
            email : email
        })
        console.log('User created named ', name);
        res.status(201).json({ message : 'User created', success : true})
    } catch(err) {
        console.log(err.message);
        res.status(500).json({ message : 'Internal server error'})
    }
}
export default registerUser