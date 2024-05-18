const PORT = 3500
const uploadImage = async (req, res) => {
    console.log(`${req.file.filename} uploaded to database`);
    res.json({
        success : true,
        image_url : `http://localhost:${PORT}/images/${req.file.filename}`
    })
}

export default uploadImage