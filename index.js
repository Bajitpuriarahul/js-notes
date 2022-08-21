
// Else if else statement 

let a = 4;

if(a<7){
    // console.log(`small number`);
}
else if(a==3){
// console.log('this no. is 3 ');
}
else{
    // console.log(`this is big number`);
}

// Switch Case operators

let b = "September";
switch (b) {
  case "winter":
    console.log("this is winter ")
    break;
  case "autumn":
    console.log("this is autumn")
    break;
    case "summer":
        console.log("this is summer")
        break;
        case "spring":
            console.log("this is spring")
  default:
    console.log("this is not a season")
    break;
}

// ----------------  Objects------------

let Employee = {
    name : "Rahul",
    age : 25,
    "salary 2" : 250,
    job : "Software eng."
};
// console.log(Employee);
// console.log(Employee.length);
// console.log(Employee.age);
// console.log(Employee['salary 2']);

// ---------Arrays ------------

let names = [1,4,3,"Rahul","Harry",undefined];
let name = new Array(1,4,3,"Rahul","Harry",undefined);
// console.log(names);
// console.log(names.sort());
// console.log(names[4]);
// console.log(name);
// console.log(name.length);
name.push("This is pushed");     
// console.log(name);


let ab = [23]; /* this is wrong */
let abc = new Array(23);
// console.log(ab);
// console.log(abc);



// Functions ---------------------------

function greet(name,Text,Hello=" my name is anthony"){
  console.log(name + " hello how are you?" +Text+Hello);
}

let namess = "Rahul";
let message = " BYe";


// greet(namess,message);
// greet("Rahul"," bye"," TATA");

// How to return value--------------
// Return mtlb to store function into a variable

function sum(a,b,c){
  // let d = a+b+c;
  // return d;
  return (a+b+c);
}

let sum1 = sum(1,2,3);
// console.log(sum1);



// Alert , Prompt , Confirm------------

// alert("This is a alert");

// prompt("What is your name?","Guest");

// let space = prompt("What is your name?","Guest");
// console.log(space);


// confirm("Are you sure?");

// let js =confirm("Are you sure?");
// console.log(js);


// let age =prompt("What is your age?");
// if(age<=18){
//   console.log("You are too young");
// }
// else{
//   console.log("You are good to go");
// }

// ----------loops---------------

//-------------- for ------------

let z = 0;
for (z=0; z<3; z++){
  // console.log(z);
}

let friends = ["Rahul", "Mohan", "Manish"];
for ( let a =0; a <friends.length; a++){
  // console.log(friends[a]);
}

// ------------foreach------------------
let Names =["haha","baba","caca"];
Names.forEach(function (a){
// console.log(a);
})

// ---------for of---------- (Best to iterate Arrays and not to use for objects , insteads use for in loop);

for (a of friends){
  // console.log(a);
}

// -----for in loop be used to iterate both , Arrays and Objects---


// ----- for in -------(to iterate Objects)------

let employees = {
   name : "RAhul",
   salary :2,
   age :23,
   nationality :"Indian"
}
for (a in employees){
  // console.log(employees[a]);
  // console.log(`${a} : ${employees[a]}`)
}

//  use a in console.log to get key and use , use employees to get key + value and multiple times and use employees[a] to get values----


// ----While loop---------

let i = 0 ;
while(i<4){
  // console.log(i);
  i++;
}

// -----Do while--------

let j = 9;
do{
  // console.log(j);
  j++
}while(j<4);

// ----Manipulating DOM--------

let main = document.getElementById('main');
// console.log(main);

let aaa = document.getElementsByClassName("container");
// console.log(aaa[1]);

let bbb = document.querySelector('.container');
// console.log(bbb);
let ccc = document.querySelectorAll(".container");
// console.log(ccc);

// -----------------Event listening Methods-------

let outer = document.getElementById("pssara");

function toggleHide(){
  if (outer.style.display ==="block"){
    outer.style.display ="none";
  }
  else{
outer.style.display = "block";
  }
}

// outer.addEventListener('mouseover', function run(){
//   // alert('Hello World');
//   console.log("Hello World");
// })


