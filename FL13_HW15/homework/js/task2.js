function Vehicle(color, engine) {
  this.color = color;
  this.engine = engine;
  this.maxSpeed = 70;
  this.model = 'unknown model';
  this.startSpeed = 0;
  this.step = 20;

}

function Car(model, color, engine) {
  Vehicle.call(this, color, engine);
  this.model = model;
  this.maxSpeed = 80;
}

Car.prototype = Object.create(Vehicle.prototype);

function Motorcycle(model, color, engine) {
  Vehicle.call(this, color, engine);
  this.model = model;
  this.maxSpeed = 90;
  this.maxSpeedDifference = 30;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);

Vehicle.prototype.drive = function() {
  const timer = 2000;

  if (this.VehicleIsDriving) {
  console.log('Already driving');
  return;
  }
this.VehicleIsDriving = true;

  this.driveInterval = setInterval(() => {
    this.startSpeed += this.step;
    console.log(this.startSpeed);

    if (this.startSpeed >= this.maxSpeed) {
        this.showSpeedWarningMessage();
    }
  }, timer);
};

Vehicle.prototype.showSpeedWarningMessage = function() {
  console.log('speed is too high, SLOW DOWN!');
};

Vehicle.prototype.upgradeEngine = function(newEngine, maxSpeed) {
  this.engine = newEngine;
  this.maxSpeed = maxSpeed;
}

Vehicle.prototype.getInfo = function() {
  let info = {
    engine: this.engine,
    color: this.color,
    maxSpeed: this.maxSpeed,
    model: this.model
  }
  console.log(info);
}

Vehicle.prototype.stop = function() {
  const stoptimer = 1500;
  const zero = 0;
 
  this.maximumSpeed = this.startSpeed;
  clearInterval(this.driveInterval);
  
  if(this.stopDriving) {
    console.log('Already slows down');
   return;
  }
 this.stopDriving = true;


  this.brakingInterval = setInterval(() => {
    console.log(this.VehicleIsDriving);
    //this.VehicleIsDriving = false;
    this.startSpeed -= this.step;
    console.log(this.startSpeed);
 
    if (this.startSpeed <= zero) {
        clearInterval(this.brakingInterval);
        console.log(`Vehicle is stopped. Maximum speed during the drive was ${this.maximumSpeed}`);
    }
  }, stoptimer) 
};

Car.prototype.drive = function() {
  Vehicle.prototype.drive.call(this);
}

Car.prototype.upgradeEngine = function(newEngine, maxSpeed) {
  Vehicle.prototype.upgradeEngine.call(this, newEngine, maxSpeed);
}

Car.prototype.getInfo = function() {
  Vehicle.prototype.getInfo.call(this)
}

Car.prototype.stop = function() {
  Vehicle.prototype.stop.call(this);

}

Motorcycle.prototype.drive = function() {
  Vehicle.prototype.drive.call(this);
}

Motorcycle.prototype.upgradeEngine = function(newEngine, maxSpeed) {
  Vehicle.prototype.upgradeEngine.call(this, newEngine, maxSpeed);
}

Motorcycle.prototype.getInfo = function() {
  Vehicle.prototype.getInfo.call(this);
}

Motorcycle.prototype.stop = function() {
  Vehicle.prototype.stop.call(this);
}

Motorcycle.prototype.showSpeedWarningMessage = function() {
  Vehicle.prototype.showSpeedWarningMessage.call(this);

  if (this.startSpeed >= this.maxSpeedDifference) {
    console.log('Engine overheating');
    this.stop();
  }
}


