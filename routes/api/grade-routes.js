const router = require("express").Router();
const gradeController = require("../../controllers/gradeController.js");

//matches with /api/grades/
router.route("/")
    .get(gradeController.findAll)  
    .post(gradeController.create)

router.route("/:id")
    .get(gradeController.findById)
    .put(gradeController.update)    
    .destroy(gradeController.destroy)


module.exports = router;