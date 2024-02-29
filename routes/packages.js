const express = require("express");
const { getPackages, postPackage, updatePackage, deletePackage } = require("../controller/packages");
const router = express.Router();

const multer = require('../middlewares/multer');
const auth = require("../middlewares/auth");

//Routes:
router.route("/").get(getPackages).post(auth, [multer.single('thumbnail'), postPackage]);
router.route("/:id").patch(auth, updatePackage).delete(auth, deletePackage);

module.exports = router;