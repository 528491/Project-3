// const passport = require('passport');
// const User       = require('../models/user');
const db = require("../models");
const Event = require("../models/event");
// const Session    = require('../models/session');

module.exports = {

  // For adding a new event to a certain day
  addEvent: function(req, res) {

    // Use "Event" model
    db.Event

      // create a new MongoDB document
      .create(req.body)

      // return the response as a JSON object
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // For finding all events corresponding to whatever is in the url query.
  findAll: function(req, res) {
    db.Event

      // Find any items that match the request query.
      .find(req.query)

      // Sort in descending order
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // For removing an event
  remove: function(req, res) {
    // console.log("Ran controller function.");
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
