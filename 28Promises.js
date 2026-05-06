// // Promise
// // 1. Open BMS
// // 2. Search Movie
// // 3. Select Seats
// // 4. Book ticket

// let p = new Promise((resolve, reject) => {
//   let app = "BMS";

//   if (app === "BMS") {
//     resolve("1. Open BMS");
//   } else {
//     reject("Please install BMS as it is not found");
//   }
// }) // It is not recommended to use semi colon

// p.then((step1) => {
//   console.log(step1);
//   console.log("2. Seacrh Movie");
// });
// p.then(() => {
//   console.log("3. Select Seats");
// });
// p.then(() => {
//   console.log("4. Book  Ticket");
// });
// p.catch((e) => {
//   console.log(e);
// });
// p.finally(() => {
//   console.log("Close BMS");
// });

// Promises with Set Timeout

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let app = "BMS";
    if (app === "BMS") {
      resolve("1. Open BookMyShow");
    } else {
      reject(new Error("BMS not found"));
    }
  }, 2000);
});

p.then((app) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Opened ${app}`);
      resolve();
    }, 2000);
  });
})
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Search for the movie");
        resolve();
      }, 5000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Select Seats");
        resolve();
      }, 8000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Ticket Booked");
        resolve();
      }, 1000);
    });
  })
  .catch((err) => {
    console.log("Error:", err.message);
  })
  .finally(() => {
    setTimeout(() => {
      console.log("Closed App");
    }, 6000);
  });
