import User from '../models/User.js'

const loginUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })
        if (!user) {
            res.status(409).json({ success : false, message : `user not found with username ${username}`})
        }
        if (user && password !== user.password) {
            res.status(409).json({ success : false, message : `Wrong password for user ${username}`})
        }

        console.log(`${username} logged in`);
        res.status(200).json({ user : user, success : true})
    } catch(err) {
        console.log(err.message);
        res.status(500).json({ message : 'Internal server error'})
    }
}
export default loginUser