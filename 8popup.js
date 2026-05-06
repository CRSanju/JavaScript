alert("Welcome to JavaScript")

let result = confirm("Do you want to learn JavaScript")
document.writeln("User clicked: ", result)
if(result) {
    document.writeln("Agreed for JS")
} else {
    document.writeln("Disagreed")
}

const name = prompt("Enter the Name: ");
document.writeln("<h1> Welcome</h1>", name);


//Here, I have used typing casting in order to change the input from String to a Number
let a = Number(prompt("Enter first number: "))
let b = Number(prompt("Enter second number: "))
alert("The sum is: " + (a + b))
document.writeln("<h1> Welcome </h1> :", name)

