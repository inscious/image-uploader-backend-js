const express = require("express");
const router = express.Router();
const imagesController = require("../controllers/imagesContoller");
const { multerUploads } = require("../middleware/multer");

router.post("/", multerUploads, imagesController.uploadImage);

module.exports = router;
