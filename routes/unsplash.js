const express = require("express");

const router = express.Router();

const controller = require("../controllers/unsplash");

router.get("/search/photos", controller.getPhotos);

module.exports = router;
