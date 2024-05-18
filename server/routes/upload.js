import express from 'express'
import multer from 'multer'
import storage from '../config/multerOptions.js'
import uploadImage from '../controllers/uploadController.js'

const upload = multer({ storage: storage })
const uploadRouter = express.Router()

uploadRouter.post('/upload', upload.single('image'), uploadImage)

export default uploadRouter