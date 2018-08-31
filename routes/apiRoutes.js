var db = require("../models");

module.exports = function(app) {
  // Get all driver
  // app.get("/api/driver", function(req, res) {
  app.get("/", function(req, res) {
    db.Drivers.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new user
  app.post("/api/driver", function(req, res) {
    /*
    { // postman object
      "driverLicense": "22222222222",
      "fullName": "driver 2",
      "phone": "98765432",
      "company": "XYZ"
    }
    */
    // db.Drivers.create(newDriver).then(function(dbExample) {
    db.Drivers.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete a user by id
  app.delete("/api/driver/:id", function(req, res) {
    db.Drivers.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  // Create a new car
  app.post("/api/car", function(req, res) {
    /* Postman obj
    {
      "vinNum": "01234",
      "year": "2017",
      "model": "LX",
      "make": "Toyota",
      "engine": "4 cycl",
      "gasType": "regular"
    }   
    */
    db.Cars.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete a car by id
  app.delete("/api/car/:id", function(req, res) {
    db.Car.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/drives", function(req, res) {
    db.Drive.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new drive
  app.post("/api/newdrive", function(req, res) {
    /*
    {
      "DriverId": "22222222222",
      "CarId": "01234",
      "date": "8/29/18",
      "odometer": "100",
      "gasPerGallon": "2.99",
      "totalCost": "56"
    } 
    */
    db.Drive.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
