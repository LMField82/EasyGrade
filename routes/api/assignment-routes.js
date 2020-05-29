const router = require("express").Router();
const assignmentController = require("../../controllers/assignmentController");

//matches with /api/assignments/
router.route("/")
    .get(assignmentController.findAll)
    .post(assignmentController.create)
    //.destroy(assignmentController.destroy)
    
router.route("/:id")
    .get(assignmentController.findById)

module.exports = router;


// db = require("../../models") 

// module.exports = function(app) {
// //get route for finding one assignment
// //matches /api/assignments/:id
//     app.get("/:id", function(req, res) {
//         db.Assignment.findOne({
//             where: {
//                 id: req.params.id
//             }
//         }).then(function(dbAssignment) {
//             res.json(dbAssignment);
//         });
//     });

//     //get route to pull all assignment data
//     app.get("/", function(req, res) {
//         db.Assignments.findAll({})
//             .then(function(dbAssignment) {
//                 res.json(dbAssignment);
//             });
//     });

//     //post route for adding new Assignment
//     app.post("/", function(req, res) {
//         db.Assignment.create({
//             standard: req.body.standard
//         })
//         .then(function(response) {
//             res.json(response)
//         })
//         .catch(function(err) {
//             res.status(401).json(err);
//         });
//     });
// }