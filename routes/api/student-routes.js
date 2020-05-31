const router = require("express").Router();
const studentController = require("../../controllers/studentController.js");

//matches with /api/students/
router.route("/")
    .get(studentController.findAll)
    .post(studentController.create)
    // .destroy(studentController.destroy)
router.route("/:id")
    .get(studentController.findById)

module.exports = router;
