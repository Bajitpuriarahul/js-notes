

// Ternery opereator

let isBoy = true;
isBoy
? console.log("He is a boy") 
: console.log("She is a girl");

// Window Method 

// alert() or window.alert("message");
// propt();
// confirm();

// Comparision Operator 
// <= , >= , != , , etc. 
 
let a = 12;
a +=a ; 
console.log(a); // 24
console.log(++a); // 25 
console.log(--a); // 24;

console.clear();

// Asynchronous Programming ------------------


// for (let e = 0; e < 4005; e++) {
//     let element = e;
//     console.log("This is the index number" + e);
// }
// console.log("Done printing");

//   this for loop blocks "Done printing" to execute , so we put this loop in setTimeOut funtion to make this asynchronous funciton 

setTimeout(() => {
    for (let e = 0; e < 4005; e++) {
        // let element = e; // is line ka use nai smj aya merko 
        console.log("This is the index number" + " "+e);
    }
}, 1000);

console.log("Done printing");


// We have 3 Methods to make javascirpt asynchronous 
// Async/Await
//Promises
// Closure


console.clear();

