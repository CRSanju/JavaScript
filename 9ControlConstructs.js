// If Statement - A student is eligible for voting if age ≥ 18.

//If-Else Statement - Write a program to check if a number is positive or negative.

//If-Else Ladder- Check if a number is positive, negative, or zero.

//Nested If - A student passes if marks ≥ 40. If marks ≥ 80, show “Distinction”.

//Switch Case 1. Print the grade based on letter (A=Excellent, B=Good, C=Average, D=Poor).

//2. print the season based on months in the year (3,4,5 - summer) (11,12,1,2 - winter) (6,7,8,9 - rainy)

//---------- Looping constructs ---------------------

//For Loop - Print the first 10 natural numbers.

//While Loop - Print numbers from 1 to 5 using while loop.

//Do-While Loop: ATM machine: Keep asking PIN until the user enters 1234.

//For…of Loop - Print all fruits in a basket.

//For…in - Print all student details from an object.

//forEach Loop - Print the squares of all numbers in an array.

// ------------------ control flow modifiers-----------------------

//Print first 5 Natural numbers

//Break Statement - Question: Stop printing when number reaches 3.

//Continue Statement -Question: Skip printing number 3


console.log("---------------------------------------------------------------------")

let num =  44;
function checkNumber(num) {
    if(num > 0) {
        console.log("It is a postive number")
    } else {
        console.log("It is a negative number")
    }
}
checkNumber(num)

console.log("---------------------------------------------------------------------")

num = -22;
function checkNumber2(num) {
    if(num > 0) {
        console.log("It is a postive number")
    } else if (num < 0) {
        console.log("It is a negative number") 
    } else {
        console.log("The number is zero")
    }
}
checkNumber2(num)

console.log("================================================================")

// If Statement - A student is eligible for voting if age ≥ 18.
let age = 20;

if (age >= 18) {
    console.log("Student is eligible for voting");
}
console.log("----------------");


// If-Else Statement - Check if a number is positive or negative.
let num1 = -5;

if (num1 >= 0) {
    console.log("Number is positive");
} else {
    console.log("Number is negative");
}
console.log("----------------");


// If-Else Ladder - Check if a number is positive, negative, or zero.
let num2 = 0;

if (num2 > 0) {
    console.log("Positive");
} else if (num2 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
console.log("----------------");


// Nested If - A student passes if marks ≥ 40. If marks ≥ 80, show “Distinction”.
let marks = 85;

if (marks >= 40) {
    console.log("Student Passed");

    if (marks >= 80) {
        console.log("Distinction");
    }
} else {
    console.log("Student Failed");
}
console.log("----------------");


// Switch Case 1. Print the grade based on letter (A=Excellent, B=Good, C=Average, D=Poor).
let grade = "A";

switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    default:
        console.log("Invalid grade");
}
console.log("----------------");


// Switch Case 2. Print the season based on months
let month = 7;

switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;

    case 11:
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;

    case 6:
    case 7:
    case 8:
    case 9:
        console.log("Rainy");
        break;

    default:
        console.log("Unknown season");
}
console.log("----------------");


// For Loop - Print the first 10 natural numbers.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("----------------");


// While Loop - Print numbers from 1 to 5
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
console.log("----------------");


// Do-While Loop: ATM machine: Keep asking PIN until user enters 1234
let pin;
do {
    pin = 1234;
    console.log("Checking PIN...");
} while (pin !== 1234);

console.log("PIN Accepted");
console.log("----------------");


// For…of Loop - Print all fruits in a basket
let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
console.log("----------------");


// For…in Loop - Print all student details from an object
let student = {
    name: "Sanju",
    age: 20,
    course: "Computer Science"
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}
console.log("----------------");


// forEach Loop - Print squares of numbers in an array
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(n) {
    console.log(n * n);
});
console.log("----------------");


// Print first 5 Natural numbers
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("----------------");


// Break Statement - Stop printing when number reaches 3
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
console.log("----------------");


// Continue Statement - Skip printing number 3
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
console.log("----------------");