function Vehicle(color, engine) {
  this.color = color;
  this.engine = engine;
}

function Car(model, color, engine) {
  this.model = model;
  this.color = color;
  this.engine = engine;
}

function Motorcycle(model, color, engine) {
  this.model = model;
  this.color = color;
  this.engine = engine;
}

Vehicle.prototype.drive = function() {
  const timer = 2000;
    let changeStep;

clearInterval(this.stopInterval);

if (this.VehicleIsDriving) {
    console.log('Already driving');
    return;
}
this.VehicleIsDriving = true;

this.driveInterval = setInterval(() => {
    this.speedNow += changeStep;
    console.log(this.speedNow);

    if (this.speedNow >= this.maxSpeed) {
        this.showSpeedWarningMessage();
    }
}, timer)
};

Vehicle.prototype.showSpeedWarningMessage = function() {
  console.log('speed is too high, SLOW DOWN!');
};

Vehicle.prototype.upgradeEngine = function(newEngine, color) {
  this.engine = newEngine;
  this.color = color;
}

Vehicle.prototype.getInfo = function() {
  let info = {
    engine: this.engine,
    color: this.color
  }
  console.log(info);
}

Vehicle.prototype.stop = function() {
  clearInterval(this.intervalId);
  console.log('Vehicle is stopped. Maximum speed during the drive was');
}

Car.prototype.drive = function() {
  Vehicle.prototype.drive.call(this);
}

Car.prototype.upgradeEngine = function(newEngine, color) {
    this.engine = newEngine;
  this.color = color;
}

Car.prototype.getInfo = function() {
    let info = {
    engine: this.engine,
    color: this.color,
    maxSpeed: this.maxSpeed,
    model: this.model
  }
  console.log(info);
}


Car.prototype.stop = function() {
  clearInterval(this.intervalId);
  console.log('Car is stopped. Maximum speed during the drive');
}

Motorcycle.prototype.drive = function() {
  Vehicle.prototype.drive.call(this);
}

Motorcycle.prototype.upgradeEngine = function(newEngine, color) {
    this.engine = newEngine;
  this.color = color;
}

Motorcycle.prototype.getInfo = function() {
  Car.prototype.getInfo.call(this)
}

Motorcycle.prototype.stop = function() {
  clearInterval(this.intervalId);
  console.log('Motorcycle is stopped. Good drive');
}

Motorcycle.prototype.showSpeedWarningMessage = function() {
Vehicle.prototype.showSpeedWarningMessage.call(this);

if (this.speedNow >= this.maxSpeedDifference) {
    console.log('Engine overheating');
    this.stop();
}
}


