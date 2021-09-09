// ### Problem 1:
// Create a class Product that represents a product sold online. A product has a price, quantity and name.
// The class should have a method that prints a product's information in the following format:
// ``` Banana, price 1.1, amount 13```.
// Create two instances of the class and call the method created to print the product's details.

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  printAllAttributes() {
    console.log(`${this.name} Price: ${this.price} Quantity: ${this.quantity}`);
  }
}

let product1 = new Product("Theremin", "1499.99", "1");
let product2 = new Product("Electric Violin", "217.49", "1");

product1.printAllAttributes();
product2.printAllAttributes();
