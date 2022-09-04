
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
})

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

// Replace an element

let ele2 = document.createElement('h3');
ele2.id ="elem2";
ele2.className = "elem2";
let tnode = document.createTextNode("this is created by node elem2");
ele2.appendChild(tnode);
elee.replaceWith(ele2);

// to replace child 
let ul2 = document.getElementById('ul2');
ul2.replaceChild(elee,document.getElementById("fui"));
// new element phle and old element baad mai 


// to remove child 

ul2.removeChild(document.getElementById("lui"));

// to add , check , remove , set something-------- 
let pr = ele2.getAttribute('class');
 pr = ele2.hasAttribute('class');
 ele2.removeAttribute("id");
 ele2.setAttribute("title","title")
console.log(ele2,pr);



// Events--------

// to addEvent-------------

document.getElementById("heading").addEventListener
("click",function(){
  console.log("You have clicked this and addEvent method has fired");
  location.href = "//google.com" 
});

// yeh to print baki sab , most imp. to get target of click
document.getElementById("heading2").addEventListener
("click",function(e){
  console.log(e)
});

// Manuplate target
document.getElementById("heading3").addEventListener
("click",function(e){
  let var1 = e.target; // declate inside only and not outside
   var1 = e.target.className;
   var1 = e.target.id;
   var1 = e.target.classList; // to iterate by making it an Array
   var1 = Array.from(e.target.classList); // now can apply any Array method
  console.log(var1);
});

// Event list 
// click , mouseover, mouseleave,dbclick, mousemove  etc. ----------

document.querySelector(".add").addEventListener("mouseenter",fun3);

function fun3(){
  console.log("You have made a good mistake");
}

// to make Games---------
document.querySelector(".body").addEventListener("click",fun4);

function fun4(e){
  console.log(e.offsetX , e.offsetY);
  document.body.style.backgroundColor= `rgb(${e.offsetX}, ${e.offsetY},54)`;
}

console.clear();


// Local Storage

// Set local Storage item
localStorage.setItem("Name", "Rahul");
localStorage.setItem("Name2", "Goyal");

// Get localStorage item
let name4 = localStorage.getItem("Name2");
console.log(name4);

// to clear entire localStorage
// localStorage.clear(); 

// to remove one item from localStorge
localStorage.removeItem('Name');

// You cannot add Arary this way 
// to overcome this , we have

let impArray = ['Roti','Sabzi','Doodh'];
localStorage.setItem('Array', impArray); 
localStorage.setItem('Array', JSON.stringify(impArray)); 
  // no Quotes when writing impArray , also it will save this by converting this into String instead of an Array


let cons = localStorage.getItem("Array");
console.log(cons); // yeh abhi bhi string show krega jo Array ke trh dikhegi , so use JSON.parse
 cons = JSON.parse(localStorage.getItem("Array"));
 console.log(cons);


 // SessionStorage
 // Almost same

 sessionStorage.setItem('Names','Rahul');
 sessionStorage.setItem('Name5', 'Rohan');
 sessionStorage.setItem('name9',JSON.stringify(impArray));
 sessionStorage.clear();

console.clear();


// This . object 

// Referes to global object  
console.log(this);

// this also referes to global object
function fun4(){
  console.log(this);
}
fun4();

console.clear();


let obj6 = {
  name9 : "Rahul",
  class : 12 ,
  fun : function(){
    console.log(this); // pura object aajayega
    console.log(`i am ${obj6.name9}`)
    // OR
    console.log(`I am ${this.name9}`)
  }
}

console.log(obj6.fun()); // OR 
obj6.fun(); 




console.clear();


// Object oriented language-------------


// Object Literals for creating Objects
let car = {
  name :"Maruti",
  TopSpeed : 208,
  run : function (){
    console.log("Car is running")
  }
}

console.log(car); // Object pura print kr dega
car.run();

console.clear();

// Some example of constructure - new Date();
// Object Constructor

function GeneralCar(GivenName,GivenSpeed){
  this.name = GivenName;
  this.TopSpeed = GivenSpeed;
  this.run = function(){
    console.log(`${this.name} is running`);
  }
  this.analyze = function(){
    console.log(`This car is slower by ${200-this.TopSpeed} than Mercedes`)
}
}
car1 = new GeneralCar("Nissan", 180)
console.log(car1);
console.log(car1.run()); // or niche wala
car1.run();

