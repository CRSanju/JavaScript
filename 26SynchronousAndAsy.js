// // console.log("open BMS")
// // console.log("Search Movie")
// // console.log("Select seats")
// // console.log("Make payment")

// setTimeout(() => {
//     console.log("Open BMS")
// }, 3000)

// setTimeout(() => {
//     console.log("Search Movie")
// }, 5000)

// setTimeout(() => {
//     console.log("Select seats")
// }, 8000)

// setTimeout(() => {
//     console.log("Make Payment")
// }, 2000)


// Callback(Event loop)
setTimeout(() => {
    console.log("Open BMS")
    setTimeout(() => {
        console.log("Search Movie")
        setTimeout(() => {
            console.log("Select Seats")
            setTimeout(() => {
                console.log("Make Payment")
            }, 2000)
        }, 8000)
    },5000)
}, 1000)