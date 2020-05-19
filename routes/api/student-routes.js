const db = require("../../models");

module.exports = function(app) {

    //get route to pull all students
    app.get("/students", function(req, res) {
        db.Student.findAll({})
            .then(function(dbStudent) {
                res.json(dbStudent);
            });
    });

    //get route for finding one student
    app.get("/students/:id", function(req, res) {
        db.Student.findOne({
            where: {
                id: req.params.student_id
            }
        }).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });
}
