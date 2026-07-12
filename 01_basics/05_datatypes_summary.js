
// javascript is a dynamically typed language => 
//         variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.



// how data stores and how to access the data -- classified into 2 types



// primitive => its just give the copy of the value not the referrnce from the memory.

// 7 types : numbers , boolean , string , symbol , BigInt, null , undefined,

const score = 100;
const score1 = 100.3
const name = null
let accountCity = "jaipur"

let su = undefined; // let su;

let id=Symbol("123");
let accId = Symbol("123")
console.log(id === accId);
BigInt = 23432432443223432n;

// Reference(non primitive) => it directly gives the reference of the value from memory.

// arrays , functions , objects

const heros = ["spiderman" , "hulk" , "thor"];
let myObj = {
    name : "shahi",
    age : 45,
}

const myFunction = function(){
  console.log("hello world");
  
}

console.log(typeof score);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// stacks (Primitive) , Heap(Non Primitive)

let sample = "hello";

let simple = sample;
simple = "world"
console.log(simple);
console.log(sample);

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl",
}
// console.log(userOne);

let userTwo = userOne;

userTwo.email = "sample@gmail.com";
console.log(userTwo);
console.log(userOne);



