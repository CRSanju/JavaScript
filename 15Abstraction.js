class Shape {
  area() {
    console.log("Area calculation");
  }
}

class Circle extends Shape {
  area() {
    console.log("Area of Circle");
  }
}

let s = new Shape();
let c = new Circle();

s.area();
c.area();