// ---------------SetTimeOut and SetInterval ------------------

// We want some functions to run after some interval of time 
// SetTimeOut :-- Allows us to run function once after the interval of time
// SetInterval :-- Allows us to run function repeatedly after the interval of time 


function greet (name){
  console.log('Hello World'+name );
}

// greet();
// setTimeout(greet,5000);
// setTimeout(greet,5000 , " Rahul");
// Pass arguments as a third Data ---------
// No paranthesses when calling the function----
let timeOut =setTimeout(greet,2000 , " Rahul");
console.log(timeOut);

// clearTimeout(1);
clearTimeout(timeOut);
// use above code to not let settimeout function to execute----

// setInterval(() => {
//   console.log('Hello');
// }, 2000);                             or 
//  setInterval(greet,1000," Rahul");
let setint = setInterval(greet,1000," Rahul");
clearInterval(setint);

function displayTime(){
  time = new Date();
  document.getElementById("time").innerHTML = time;
  // console.log(time);
}
// setInterval(displayTime,1000);


// ----------Data and Time -----------------

let dt = new Date();
// console.log(dt);
// let dt = new Date(year,month,date,hour,mintute,miliseconds);
let yr = dt.getFullYear();
let year = dt.getFullYear(2020);

// console.log(yr);
// get  ke aage time mai sab likh skthe hai ----------

// let clock = document.getElementById('clock');
// agar id same name se di ho tho variable declare krna jruri nai hota ....
function hh(){
  clock.innerHTML = new Date();
}
// setInterval(hh,1000);

// -----Arrow function-----------------

function hello(){
  console.log("hello000");
}
hello();

// orr 
let hello0 =()=>{
  console.log("hello00000000000");
} 
hello0();

// setTimeout(()=>{
// console.log("WE are inside timeout")
// },2000);


// let hha = (a,b)=>{
//   console.log(a+b);
// }
//  ------OR ----    
let hha = (a,b)=>console.log(a+b);  // only for 2 arguments;
//  -------OR------  use console.log when declaring the function
// let hha = a => a+2 only for single arguments;
hha(20,200000);

//also if no argument , then put empty paranthess when declaring function , example ------
let greeet = () => console.log("ahahhah");
// greeet();


let obj = {
  greeting : "Hello world",
  names : ['RAhul', "hello",'heheh'],
  speak (){
    this.names.forEach((students)=>{
      console.log("heelo "+students+" "+obj.greeting);
    })
  }
}
//This. thing finds any variable in object element for Arrow function only , but this. in simple funtion finds element in itself only 

// obj.speak();

//---- learn Math object and Date and Time object from Documentation---


// -----------JSON---------------



let obj1 = {
  name :"Rahul",
  height : 5.11,
  food : "bhindi"
}
console.log(obj1);
let myJsonStr = JSON.stringify(obj1);
console.log(myJsonStr);

 let aa =myJsonStr.replace("Rahul","harry");
 console.log(aa);
 newJsonobj = JSON.parse(aa);
 console.log(newJsonobj);


//  ----Type conversion

let str = 304;
console.log(str.toString(), (typeof str)); 
// String()  also  .toString() 
// to convert into string ,  to change type of use Sting() while declaring variable


let num = Number("34");
console.log(num, (typeof num));
// console.log(Number(num), (typeof num));
 // Number() to convert to number 

// Also to use parseInt , Float , etc. 

// Cannot use 34d4 , Array to change it into number 

let arr = [1,2,3]; // here length will be element
 arr = String([1,2,3]); // here length will be character 
console.log(arr.length);

let number = (122.323);
console.log(number.toFixed(2));
 
number = Number("22.2222");
console.log(number.toFixed(2));


//Avoid tomany if else 

let object = {
  a : 22,
  b : 23,
  c : 24
};

// function price (item){
//   if (item==="a"){
//     console.log(22)
//   }
//   else if (item ==="b"){
//     console.log(23)
//   }
//   else if(item ==="c"){
//     console.log(24)
//   }
// };
//  price('a');

// instead

function price(item){
console.log(object[item]);
}
price("c");


// Console. various types

