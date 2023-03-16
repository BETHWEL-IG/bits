const express=require('express')
const router=express.Router()
const contactController=require('../controllers/contactController')
const imageUploader=require('../helpers/image-uploader')

router.post('/contact', imageUploader.upload.single('file'), contactController.postContact)


module.exports=router