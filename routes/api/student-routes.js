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


// const db = require("../../models");

// module.exports = function(app) {

//     //get route to pull all students
//     //matches to api/students
//     app.get("/", function(req, res) {
//         db.Student.findAll({})
//             .then(function(dbStudent) {
//                 res.json(dbStudent);
//             });
//     });

//     //get route for finding one student
//     //matches to /api/students/:id
//     app.get("/:id", function(req, res) {
//         db.Student.findOne({
//             where: {
//                 id: req.params.student_id
//             }
//         }).then(function(dbStudent) {
//             res.json(dbStudent);
//         });
//     });
// }
