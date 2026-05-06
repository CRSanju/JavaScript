// function add() {
//     let a = 30;
//     let b = 20;
//     return (a + b);
// }
// console.log(add());

// function add(a, b) {
//     console.log(a + b);
// }
// add(10, 40);

// function add(a, b) {
//     return (a+b);
// }
// let res = add(10 + 20);
// console.log(res);

// function add() {
//     let a = 10;
//     let b = 20;
//     let res = a + b;
//     console.log(res);
// }
// add();

//Function Declarations - Named function hoisted
function square(num) {
     console.log(num * num);
}
square(5);


//Function Expression
let square1 = function(num) {
     console.log(num * num);
}
square1(6);

//Arrow function
let square2 = (num) => console.log(num * num);
square1(7);

let add = () => console.log(2 + 4);
add();

//IIFE - Immediately Invoked Function Expression - Anynomous function
(function() {
    console.log(2 + 8);
}) ();

//Arrow with IIFE
(() => console.log(2 + 10)) ();

(function(num) {
    console.log(num * num);
}) (4);