//HOF
function order(prepare, deliver) {
  console.log("Ordered Coffee");
  prepare();
  deliver();
  prepare();
  deliver();
}

//Callback function
function prepare() {
  console.log("Preparing Coffee");
}

function deliver() {
    console.log("Coffee delivered");
}
order(prepare, deliver);

// //HOF
// function order(callprepare, calldeliver) {
//   console.log("Ordered Coffee");
//   callprepare();
//   calldeliver();
//   callprepare();
//   calldeliver();
// }



// //Callback function
// function prepare() {
//   console.log("Preparing Coffee");
// }


// function deliver() {
//   console.log("Coffee delivered");
// }
// order(prepare, deliver);