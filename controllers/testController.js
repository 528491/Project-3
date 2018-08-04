const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.Test
        .find(req)
        .then(dbTests => res.json(dbTests))
        .catch(err => res.status(422).json(err));
    }
};