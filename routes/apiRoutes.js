var db = require("../models");

module.exports = function(app) {
  // Get all driver
  app.get("/api/driver", function(req, res) {
    db.Driver.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new user
  app.post("/api/driver", function(req, res) {
    db.Driver.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete a user by id
  app.delete("/api/driver/:id", function(req, res) {
    db.Driver.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  // Create a new car
  app.post("/api/car", function(req, res) {
    db.Car.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete a car by id
  app.delete("/api/car/:id", function(req, res) {
    db.Car.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
