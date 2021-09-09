// ### Problem 2:
// Define a class called Pet with three properties, type, breed and age.
// Create a method called formatProperties that prints all object properties using string templating.
// Create a method called changeAge that takes a number and updates the age property of an object.
// Create a method called dogYears that checks if the pet type of the object is dog,
// if so return the age in dog years (age times 7), otherwise return the message "[PET TYPE] is not a dog!".
// Create an instance of the Pet Class called pet1.
// Print all property values of the object using the class method.
// Create another instance of the Pet Class with diffrent property values called pet2.
// Print all property values of the object using the class method.
// Change the age grade of pet1.
//  Print the age of pet1 in dog years using the class method.
//  Print the age of pet2 in dog years using the class method

class Pet {
  constructor(type, breed, age) {
    this.type = type;
    this.breed = breed;
    this.age = age;
  }
  formatProperties() {
    console.log(
      `Pet Type: ${this.type}, Breed: ${this.breed}, Age: ${this.age}`
    );
  }
  changeAge() {
    this.age = prompt(
      `The current age for ${this.type} is ${this.age}, please enter the age you would like to replace the current one with.`
    );
  }
  dogYears() {
    if (this.type === "dog") {
      this.dogYears = this.age * 7;
      console.log(`${this.type} is ${this.dogYears} in dog years`);
    } else {
      console.log(`${this.type} is not a dog!`);
    }
  }
}

let pet1 = new Pet("dog", "pitbull", "7");
pet1.formatProperties();
let pet2 = new Pet("bird", "cockatiel", "2");
pet2.formatProperties();
pet1.changeAge();
pet1.formatProperties();
pet1.dogYears();
pet2.dogYears();
