// async function BMS() {

//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   console.log("1. Open BMS");

//   await new Promise((resolve) => setTimeout(resolve, 6000));
//   console.log("2. Search for the Movie");

//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   console.log("3. Select the seats");

//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   console.log("4. Book the tickets");
// }

// BMS();

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function BMS() {
  try {
    let app = "BMS";

    if (app !== "BMS") throw new Error("BMS not found");
    console.log("1. Open BMS");

    await wait(6000);
    console.log("2. Search for the Movie");

    await wait(3000);
    console.log("3. Select the seats");

    await wait(2000);
    console.log("4. Book the tickets");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Close BMS");
  }
}
BMS();
