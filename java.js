console.log('hello world');

//JS uses prototypes and objects to fill in gaps of not being
// og class-based language

var elevator = function(i) {
  this.id = i;
  this.currentFloor = 0;
  this.destinationFloor = [];
  this.maxFloor = 40;
  this.minFloor = 0;
  this.maxOccupany = 10;
};
//benefit of assigning to protortype
//every future elevator object you declare
//will have these methods be default
elevator.prototype.getAttr = function(attr) {
  return this[attr];
};
this.getAttr = function(attr) {
  return this[attr];
};
elevator.prototype.setAttr = function(attr, val) {
  this[attr] = val;
};
elevator.prototype.pushAttr = function(attr, val) {
  this[attr].push(val);
};

var elevator1 = new elevator(1);
console.log(elevator1.getAttr('destinationFloor'));
//b/c not defined as part of prototype
//has to be defined on each elevator despite being same object
// elevator1.getAttr = function(attr) {
//   return this[attr];
// };
// console.log(elevator1.getAttr('destinationFloor'));

var elevatorControlSystem = function(elevator) {
  //pending floors
  //completed floors
  this.pendingFloors = [];

  this.addPendingFloor = function(val) {
    this.pendingFloors.push(val);
  };

  this.assignFloorToElevator = function(elevator, floor) {
    elevator.pushAttr('destinationFloor', floor);
  };
};

// var controlSystem = new elevatorControlSystem(elevator1);
// controlSystem.assignFloorToElevator(elevator1, 10);
// controlSystem.assignFloorToElevator(elevator1, 15);
// controlSystem.assignFloorToElevator(elevator1, 12);
// console.log(elevator1.destinationFloor);
