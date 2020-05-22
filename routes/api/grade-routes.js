db = require("../../models") 

module.exports = function(app) {
    //get route to pull all grades data
    //matches to /api/grades/
    app.get("/", function(req, res) {
        db.Grades.findAll({})
            .then(function(dbGrade) {
                res.json(dbGrade);
            });
    });
}