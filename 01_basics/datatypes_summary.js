//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
//these are call by value (changes done in copy)

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

//console.log(id===anotherId);
const bigNumber = 3456543576654356754n
// Reference (Non primitive)

// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"];//arrays

let myObj = {
    name: "hitesh",
    age: 22,
}//object

const myFunction = function(){
    console.log("Hello world");
}//function

//Stack(primitive) , heap(Non-primitive)

let myoutubename="samarth_223"
let anothername=myoutubename
anothername="oh_hell_yeah_samarth"
console.log(myoutubename)//samarth_223
console.log(anothername)//oh_hell_yeah_samarth

let userOne={
    email:"samarthpatil223@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="hitesh@gmail.com"