module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define("Car", {
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    make: DataTypes.STRING,
    vinNumber: DataTypes.STRING,
    engine: DataTypes.STRING,
    gasType: DataTypes.STRING
  });
  return Car;
};
