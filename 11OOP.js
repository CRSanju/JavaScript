//Creating an Object

let Student = {
  studentName: "Abhi",
  age: 23,
  cgpa: 7.8,
  study: function () {
    console.log(Student.studentName, " studies");
  },
  sleep: function () {
    console.log(`${this.studentName} sleeps`);
  },
};

console.log(Student.studentName);
console.log(Student.age);
console.log(Student.cgpa);
Student.study();
Student.sleep();

console.log(
  "==================================================================",
);
//class

class Student1 {
  sname = "Sanju";
  sage = 24;

  study() {
    console.log("Student studies");
  }
}

const s = new Student1();
console.log(s.sname);
console.log(s.sage);

// console.log(
//   "============================================================================",
// );
// console.log("09-03-2026");
// console.log();

// class Employee {
//   ename;
//   eid;
//   salary;
//   erole;

//   work() {
//     console.log("Employee works");
//   }

//   project() {
//     console.log("Project completed");
//   }
// }

// const e1 = new Employee();
// e1.ename = "Abhi";
// e1.eid = 1;
// e1.salary = 100000;
// e1.erole = "Developer";
// console.log(e1);

// const e2 = new Employee();
// e2.ename = "Bhavesh";
// e2.eid = 2;
// e2.salary = 400000;
// e2.erole = "Testing";
// console.log(e2);

console.log(
  "============================================================================",
);
console.log(
  "============================================================================",
);
console.log(
  "============================================================================",
);

class Employee {
  constructor(eid, ename, esalary, erole) {
    this.eid = eid;
    this.ename = ename;
    this.esalary = esalary;
    this.erole = erole;
  }

  work() {
    console.log(this.ename, "is working");
  }

  project() {
    console.log(this.ename, " assingned a project");
  }

  display() {
    console.log("Employee Name: ", this.ename);
    console.log("Employee ID:", this.eid);
    console.log("Employee Salary: ", this.salary);
    console.log("Employee Role: ", this.erole);
  }
}

const e1 = new Employee(101, "Abhi", 10000, "Developer");
const e2 = new Employee(103, "Bhavesh", 40000, "Testing");

e1.display();
e1.work();
e1.project();

console.log("-----------------------------");
e2.display();
e2.work();
e2.project();