car2 = new GeneralCar("Maruti alto",100)
car2.run();
console.log(car2);

car2.analyze();
console.log(car2);
car2.run();

console.clear();

// Object prototypes ,   Obeject has Object.prototype

let obj0 = {
  name : "Rahul",
  Adress : "Mars"
}
// console.log(obj0);

function obj11(GivenName){
  this.blah = GivenName
}
let obj10 = new obj11("Rahul")
console.log(obj10);               // OR 
console.log(new obj11("Rahul"));  

// Add something into prototype


obj11.prototype.getNames = function(){
  return this.blah;
}
console.log(obj10)

console.log(obj10.getNames());


// prototype of objects made with constructures should only  be changed and not objects made with Object Literals , vrna Globally prototype change ho jana hai -----------


// setattribute and appendchild and createtextnode  




// ------- Loops --------------

console.clear();

// for loop-------------

let pets = ["Lizard","Dog","Cat"];
pets[3]="Horse";
pets["species"] ="Mamals" // OR niche wala 
// pets.species ="Mamals"
for(let i=0;i<pets.length;i++){
  console.log(pets[i]);
  console.log(pets);
}

// foreach------------

pets.forEach(i =>{
  console.log(i);
})

// for in loop------------------- ( In is for Index)
// Added Object sirf ismai show hoga -----------
for(i in pets){
  console.log(`${i}: ${pets[i]} `);
  // console.log(pets[i]);
}
// console.log(pets);

// for of loop----------------

for (i of pets){
  console.log(i);
  console.log(pets[i]); // undefined ayega 
}



// Two ways to Manipulate DOM 

/*
element.style.setAttribute('width','150px'); 
element.setAttribute("style","width : 150px");
element.setAttribut("class","classname"); or 'id' instead of 'class' 

OR
element.setAttribute("style",'border : 2px solid red; width : 20px; margin :24px;')
OR
element.style.width = '150px';
*/

console.clear();

// Prototype inheritance --------------
// Yeh ES6 se phle use hota tha ab nai, so just understand---

let proto = {
  slogan : function(){
    return 'This comapny is the best';
  },
  changeName : function(newName){
    this.name = newName
  }
}
let rahul = Object.create(proto);
rahul.name = "Rahul";
rahul.role = "Programmer";
// rahul.changeName("Rahul2");

// instead of above 4 lines , But niche wala annoying hai 

rahul = Object.create(proto,{
  name: {value: 'Rahul', writable: true},
  role: {value: 'Programmer'},
})
rahul.changeName('Rahul2');
// console.log(rahul);


// Employee Constructure ---------

