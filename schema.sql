DROP DATABASE IF EXISTS testdrive;
CREATE DATABASE testdrive;

USE testdrive; 
CREATE TABLE Drivers (
  driverLicense VARCHAR(11) NOT NULL,
  fullName VARCHAR(45) NOT NULL,
  phone INT(10) NOT NULL,
  company VARCHAR(45) NOT NULL,
  PRIMARY KEY (driverLicense)
);

CREATE TABLE Cars (
  vinNum VARCHAR(17) NOT NULL,
  year INTEGER(4) NOT NULL,
  model VARCHAR(45) NOT NULL, 
  make VARCHAR(45) NOT NULL,
  engine VARCHAR(10) NULL,
  gasType VARCHAR (10)NOT NULL, 
  PRIMARY KEY (vinNum)
);

CREATE TABLE Drive (
  id INT(10) NOT NULL AUTO_INCREMENT, 
  driverLicense VARCHAR(11) NOT NULL, 
  vinNum VARCHAR(17) NOT NULL, 
  date DATE NOT NULL,
  odometer INTEGER(10) NOT NULL,
  gasPerGallon DECIMAL(2,2) NOT NULL, 
  totalCost DECIMAL(4,2) NULL, 
  PRIMARY KEY (id),
  FOREIGN KEY (driverLicense) REFERENCES Drivers(driverLicense),
  FOREIGN KEY (vinNum) REFERENCES Cars (vinNum)
);