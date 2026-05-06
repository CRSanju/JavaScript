 /* function message() {
            alert("page loaded successfully");

              console.log("hello");
  console.log(3 + 7);

  document.writeln("Hello All, how are you");
  document.writeln("<br>");
  document.writeln("<br> Thank you");
  document.writeln("<br>");
  document.writeln("<h3>HELLO ALL</h3>");
  document.writeln("<br>");
  document.writeln(3 + 7);
  document.writeln("<br>");
  document.writeln("3 + 7");
  document.writeln("<br>");
  document.writeln(3 + "3" + 4 + 7);
  document.writeln("<br>");
  document.writeln("3" + 1 + 2 + 3);
  document.writeln("<br>");
  document.writeln(1 + 4 + 5 + "3");
  
  } */

  // var a = 10;
  // console.log(a);

  // a = 20;
  // console.log(a);

  // var a = 30;
  // console.log(a);

  // function hello() {
  //   var z = 100;
  //   console.log(z);
  // }
  // hello() // 100


  // let a = 10;
  // console.log(a);

  // a = 20;
  // console.log(a);

  // // let a = 30;
  // // console.log(a); // cannot be redeclared

  //  {
  //   let  z = 100;
  //   console.log(z);
  // }
  //  console.log(z) // Error. can be accessed only in the block.






function message() {
  alert("submitted successfully");
}

const pi = 3.14;
console.log("The value of pi is: " + pi);

const studentName = "Abhi";
let grade = 8;
let cgpa = 8.7;
let semester = 1;

console.log(
  "The student " +
    studentName +
    " in " +
    grade +
    "th grade have secured cgpa of " +
    cgpa +
    " in his " +
    semester +
    "st semester.",
);
console.log(
  `The student ${studentName} is in ${grade}th grade have secured cgpa of ${cgpa} in his ${semester}st semester.`,
);

let voterAge = 19;
console.log(voterAge >= 18 ? "Eligible" : "Not-Eligible");

let str = "Hello";
console.log(str);
console.log(typeof str);

// / 1

// let a = 12;

// let b = 8;

// console.log(a + b);

// // 2

// console.log(17 % 5);

// // 3

// let x = 8;

// console.log(x ** 3);

// // 4

// let count = 10;

// count++;

// console.log(count);

// // 5

// let score = 20;

// score--;

// console.log(score);

// // 6

// let num = 15;

// num += 10;

// console.log(num);

// // 7

// let value = 50;

// value -= 20;

// console.log(value);

// // 8

// let price = 25;

// price *= 4;

// console.log(price);

// // 9

// let total = 100;

// total /= 5;

// console.log(total);

// // 10

// let number = 29;

// number %= 6;

// console.log(number);

// // 11

// console.log(10 == "10");

// // 12

// console.log(10 === "10");

// // 13

// console.log(15 > 8);

// // 14

// console.log(7 <= 7);

// // 15

// console.log(20 != 25);

// // 16

// let n1 = 10;

// console.log(n1 > 5 && n1 < 15);

// // 17

// let n2 = 60;

// console.log(n2 < 10 || n2 > 50);

// // 18

// console.log(!true);

// // 19

// let age = 30;

// console.log(age >= 18 && age <= 60);

// // 20

// let marks = 75;

// console.log(marks > 50 && marks < 100);

// // 21

// let num1 = 4;

// console.log(num1 % 2 === 0 ? "Even" : "Odd");

// // 22

// let voterAge = 19;

// console.log(voterAge >= 18 ? "Eligible" : "Not Eligible");

// // 23

// let examMarks = 40;

// console.log(examMarks >= 35 ? "Pass" : "Fail");

// // 24

// let p = 10;

// let q = 20;

// console.log(p > q ? p : q);

// // 25

// let checkNum = -5;

// console.log(checkNum >= 0 ? "Positive" : "Negative");

// // 26

// let str = "Hello";

// console.log(typeof str);

// // 27

// let flag = true;

// console.log(typeof flag);

// // 28

// let arr = [1, 2, 3];

// console.log(arr instanceof Array);

// // 29

// function Person(name) {

//   this.name = name;

// }

// let person1 = new Person("John");

// console.log(person1 instanceof Person);

// // 30

// console.log(typeof null);

// 31

// console.log([] == ![]);

// // 32

// console.log(![]);

// // 33

// console.log([] == 0);

// // 34

// console.log([1] == 1);

// // 35

// console.log([1,2] == "1,2");

// // 36

// console.log({} == {});

// // 37

// console.log([] == []);

// // 38

// console.log(0.1 + 0.2 == 0.3);

// // 39

// console.log(0.1 + 0.2);

// // 40

// console.log(1 < 2 < 3);

// // 41

// console.log(3 > 2 > 1);

// // 42

// console.log(null > 0);

// console.log(null == 0);

// console.log(null >= 0);

// // 43

// console.log(undefined > 0);

// console.log(undefined == 0);

// // 44

// console.log(typeof null);

// // 45

// console.log("5" * "2");

// // 46

// console.log("5" * "two");

// // 47

// console.log(+"");

// // 48

// console.log("" - 1);

// // 49

// let a = [1,2,3];

// console.log(a + 1);

// // 50

// console.log(true == "1");

// // 51

// console.log(false == "0");

// // 52

// console.log(Boolean("0"));

// // 53

// console.log(Boolean(0));

// // 54

// console.log(1 && 2 && 3);

// // 55

// console.log(1 || 2 || 3);

// // 56

// console.log(0 && 2);

// // 57

// console.log(0 || 2);

// // 58

// let x = 5;

// let y = x += 3;

// console.log(y);

// // 59

// let p = 10;

// console.log(p = p++);

// // 60

// let q = 10;

// console.log(q++ + q++);
