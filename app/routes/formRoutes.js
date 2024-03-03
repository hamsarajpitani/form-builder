const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");

router.post("/save", formController.saveHTML);
router.get("/:id", formController.getHTML);

module.exports = router;
