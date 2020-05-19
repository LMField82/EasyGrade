db = require("../../models") 

module.exports = function(app) {
//get route for finding one assignment
    app.get("/assignments/:id", function(req, res) {
        db.Assignment.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbAssignment) {
            res.json(dbAssignment);
        });
    });

    //get route to pull all assignment data
    app.get("/assignments", function(req, res) {
        db.Assignments.findAll({})
            .then(function(dbAssignment) {
                res.json(dbAssignment);
            });
    });

    //post route for adding new Assignment
    app.post("/assignments", function(req, res) {
        db.Assignment.create({
            standard: req.body.standard
        })
        .then(function(response) {
            res.json(response)
        })
        .catch(function(err) {
            res.status(401).json(err);
        });
    });
}