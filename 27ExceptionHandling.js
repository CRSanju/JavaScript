console.log("START");

try {
  let x = 30 / a;
} catch (e) {
  console.log("Error Occured", e.message);
} finally {
  console.log("This always executes");
}

console.log("END");
console.log();
console.log();

function checkAge(age) {
  if (age < 18) {
    throw "You are UnderAge";
  }

  return "You are allowed";
}

try {
  console.log(checkAge(17));
} catch (error) {
  console.log(error);
}
