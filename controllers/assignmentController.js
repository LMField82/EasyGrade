const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Assignment
            .findAll({})
            .then(dbAssignment => res.json(dbAssignment))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Assignment
            .findById(req.params.id)
            .then(dbAssignment => res.json(dbAssignment))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Assignment
            .create({ standard: req.body.standard })
            .then(dbAssignment => res.json(dbAssignment))
            .catch(err => res.status(422).json(err));
    },

    destroy: function (req, res) {
        db.Assignment
            .destroy(req.params.id)
            .then(dbAssignment => res.json(dbAssignment))
            .catch(err => res.status(422).json(err));
    }
}