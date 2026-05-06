// High Order function
function bookMyShow(search, select, book) {
  console.log("Welcome to Book my Show");
  search();
  select();
  book();
}

// Callback Function
function searchMovie() {
  console.log("Search for a movie");
}

// Callback Function
function selectSeats() {
  console.log("Select the best prefered seat");
}

// Callback Function
function bookTicket() {
  console.log("Booking completed");
}

bookMyShow(searchMovie, selectSeats, bookTicket);

console.log(
  "-------------------------------------------------------------------------",
);
console.log();

// Return function -  Closure
function x() {
  let a = 30;
  return function y() {
    console.log(a); // 30
  };
}

let res = x();
console.log(res); // y()
res();
res();
