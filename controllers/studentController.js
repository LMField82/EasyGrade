const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Student
            .findAll({})
            .then(dbStudent => res.json(dbStudent))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Student
            .findById(req.params.id)
            .then(dbStudent => res.json(dbStudent))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Student
            .create({ standard: req.body.standard })
            .then(dbStudent => res.json(dbStudent))
            .catch(err => res.status(422).json(err));
    },

    destroy: function (req, res) {
        db.Student
            .destroy(req.params.id)
            .then(dbStudent => res.json(dbStudent))
            .catch(err => res.status(422).json(err));
    }
}