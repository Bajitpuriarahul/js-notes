

// Arrow function ------------------


function name(){
    console.log("hello");
}

name();

let nme = function(){
    console.log("HEllooo");
}
nme();
console.log(nme); // bina brackets ke yeh pure code ko print kr dega 

let namee = function(){
    return nme();
    // agar return ke baad nme sirif likhe ge without Parantheses , tho function pura aa jayega code jese likha hua 
}

namee(); 

let f = ()=>{
    console.log("Good Morning");
    return "Good Morning Ji";
}

f(); // only console.log wala ayega
console.log(f()); // Yeh console.log and return dono ko call krega 

// One liner code will not require any curly brackets , but if you want to return value , then you have to use curly brackets 
let greet = () => "Mera name Rahul hai"; 
// {return "Good Morning"};

console.log(greet());

// let obj = () =>{Name :"Rahul"};
let obj = () =>({Name :"Rahul"}); // to return one line  obj, you have to use Parantheses outside curly brackets 
console.log(obj());

let obj2 = (a,b) =>{ return a + b}; // if only return one variable , no need to add Paranthese  
// let obj2 = a => {Statement};

console.log(obj2(1,2));


console.clear();


// Fetch Api  --------------------


// Instead of XHR , we will use 'Fetch Api' ----------------


// let myBtn = document.querySelector("#myBtn");
// let content = document.querySelector('#content');

// function getData(){
//     console.log('Started getData')
//     url = "file.txt";
//     fetch(url).then((response)=>{    // yh asnchoronous Method hai "Fetch"
//         console.log('Inside first then')
//     return response.text();
//     }).then((data)=>{
//         console.log('Inside second then')
//         console.log(data);
//     })
// }
// console.log('Before running getData');
// getData();
// console.log('After running getData');



function getData(){
url = "https://api.github.com/users";
    fetch(url).then((response)=>{    // yh asnchoronous Method hai "Fetch"
    return response.json(); // use here json only if raw data is valid "JSON" , it will save time , otherwise use 'txt' only to convert raw data into string 
    }).then((data)=>{
        console.log(data);
    })
}
getData();


// "----------------- Post Request ------------------"



function postData(){
    url = "https://dummyjson.com/posts/search?q=love";
    data = '{"name":"test","salary":"123","age":"23"}';
    params = {
        method :"post",
        headers : {
            "Content-Type" : 'application/json'
        },
        // body : JSON.stringify(data) // Data agar String hai tho JSON.stringify use na kro 
         body : JSON.stringify(data)
    }
    fetch(url,params).then((response)=>{    
    return response.text();
    }).then((data)=>{
        console.log(data);
        })  // OR Arrow function
        // fetch(url,params).then(response=>response.json()).then(data=>console.log(data))
    }
postData();