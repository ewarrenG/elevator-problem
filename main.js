function Elevator(id, minFloor, maxFloor, currentFloor) {
  console.log('Elevator constructor');
  this.id = id;
  this.minFloor = minFloor;
  this.maxFloor = maxFloor;
  this.currentFloor = currentFloor;
  this.destinationFloors = [];
}

//elevatorControlSystem
//creation of the elevators
function ElevatorControlSystem() {
  console.log('ElevatorControlSystem constructor');
  this.availableElevators = [];
  this.createElevators = function() {
    for (let i = 0; i <= 2; i++) {
      this.availableElevators.push(new Elevator('elevator' + (i + 1), 0, 10, 0));
    }
  };
}

//iterates through elevators and looks for when
//where last entry in destinationFloors is less than newFloor
//to ensure efficient ride
ElevatorControlSystem.prototype.queueNewDestination = function(newFloor) {
  console.log('queueNewDestination method');
  let floorHasBeenAssignedToElevator = false;
  this.availableElevators.forEach(elevator => {
    if (
      (elevator.destinationFloors.length == 0 ||
        elevator.destinationFloors[elevator.destinationFloors.length - 1] < newFloor) &&
      !floorHasBeenAssignedToElevator
    ) {
      console.log('elevator.id', elevator.id);
      elevator.destinationFloors.push(newFloor);
      document.getElementById(elevator.id + 'Queue').innerHTML = elevator.destinationFloors;
      floorHasBeenAssignedToElevator = true;
    }
  });
};

//mimicing the operation of the elevator
//i.e. arrival at a floor should delete that floor from destinationFloors
// 1) loop strategy -- iterating every so often
// 2) manual approach -- hey this trip to this floor for this elevator was complete

Elevator.prototype.completeTripToFloor = function(floor) {
  if (this.destinationFloors.indexOf(floor) > -1) {
    this.currentFloor = floor;
    this.destinationFloors.splice(this.destinationFloors.indexOf(floor), 1);
    document.getElementById(this.id + 'Queue').innerHTML = this.destinationFloors;
  }
};

//todo
//front end
//input where you enter a value and it spits out
//which elevator you'll be riding

//commands:
let elevatorControlSystem = new ElevatorControlSystem();
elevatorControlSystem.createElevators();
elevatorControlSystem.queueNewDestination(10);
elevatorControlSystem.queueNewDestination(6);
elevatorControlSystem.queueNewDestination(4);
elevatorControlSystem.queueNewDestination(5);
console.log('elevatorControlSystem.availableElevators', elevatorControlSystem.availableElevators);
// setTimeout(() => {
//   elevatorControlSystem.availableElevators[2].completeTripToFloor(4);
// }, 1000);
//console.log('elevatorControlSystem.availableElevators', elevatorControlSystem.availableElevators);

// function destinationBtnClick() {
//   console.log('destinationBtnClick');
// }

$('#destinationBtn').on('click', function(event) {
  event.preventDefault(); // To prevent following the link (optional)
  if (parseInt($('#destinationInput').val(), 10) <= 10) {
    console.log('inside ifff');
    elevatorControlSystem.queueNewDestination($('#destinationInput').val());
  }
});

// setInterval(() => {
//   let elevatorToUse = Math.floor(Math.random() * 3) + 1;
//   console.log('elevatorToUse', elevatorToUse);
//   console.log('elevatorToUse - 1', elevatorToUse - 1);
//   let floorToComplete =
//     elevatorControlSystem.availableElevators[elevatorToUse - 1].destinationFloors[0];
//   console.log('floorToComplete', floorToComplete);
//   if (floorToComplete) {
//     elevatorControlSystem.availableElevators[elevatorToUse - 1].completeTripToFloor(
//       floorToComplete
//     );
//     console.log(
//       'elevatorControlSystem.availableElevators',
//       elevatorControlSystem.availableElevators
//     );
//   }
// }, 5000);
