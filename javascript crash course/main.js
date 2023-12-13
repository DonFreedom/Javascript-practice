 /*const person =  {
    firstNAame : 'John',
    lastName : 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
      street :'30, main str',
      city :'Boston',
      state : 'MA'
    }
 }

 console.log(person.firstNAame, person.lastName);
 console.log(person.address.city);
 console.log(person.hobbies[1]);
 person.email = 'johndoe@gmail.com';
 console.log(person);
 person.hobbies.push('singing');*/

 console.log('Hello World');
 console.log(2 + 2);
 console.warn("This is a warning");
 console.table({name: "Freedom" , age: 22},);
 console.clear();
 

 // reserved keyword = variable name = type of value
 
 

 let name;
 name = "Freedom";
 console.log(name)

 let whatDoYouWannaBecomeInYourLife;
 whatDoYouWannaBecomeInYourLife = "Programmer";
 console.log(whatDoYouWannaBecomeInYourLife);
 
 let twitterHandle;
 twitterHandle = "Freedom_Chukwuka";
 console.log(twitterHandle);

 let num = 2;

 console.log(typeof num);

 let counter = 0;
 counter++;
 console.log(counter);


 let firstFavNumber = 1;
 let secondFavNumber = 4;
 console.log(firstFavNumber + secondFavNumber);
 console.log(firstFavNumber - secondFavNumber);
console.log(secondFavNumber ** firstFavNumber);

//booleans is a value which can either be true or false true||false

let isTrue = NaN;
console.log(isTrue);

//falsy values= =null, undefined, NaN, false, 0, -0, '',"",(empty quotes)

let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNum = 1;
console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNum + undefined);

console.log(10 > 10)
console.log(10 > 1)
console.log(10 === 10)

//concatenation 

let firstName = "Freedom ";
let secondName = "Chidozie";
 let fullName = firstName.concat(secondName);
 console.log(fullName)

 //append

 firstName += " Chukwuka";
 console.log(firstName);

 //length

 console.log(firstName.length);

 //cases

 console.log(firstName.toLocaleUpperCase())

 //slice

 console.log(firstName.slice(0, 4))
 

 //split

 console.log(firstName.split());

 let money = "50";
 console.log(typeof money);
 //money = parseInt(money);
 console.log(typeof money);
 //money = +money;
 //money = Number(money);
 
//conditional statements
//variable (condition) {execution}
let a = 20; 
let b = 20;
if (a > b) {
  console.log('a is greater than b');
} else if (a < b){
  console.log('a is less than b')
} else{
  console.log('a is equal to b')
}

let time = 10;
let greetings;
if (time < 10) {
  greetings = "Good morning";
  console.log(greetings)
}else if (time < 20){
  greetings = "Good day"
  console.log(greetings)
}else{
  greetings = "Good evening"
  console.log(greetings)
}


let password = 9;
if (password == 8){
  console.log('Welcome')
}else if (password <= 8){
  console.log('password is too short')
}else if (password >= 8){
  console.log('too long password')
  console.log('password should be 8 characters')
}else{
  console.log('pls provide password')
}


//switch statements
//switch (expression) {
  //case x:
      //print 
      //break
  //case y:
      //print
      //break;
//}

let x = 0;
let bulb;
switch (x){
  case 0:
    bulb = "off";
    console.log(bulb)
    break;
  case 1:
    bulb = "on";
    console.log(bulb);
    break;
  default:
    bulb = "no value found";
    console.log(bulb);
    break;
};



let day = "Sunday";
let currentDay;

switch (day){
  case "Sunday":
    currentDay = "A day of Worship"
    console.log(currentDay);
  break;
  case "Monday":
    currentDay = "Today is Monday";
    console.log(currentDay)
  break;
  case "Tuesday":
    currentDay = "What a beautiful Tuesday morning!"
    console.log(currentDay)
  break;
  default:
    currentDay = "...don't know what day it is!"
    console.log(currentDay)
  break;
}



let fruit = "banana"
switch (fruit){
  case "banana":
    console.log("banana is good!")
  break;
  case "orange":
    console.log("I'm not a fan of orange!")
  break;
  case "apple":
    console.log("Apples are great tho!")
  break;
  default:
    console.log("Sorry, I have never heard of such fruit")
}

let fruits = "bananas"
switch (fruits){
  case "bananas":
    console.log("bananas are great!")
  break;
  case "oranges":
    console.log("I'm not a fan of oranges!")
  break;
  case "apples":
    console.log("Apples are great tho!")
  break;
  default:
    console.log("Sorry, I have never heard of such fruits")
}


/*for loop
//DRY-dont repeat yourself
// for (initialExpression; condition; increment|decrement expressions){}

for (let i = 1; i <= 5; i++){
  console.log("Hello World", i);
}
for (let i = 1; i <= 5; i++){
  console.log(i);
}

//nested loop

for (let i = 1; i <= 10; i++){
  console.log("---outer loop", i);
  for ( j = 1; j <= 5; j++){
    console.log("---inner loop---", j)
}
}

for (let b = 1; b <= 1000; b++){
  console.log("Freedom Chuka", j)
}

/*while loop
//while (condition) {
  //code block to be executed.
//}
let k = 0;
while (k <= 5){
  console.log("Hello World", k)
  k++;
}

//do,while loop

let g = 0;
do {
  console.log("Freedom", g)
  g++
} while (g <= 400)*/


//OBJECTS

 const car = {
  type : "Fait",
  model : "camry",
  color : "red",
 }
 console.log(typeof car)
 car.wheels = 4;
 console.log((car.type = "Toyota"));
 console.log((car.wheels))

 //functions is a block of code that performs a specific task etc
