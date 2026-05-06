//dynamivally typed - Runtime (As it assigned during Runtime)
let age  = 19;
console.log(age);
console.log(typeof(age));
let name = "Sanju";
console.log(typeof(name));
console.log(typeof `age`);
console.log(typeof 'age');
console.log(typeof 3.29);
console.log(typeof false);

let a;
console.log(a);
console.log(typeof b);

// let c = null;
// console.log(b);
// console.log(typeof b);


//loosely typed - type corecion
let d = 3;//number
d =  "three";//String
console.log(d);

//Array
let arr = [1, 2, 3];
console.log(arr);
console.log(arr[1]); //2

//Object - key: value
let person = {
    nam: "Sanju",
    age: 45
};
console.log(person);
console.log(person.nam);
console.log(person.nam, Object.values(person)), Object.keys(person);


//function
function fname() {
    let name = "Sanju";
    let greeting = `Good morning ${name}!`; //Template Literals ES6 ECMAscript
    console.log(greeting);
}
fname();