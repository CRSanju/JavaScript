// Parent class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`${this.name} costs $${this.price}.`);
  }
}

// Child class
class Book extends Product {
  constructor(name, price, author) {
    super(name, price); // Call parent constructor
    this.author = author;
  }

  display() {
    super.display(); // Call parent method
    console.log(`Written by ${this.author}.`);
  }
}

// Create objects
const product = new Product("Laptop", 1200);
product.display();
// Output: Laptop costs $1200.

const book = new Book("JavaScript Basics", 25, "John Doe");
book.display();
// Output:
// JavaScript Basics costs $25.
// Written by John Doe.
