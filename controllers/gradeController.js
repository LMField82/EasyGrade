const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Grade
            .findAll({})
            .then(dbGrade => res.json(dbGrade))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Grade
            .findById(req.params.id)
            .then(dbGrade => res.json(dbGrade))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Grade
            .create({
                grade: req.body.grade,
                AssignmentId: req.body.AssignmentId,
                StudentId: req.body.StudentId
            })
            .then(dbGrade => res.json(dbGrade))
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        db.Grade
            .update(req.body, {
                where: {
                    id: req.body.id
                }
            })
            .then(dbGrade => res.json(dbGrade))
            .catch(err => res.status(422).json(err));
    }, 

    destroy: function (req, res) {
        db.Grade
            .destroy(req.params.id)
            .then(dbGrade => res.json(dbGrade))
            .catch(err => res.status(422).json(err));
    }
}