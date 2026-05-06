//function with no parameter no return value
function nopara() {
    let a  = 10;
    let b = 20;
    let c = a + b;
    console.log(c);
}
nopara();

//function with parameter but no return value
function para(a, b) {
 a = 10;
 b = 20;
 let c = a + b;
 console.log(c);
}
para();


//function with return value but not parameter
function returnValue() {
  let a =  10;
  let b = 20;
  return a + b;
}
let result = returnValue();
console.log(result);

//fucntion with parameter and return value
function returnPara(a, b) {
    a = 10;
    b= 20;
   return a + b;
}
let result1 = returnPara();
console.log(result1);