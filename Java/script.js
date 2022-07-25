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
const budget = {
    max : 12.5,
    min: 7,
    
};

const half = ({min, max}) => (max + min) /2 ;





