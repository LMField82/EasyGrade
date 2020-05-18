const db = require("../../models");

module.exports = function(app) {

    //get route to pull all students
    app.get("/api/students/", function(req, res) {
        db.Student.findAll({})
            .then(function(dbStudent) {
                res.json(dbStudent);
            });
    });

    //get route to pull all grades data
    app.get("/api/grades/", function(req, res) {
        db.Grades.findAll({})
            .then(function(dbGrade) {
                res.json(dbGrade);
            });
    });

    //get route to pull all assignment data
    app.get("/api/assignments", function(req, res) {
        db.Assignments.findAll({})
            .then(function(dbAssignment) {
                res.json(dbAssignment);
            });
    });

    //get route for finding one student
    app.get("/api/students/:id", function(req, res) {
        db.Student.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbStudent) {
            res.json(dbStudent);
        });
    });

    //get route for finding one assignment
    app.get("/api/assignments/:id", function(req, res) {
        db.Assignment.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbAssignment) {
            res.json(dbAssignment);
        });
    });

    //put route for updating a student
    
}