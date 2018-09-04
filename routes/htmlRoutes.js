// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // index route loads view.html
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

  // index route loads view.html
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin_user.html"));
  });

  // index route loads view.html
  app.get("/car", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin_car.html"));
  });
};
