function add(a) {
    console.log(a);
}

function add(a, b) {
    console.log(a + b);
}

function add(a, b, c) {
    console.log(a + b + c);
}

function add(a, b, c, d) {
    console.log(a + b + c + d);
}

add(10);
add(10, 20);
add(10, 20, 30);
add(10, 20, 30 ,40);

//Varargs - spread / Rest Operator

function sum(...numbers) { // ...[10, 20, 30] ... = 0 - n
    let total = 0;
    for(let i of numbers) {
        total = total + i; // total += i
    }
    console.log(total);
}

sum();
sum(10, 20, 30);
sum(100);