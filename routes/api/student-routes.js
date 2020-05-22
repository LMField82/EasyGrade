const db = require("../../models");

module.exports = function(app) {

    //get route to pull all students
    //matches to api/students
    app.get("/", function(req, res) {
        db.Student.findAll({})
            .then(function(dbStudent) {
                res.json(dbStudent);
            });
    });

    //get route for finding one student
    //matches to /api/students/:id
    app.get("/:id", function(req, res) {
        db.Student.findOne({
            where: {
                id: req.params.student_id
            }
        }).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });
}