function Employeee (name,salary,experience){
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

// Slogan 
Employeee.prototype.slogan = function(){
return `This company is the best.Regards,${this.name}`;
}
// Create an object from this constructor now 
Rahul = new Employeee('Rahul',35000,87);
console.log(Rahul.slogan());

// Programmer

function Programmer(name,salary,experience,Language){
  Employeee.call(this,name,salary,experience);
  this.language = Language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employeee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;
let rohan = new Programmer("Rohan",2,0,"JavaScript");
console.log(rohan);
console.log(rohan.slogan());// yeh error through krega agar line no. 890 nai likhi tho -----

console.clear();
// ES6 Classes and Inheritance -----------------


class Employess {
  constructor(Givenname,Givenexperience,Givendivision){
    this.name = Givenname;
    this.experience = Givenexperience;
    this.division = Givendivision;
  }
  slogan(){
    return `I am ${this.name} and this company is the best`;
  }
  joiningYear(){
return 2020-this.experience;
  }
  // niche wala static method hai , isko hm bina class ka object bnaye use kr skte hai , as ismai "This." kuch use nai hua 

  
  static add(a,b){
    return a+b;
  }
}

// iss note ka example niche diya hua hai as Example no.1 krke
//  Note , slogan/joiningYear and yh sb ko Templates khte hai 
// Inheritence ka mtlb ek Template se dusri Template bna lena  , like merko ek new class bnani hai "programmer ", tho us class mai "Employess" class ke sare templates hoge .



rahul = new Employess("harry",78,899)
console.log(rahul.slogan());
manish = new Employess("Manish",200,200);
console.log(manish);
console.log(manish.joiningYear());

console.log(Employess.add(34,5)); // ismai  new Element ka name nai likhna pda 


function clss(name,salary,division){
  console.log(`name: ${name},salary:${salary},division:${division}`)
};
clss('rahul',300,4004);

// function se bnane pr Object nai bnega , so the name Object constructor ------- 



// Example no.1 --------------------

class Programmerr extends Employess{
  constructor(Givenname,Givenexperience,Givendivision,language,github){
    super(Givenname,Givenexperience,Givendivision);
    this.language = language;
    this.github = github
  }
 favlang(){
  if (this.language=="python"){
return "python";
  }
  else{
    return "JavaScript";
  }
}
  static multiply(a,b){
    return a*b;
  }
}

rhona = new Programmerr ("rohan",3,"lays","rhoanasnfa");
console.log(rhona);
console.log(rhona.favlang());
console.log(Programmerr.multiply(3,4));


// Object inheritance , constructor and ES6 

// Jrurt of Object constructor --- to get multiple objects with some same properties and methods 

function Student(First,Name,clss){
  this.FirstName = First;
  this.lastName = Name;
  this.clssName = clss;
  // Add function
  this.clss = function(){
    return this.clssName;
  }
};

let student1 = new Student('Rahul','Goyal',12);
let student2 = new Student("Shweta","Goyal",12);
console.log(student1,student2);

// Now to add some properties into object created and not in constructor

// Note -- Student.name , to add a protpery diretly to constructot is incorrect , instead use prototype 
student2.age = 24;
student1.name = function(){
  return this.FirstName +""+this.FirstName;this.lastName;
}

console.log(student1,student2);

console.clear();


// How to add properties and methods into constructors itself instead to add it to objects so created ---------

// to add property 
Student.prototype.nationality = "Indian"; // added into prototype of object in console

// to add method 

Student.prototype.gender= function(){
  return this.FirstName;
}
console.log(student1,student2);
console.log(student1.nationality);
console.log(student1.gender()); // if parentheses is not typed , all the code of function will be shown -------

// an object is an instance of a class , many objects with some same methods and properties 

// instead to use function , we can use class keyword too and properties are assigned inside an constructor() method ----



// function Student5(){

// }
// instead 

class Student5{
  // jb app class ke sath kaam krte ho and object ko create krte ho tho constructor function apne app call hota hai agar call na kro tho 
  constructor(namee,age,clss){
this.Name = namee;
this.age = age;
this.class = clss;
  }
  // biodata() ek instance method hai and extend keyword ko use krke dusri class instance method ko use kr skti hai but agat method static ho tho nai kr skti 
  // method ko static bnane ke liye 
  // static biodata() ese likh do 
  biodata(){
    console.log(`Hi i am Rahul Goyal ${this.Name} `)
  };
};

let obj9 = new Student5('rahul',23,12);
console.log(obj9);
obj9.biodata();

class Player extends Student5{
// No new property or method is added , so no need to write super 
}

// yeh niche wala abhi bhi work krega kyuki isne Student5 class ke properties and methods inherite kr liya hai 

let obj01 = new Player("rahul",88,99);
console.log(obj01);

class Machine extends Student5{
constructor(namee,age,clss,typee) { // properties jo new hai and inherit krni hai sb idhr likho 
  super(namee,age,clss); // jo property inherit krni hai wo idhr likho
this.tyoe = typee;
}
biomech(){
  console.log(`I am a robot from ${this.tyoe}`)
}
mech(){
  console.log(`${super.biodata()}`); // after super not () but . use dot
}
}
let boy = new Machine("rahul",44,55,"robot"); // must provide input for other properties 
console.log(boy);

// agar function kbhi call kro and undefined aye tho function mai console.log ko hta kr return keyword likh do -------
// constructor mai hoisting nai lgti , mtlb funciton define krne se phle app function ko call nai kr skte -------