console.time("code ends here");
console.table({name: 'rahul', occupation : "study" });
// console.warn("this is a warning");
console.timeEnd("code ends here");
let age = 1100;
console.assert(age>1200, "Age >100 not possible");
console.assert(age<1200, "Age >100 not possible"); // ismai error nai ayega

console.error("this is an error");
console.clear();

// functions and its concepts

// normal funciton with default value

function greet (name,nationality ="Indian"){
  console.log(`This is a greeting ${name} ${nationality}`);
}

greet("Rahul");
greet("Ramesh","Canada");

// Function with return instead of console.log
function return2(name){
  console.log(`This is a greeting ${name}` ); //let msg = yh message jo side mai hai 
  return 4 ; // return msg
}
console.clear();


return2("Rahul");
let store =return2("Ramesh");
console.log(store); // idhr fir upr ka message return hoga ;


// Function in a variable;

let msg = function (item){         // no need to write name of function
  return(`"This is message" ${item}`);
}

console.log(msg("orange"));

// Function in a object---------------

let obj2 = {
  name :"Rahul",
  game : function(){
    return "GTA";
  }
}
console.log(obj2.game());

console.clear();

let aaaaa = window;
console.log(aaaaa);

//  to select various DOM elements-----
let doc = document.all;
// doc= document.body;
// doc = document.forms[0];
// Array.from(doc).forEach(function(element){
//   console.log(element);
// })
doc = document.links[0];
console.log(doc);

console.clear();

//  to select single element
let ele = document.getElementById("mfirst1");
// ele = ele.className;
// ele = ele.childNodes;
// ele = ele.parentNode;
// ele.style.color="red"; 

//  to change html or text of single element
// ele.innerText = "Hello how are you";
// ele.innerHTML = '<b>hello mister</b>';
// console.log(ele.innerHTML);
//  or 
ele.style.fontSize = "70px";


let sel = document.querySelectorAll(".child");
// console.log(sel[1]);
console.log(sel);


// to select element inside a particular element
let sele = document.querySelectorAll(".container");
console.log(sele[0].getElementsByClassName("child"));

// sele.style.fontSize = "300px"; this is wrong 
// to iterate over multiple elements -----
Array.from(sele).forEach(element => {
  element.style.color = "blue";
  console.log(element);
});

//  or 

for (let index = 0; index < sele.length; index++) {
  const selee = sele[index]; // instead to these
  console.log(selee); //two lines only lower line
  console.log(sele[index]);
}

let ssel = document.querySelector(".no");
console.log(ssel.childNodes); // this takes new line , comment as an element 
console.log(ssel.children); // this will not show comment and new line

console.log(ssel.childNodes[1].nodeName);
console.log(ssel.childNodes[1].nodeType);
// Node types---
/**
 * 1 element 
 * 2 attribute 
 * etc etc
 */

// child ka child ka child
let childmin = document.querySelector(".container");
// console.log(childmin.children[1].children[0].children);


//  shows first and last childNode , like childNode
console.log(childmin.firstChild);
console.log(childmin.lastChild);
// first and last element , like children
console.log(childmin.firstElementChild);
console.log(childmin.lastElementChild);
// Count child element
console.log(childmin.childElementCount);

// Get node and element next silbings 
console.log(childmin.firstElementChild.parentNode);
console.log(childmin.firstElementChild.nextSibling);
console.log(childmin.firstElementChild.nextElementSibling);
console.log(childmin.firstElementChild.nextElementSibling.nextElementSibling);
console.clear();

// Create, Remove and Replace Elements -----------

let elee = document.createElement("li");
console.log(elee);
 
// Adding an element --
elee.className = "Childnew";
elee.id = "Childid";
elee.setAttribute("title","mytitle");
elee.innerText = "<b>EHllo this is appended<b>" // this will place text only and not HTML
elee.innerHTML = "<b>EHllo this is appended<b>"
console.log(elee);

// OR instead to use innerText or innerHTML use 
let text = document.createTextNode("I am a text node");
elee.appendChild(text);



let ul = document.querySelector("ul.ul");
// appendChild ---to add something into DOM---
ul.appendChild(elee); 
console.log(ul);


