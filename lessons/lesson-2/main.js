/**
 * Lesson 2
 * 
 * 
 * Summmary: 
 * - variables
 * - datatype
 * - how to name variables, function
 * - object
 * - spread operator
 */

/**
 * Variables
 * var | let | const
 * -> always use const
 */

var a = 1;
var a = 2;
var b = 2;
var c = a + b;
console.log(c); // 4

let a = 1;
let a = 2;
let b = 2;
let c = a + b;
console.log(c); // error

const x = 1;
// const x = 2;// error

/**
 * Datatype
 * number | string | boolean | object | null | undefined
 */

const myName = 'Do Hong Quan'; // string
const myAge = 20; // number
const isMale = true; // boolean
const myFriends = ['Hieu', 'Thanh']; // object
const hasMoney = null; // null


const myInfo = { // object
    name: myName,
    age: myAge,
    isMale: isMale,
    friends: myFriends
}
console.log(myEmail); //undefined

const yourInfo = myInfo;
yourInfo.name = 'Hieu'; // object myInfo will be change too
console.log(myInfo.name); // Hieu

// how to clone an object
const hisInfo = { ...myInfo }; // spread operator
hisInfo.name = 'Thanh'; // object myInfo will not be change
console.log(myInfo.name); // Hieu

