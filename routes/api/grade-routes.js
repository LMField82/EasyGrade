const router = require("express").Router();
//const gradeController = require("../../controllers/gradeController.js");

//matches with /api/grades/
router.route("/")
    .get(gradeController.findAll)
    .get(gradeController.findById)
    .post(gradeController.create)
    .update(gradeController.update)
    .destroy(gradeController.destroy)


module.exports = router;