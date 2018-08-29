module.exports = function(sequelize, DataTypes) {
  var Driver = sequelize.define("Driver", {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    company: DataTypes.STRING,
    driverLicense: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return Driver;
};
