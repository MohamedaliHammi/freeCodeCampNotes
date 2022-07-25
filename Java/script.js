console.log('HI');
//* maximum functio
/*
var arr = [16, 04, 2001, 88, 6];
var maximus = Math.max.apply(null,arr);
console.log(maximus);
*/

//* se Destructuring Assignment to Extract Values from Objects
/*
const personNum1 = {
    userName: 'jhon',
    userLastName: 'wick',
    userAge: 35
}

var {userName, userLastName, userAge} = personNum1;

let greeting = 'Hello Mr.' + userName + ' ' + userLastName + ' your age is ' + userAge;
console.log(greeting); 
*/

//*Use Destructuring Assignment to Assign Variables from Objects
/*
const user = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge } = user;
*/

//* Use Destructuring Assignment to Assign Variables from Nested Objects
/*
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
 
const {today : {low: lowToday, hight: hightToday}} = LOCAL_FORECAST;
*/

//* Use Destructuring Assignment to Assign Variables from Arrays
/*
let a = 8 , b = 9
[a, b] = [b, a];
! without declaring another variable
*/


//* Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements 
/*
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const secondSource = [10, 11, 12, 13, 14, 15]; 
 removeFirstTwo = (list) =>{
    const [a, b, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(secondSource);
console.log(arr);
*/

//* Use Destructuring Assignment to Pass an Object as a Function's Parameters
/*
const budget = {
    max : 12.5,
    min: 7,
    
};

const half = ({min, max}) => (max + min) / 2.00 ;
*/

//* Create Strings using Template Literals


/*
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i  = 0 ; i < arr.length ; i++){
       failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    } 
   
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  */

//* Use class Syntax to Define a Constructor Function 


/*
class Vegetable{
  constructor (name){
    this.name = name
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);
*/
//! constructor is a special methode to assign proerties automatecally called when creating an object 
 /*
class Car {
  constructor(model, color, passengers, year){
    this.model = model;
    this.color = color;
    this.passengers = passengers;
    this.year = year
  }
}

let car1 = new Car ('Ford', 'red', 5, 1958);
let car2 = new Car ('buggati', 'purple', 2, 2021);
console.log(car1.model);
*/

//* Use getters and setters to Control Access to an Object 

//! why use getters & setters
// a way to get get/set the properties of an object
// secures better data quality
// does extra things behind the-scene
//! exampel
/*
class Person{
  constructor(first, last){
    this.first = first;
    this.last = last;
  }
set first(value){
  this.firstName = value;
 };
set last(value){
  this.lastName = value;

} 
get fullName(){
  return this.firstName + " " + this.lastName;
}

 };
let person1 = new Person('naruto', 'shipudan');
console.log(person1.fullName);
*/
//* Use export to Share a Code Block 
/*
const multiplication = () => (a * b);
export {multiplication}; 
*/
//! in the other page to import the equation 
//*import (multiplication) from (file name)
//* to import all the content in a file to another file we user import * as name from that file expl [ import * as stringFunctions from './string_functions.js' ]


//* promises
/*
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

*/

//* then methode is immediatly excuted after the promise is fulfil 

/* makeServerRequest.then(result => {
  console.log(result);
});
*/

//* .catch is the methode ur promise has rejected
/* makeServerRequest.catch(error => {
  console.log(error)
}); 
*/