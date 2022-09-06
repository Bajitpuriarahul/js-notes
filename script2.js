

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

// setTimeout(() => {
//     for (let e = 0; e < 4005; e++) {
//         // let element = e; // is line ka use nai smj aya merko 
//         console.log("This is the index number" + " "+e);
//     }
// }, 1000);

// console.log("Done printing");


// We have 3 Methods to make javascirpt asynchronous 
// Async/Await
//Promises
// Closure


console.clear();



//Callback function ------------ ( function ke anr function)
// yh synchronous and asynchronous dono ho skta hai


// yh maan lo apn Http reqest mar kr server se la rhe hai Data
let students =[
    {name:"Rahul",subject:"JavaScript"},
    {name:"Mohan",subject:"Python"}
]


// niche wala code synchronous hai

// function func(){
//     students.push(student);
// }
// function enrollStudents(student){
//     setTimeout(func,3000);
// }; 
// ------------- OR ----------------

// function enrollStudent(newname){
//     setTimeout(function(){
//         students.push(newname);
//     },3000);
// }
// function getStudents(){
//     setTimeout(function(){
//         console.log("Students have been fetched")
//         let str = "";
//         students.forEach(function(value){
//             str +=` <li>${value.name}</li>`
//         });
//         document.getElementById("students").innerHTML = str;
//     },1000);
// }

// let newStudent = {name:"Sunny",subject:"Java"};
// enrollStudent(newStudent);
// getStudents();


// niche wala code asynchronous hai  , Callback ---------------


// function enrollStudent(newname, callback){
//     setTimeout(function(){
//         students.push(newname);
//         callback();
//     },3000);
// }
// function getStudents(){
//     setTimeout(function(){
//         console.log("Students have been fetched")
//         let str = "";
//         students.forEach(function(value){
//             str +=` <li>${value.name}</li>`
//         });
//         document.getElementById("students").innerHTML = str;
//     },1000);
// }

// let newStudent = {name:"Sunny",subject:"Java"};
// enrollStudent(newStudent ,getStudents);




// Promises -------------------

// Three types
// Pending , resolve and reject -----------------



// Niche hme setTimeout funciton lgaya hai but generally hm Http request Marege 
function func1(){
    return new Promise(function(resolve,reject){
        setTimeout( ()=>{
            let error = true;
            if(!error){
                console.log('Function :Your promise has been resolved')// Yeh likhne ke jrurt nai
                resolve();
            }
            else{
                console.log("Function : Your promise has not been resolved") // Yeh line likhne ke zrurt nai 
                reject("Some error occured");
            }
        })
    },2000);
}

func1().then(function(){
    console.log("Person :Thanks for resolving") 
}).catch(function(error){
    console.log(`Person : Very bad function, ${error}`)
});
    
// here instead of giving name error in Parantheses , you can give any name you like 
    
    // CallBack wale example mai hm Promise return kra skte hai  

function enrollStudent(newname){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            students.push(newname);
            console.log("Students have been enrolled");
            let error = true;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        },3000);
    })
}
function getStudents(){
    setTimeout(function(){
        console.log("Students have been fetched")
        let str = "";
        students.forEach(function(value){
            str +=` <li>${value.name}</li>`
        });
        document.getElementById("students").innerHTML = str;
    },1000);
}

let newStudent = {name:"Sunny",subject:"Java"};

// enrollStudent(newStudent ,getStudents).then(function(){
//     getStudents();
// }).catch(function(){
//     console.log("Some error occured")
// });
// ---------- OR  --------------  , kyuki getStudents bhi ke function hai 
enrollStudent(newStudent ,getStudents).then(getStudents).catch(function(){
    console.log("Some error occured")
});
























// forEach loop --------------

let val = ["Rahul","Goyal","banana"];
console.log(val);

// val.forEach();
// phle value ayegi hmesha , dusre number per index ayega------
val.forEach(function(element,index){
    console.log(index ,element);
});


