//Declaring Array in normal way
let movies = ["KGF", "Devara", "Toxic"]
console.log(movies.sort())
console.log(movies.sort().reverse())
console.log(movies.indexOf("Devara"))
console.log(movies.includes("KGF"))
console.log(movies)
// for(let i = 0; i < movies.length; i++) {
//      console.log(movies[i]);
// }

// Add something at last
movies.push("RRR")
console.log(movies)

// Add something at first
movies.unshift("PK")
console.log(movies)

// Delete something at the last
movies.pop();
console.log(movies)

// Delete something from thte front
movies.shift();
console.log(movies);

//Declaring Array using Constructor
let cgpa = new Array(9.4, 7.0, 8.6, 8.5);
console.log(cgpa)
console.log(cgpa[1])


// SPLICE - Changes original array
let numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers)
// numbers.splice(1, 3);
// console.log(numbers)

//array.splice(start index, deletecount, item1. item2)
numbers.splice(2, 1, 33, 333)
console.log(numbers)

// SLICE - Return new Array
let number = [1, 2, 3, 4, 5, 6];

// let res = number.slice(-3);
let res = number.slice(1, 4);
console.log(res); // [2, 3, 4]
console.log(number);

//27-02
console.log("---------------------------------------------------------------------------")

//For each loop in Array
let num = [1, 2, 3, 4, 5]
let double = []
num.forEach(n => double.push(n * 2));
console.log(num)
console.log(double)

let square = []
num.forEach(n => square.push(n * n));
console.log(square)

//map method
let n = [1, 2, 3];
let squared = n.map(n => n * n)
console.log(squared)

//filter
let numb = [1, 2, 3, 4, 5];
let evenNumber =  numb.filter(n => n % 2 == 0)
console.log(evenNumber);

//reduce
let n1 = [1, 2, 3, 4, 5];
let total = n1.reduce((num, sum) => sum + sum, 0)
console.log(total)

//concat
let a = [1, 2, 3]
let b = [4, 5, 6]
let c = a.concat(b);
console.log(c)

//join
let movie = ["KGF", "Devara", "Toxic"];
let z = movie.join(" - ");
console.log(z);

//destructing 
let fruits = ["apple", "banana", "cherry"];
let[p, q, r] = fruits;
console.log(p);
console.log(q);
console.log(r);
