db = require("../../models") 

module.exports = function(app) {
    //get route to pull all grades data
    app.get("/grades", function(req, res) {
        db.Grades.findAll({})
            .then(function(dbGrade) {
                res.json(dbGrade);
            });
    });
}