// function name (parametersIfAny) {...}

function greet() {
  console.log ("Hello from function!");
}
greet()

function sayHello(name){
  console.log(`Hello ${name}`);
}

sayHello("Freedom");
//return keyword in a function

function add(x, y) {
  return x + y;
}
add(10, 20);
//console.log(add(10, 20))
const res1 = add(10,20)
const res2 = add(100,200)
const res3 = add(1000,2000)

console.log(res1)
console.log(res2)

function myFunction(a, b) {
  return a * b;
}
myFunction(1, 4)
console.log (myFunction(1, 4))

function myFun2(p1, p2){
  return p1 * p2;
}
let j = myFun2(2, 3);
console.log(j);
// funtion declaration is usually like this == function sayHello(username){console.log(`Hello ${username}`)}

//function Expression is a functio which we store inside a variable e.g const greetings=sayHello("Freedom")
//funtion (user){console.log(`Hello ${user}`)}


const greeting =function (user1){
  console.log(`Hello ${user1}`)
};
greeting ("Josh")
greeting ("Favor")

//call back function: this is simply when we provide function as an (argument) to other function, that function is known as callback function for example

function showCallFunc(fn){
  const value = 10;
  fn(value);
}
showCallFunc(function (value){
  console.log(value);
});


function greeta(names, cb){
  console.log(`Hello ${names}`)
  cb()
}

function cb(){
  console.log(`I am a callBack function`)
}

greeta("Paul", cb);

function showCallFunct(fn1){
  const volv = "balablue"
  fn1(volv)
}
showCallFunct(function (volv){
  console.log(volv)
})

// scopes refers to the current context of code which determines the accessibility of variables of Javascript and there are two which are the global scope varable-declared outside a block and the local variable-declared inside a block


let textMessage = "hi" //global variable 
console.log(textMessage)

function showMessage(){
  let textMessage = "Hola" //local variable
  console.log(textMessage)
}
showMessage();

for (let z = 0; z < 5; z++) {
  console.log(z);  
}

//Method is a function inside an object 

/*function salute(){
  return `Hello, my name is ${persona.namer} and I am ${persona.ager} years old.`
}

const persona = {
  namer: "Johnson",
  ager: 23,
  salute,
}

console.log(persona.salute())*/
const persona = {
  name : "Julius",
  age:19,
  salute:function (){
    return `Hello, my name is ${persona.name} and I am ${persona.age} years old.`;
  }

  
}
console.log(persona.salute())

const someOne = {
  "name": "John Doe",
  "age": 20,
  "email":"js@gmail.com",
  "isSubscribed": true,
  "hobbies": ["Reading","singing", "coding"],
  "address": {
      "city": "New York",
      "idk": true
  }
}
const jsonString = JSON.
stringify(someOne)
const parsedObject = JSON.parse(jsonString)
console.log(jsonString);
console.log(parsedObject)

//Working with date and time in javascript

//const currentDate = new Date()
//console.log(currentDate)

//year, month, day, hours, minutes, seconds, milliseconds


//const currentDate = new Date(2023, 12, 11, 3, 18, 32, 09)
//console.log(currentDate)
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
//const days = date.getDays()
const hour = date.getHours()
const minute = date.getMinutes();
const seconds = date.getSeconds()


console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Hour: ${hour}`);
console.log(`Minute: ${minute}`)
console.log(`Seconds: ${seconds}`)
console.log(date.toDateString)

date.setDate(date.getDate() + 1)
console.log(date)
//etc


//SetInterval

//setTimeout

setTimeout(function (){
  console.log(`This function will be executed after 3 seconds`)
}, 3000);




/*function double(number){
  return number * 2;
}
console.log(double(3))*/
//now using an arrow function we have 

const double = n => n * 2;
console.log(double(12))

const lib ={
  sum: function(a, b){
    return a + b
  },
  mult: function(a, b){
    return a * b
  }
}
console.log(lib.sum(3, 4));
console.log(lib.mult(3, 7))
//now using the ES6 method

/*const double = n => n * 2;
console.log(double(12))

const lib = {
  sum: (a, b)=> a + b,
  mult:(a, b)=> a * b,
  };*/

  function getPersionES6(name, age, height) {
    return{
      name: name,
      age: age,
      height: height
    }
  }

  console.log(getPersionES6("HuXn", 12, 200))

  let getPersion = (name, age, height) =>{
      name, age, height
    }

  console.log(getPersionES6("HuXn", 12, 200))

  function jam(a, b = 3){
    return a * b;
  }
  console.log(jam(2, 4))
  console.log(jam(7))

  // using spread operator with array = ...

  let strNums = ["one","two","three"]
  let moreStrNums = ["four", "five", "six"]
  //to join them using the spread operator we have below

  let concat = [...strNums, ...moreStrNums]

  console.log(concat)

  let people = ["Josh","Sam", "Kumar"]
  let morePeople = ["Faith", ...people, "Williams"]
  console.log(morePeople)


  //using the rest operator 

  const user = {
    name: "Jen",
    age:22
  }

  const clonedUser = {...user}
  console.log(clonedUser)

  function personic (...hobbies){
    console.log(hobbies)
  }

  personic("singing", "coding", "Jumping", "cycling", "hangingout")

//Destructuring allows us to destructure data-arrays objects or functions...

const colors = ["red", "green", "blue", "yellow", "orange"]
const [color1, color2, color3] = colors;
console.log(color1, color2, color3)


const beast ={
  names: "Moses John",
  age: 12,
  gender: "male",
  country: "Guyana"
}

const {names, age, country} = beast
console.log(name)
console.log(age)
console.log(country)