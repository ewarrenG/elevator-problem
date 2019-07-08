console.log('test');

function Elevator(id, minFloor, maxFloor, currentFloor) {
  this.id = id;
  this.minFloor = minFloor;
  this.maxFloor = maxFloor;
  this.currentFloor = currentFloor;
  this.destinationFloors = [];
}

//elevatorControlSystem
//creation of the elevators
function ElevatorControlSystem() {
  this.availableElevators = [];
  this.createElevators = function() {
    for (let i = 0; i <= 2; i++) {
      this.availableElevators.push(new Elevator(i, 0, 10, 0));
    }
  };
}

//iterates through elevators and looks for when
//where last entry in destinationFloors is less than newFloor
//to ensure efficient ride
ElevatorControlSystem.prototype.queueNewDestination = function(newFloor) {
  let floorHasBeenAssignedToElevator = false;
  this.availableElevators.forEach(elevator => {
    if (
      (elevator.destinationFloors.length == 0 ||
        elevator.destinationFloors[elevator.destinationFloors.length - 1] < newFloor) &&
      !floorHasBeenAssignedToElevator
    ) {
      elevator.destinationFloors.push(newFloor);
      floorHasBeenAssignedToElevator = true;
      //break;
    }
  });
};

//mimicing the operation of the elevator
//i.e. arrival at a floor should delete that floor from destinationFloors
// 1) loop strategy -- iterating every so often
// 2) manual approach -- hey this trip to this floor for this elevator was complete

Elevator.prototype.completeTripToFloor = function(floor) {
  // console.log('completeTripToFloor');
  // console.log('floor', floor);
  // console.log('this.destinationFloors.indexOf(floor)', this.destinationFloors.indexOf(floor));
  if (this.destinationFloors.indexOf(floor) > -1) {
    this.destinationFloors.splice(this.destinationFloors.indexOf(floor), 1);
  }
};

//todo
//front end
//input where you enter a value and it spits out
//which elevator you'll be riding
