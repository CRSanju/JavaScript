// function add() {
//     let a = 5;
//     let b = 3;
//     let res = a + b;
//     console.log(`Addition of ${a} and ${b} is ${res}`);
// }
// add();

function add() {
    let a = 5;
    let b = 3;
    let res = a + b;
    document.writeln(`Addition of ${a} and ${b} is ${res}`);
}
add();

function Largest()
{
    let num1 = 10;
    let num2 = 5;
    let num3 = 8;

    let res = (num1 > num2)? num1 : (num2 > num3) ? num2 : (num3 > num1)? num3 : num1;
    console.log(res);
}
Largest();