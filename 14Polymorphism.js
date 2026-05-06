class Vehicle {
  start() {
    console.log("Vehicle starts");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car starts with key");
  }
}

class Bike extends Vehicle {
  start() {
    console.log("Bike starts with kick");
  }
}

let v = new Vehicle();
let c = new Car();
let b = new Bike();

v.start();
c.start();
b.start();
