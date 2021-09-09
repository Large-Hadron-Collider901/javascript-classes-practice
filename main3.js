// ### Problem 3: Inheritance
// Create a Person Class with the properties Name (first, last), Age, Interests,
// Bio ('NAME is AGE years old. They like INTERESTS')

// Create a class called Student that extends Person and adds the property Cohort to student.

// Create a class called Teacher that extends Person and adds the properties subject,
// and students (students should be an array of Student objects)
// Create a method called addStudent that takes an instance of Student and adds a student object to the students array.

// Create a method called listAllStudents that prints every student name and student cohort associated with a teacher.

// Create an instance of the Teacher class called teacher1 with an empty student array.
// Create another instance of this class called teacher2 with an empty student array.
// Add two students to teacher1 using the class method.
// Add two students to teacher2 using the class method.
// List all students associated with teacher1 using the class method.
// List all studnets associated with teacher2 using the class method.

class Person {
  constructor(fname, lname, age, interests, bio) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.interests = interests;
    this.bio = `${this.fname} ${this.lname} is ${this.age} years old. They like ${this.interests}`;
  }
}

class Student extends Person {
  cohort = "CodeCrew";
}

class Teacher extends Person {
  subject = "subject";
  students = [];

  addStudent() {
    let student = {
      name: prompt(
        `To add a student to ${this.fname}  ${this.lname}'s class, enter the student's first and last name.`
      ),
      cohort: prompt(`Enter cohort for new student`),
    };
    this.students.push(`${student.name} ${student.cohort}`);
  }
  listAllStudents() {
    console.log(
      `${this.fname}  ${this.lname}'s students are: ${this.students}`
    );
  }
}
let teacher1 = new Teacher(
  "Mr.",
  "Doe",
  "25",
  "teaching, golf, playing guitar",
  "math"
);
let teacher2 = new Teacher(
  "Mrs.",
  "Smith",
  "32",
  "reading, going to the beach, swimming",
  "writing programs"
);
teacher1.addStudent();
teacher1.addStudent();
teacher2.addStudent();
teacher2.addStudent();
teacher1.listAllStudents();
teacher2.listAllStudents();
