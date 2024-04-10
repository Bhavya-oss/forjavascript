const createHeading = document.createElement('h4')
const textToHeading = document.createTextNode('Heading 4')
createHeading.appendChild(textToHeading)
createHeading.id = 'heading'
console.log('createHeadingcreateHeading', createHeading)

document.body.appendChild(createHeading)
/* ***************************** */
const add1 = (a, b) => {
  return a + b
}

const addedResult1 = (result) => {
  console.log((document.getElementById('heading').textContent = result))
}

const recieveAdd1 = add1(3, 9)
const recieveResult1 = addedResult1(recieveAdd1) // to display result we have to call two function

/* ***************************** */

/* ***************************** */

const add2 = (a, b) => {
  const sum = a + b
  addedResult2(sum) // we can not prevent exicution of addResult2().
}

const addedResult2 = (res) => {
  console.log((document.getElementById('heading').textContent = res))
}

add2(3, 15)
/* ***************************** */

/* ***************************** */
//1) function recives another function as a argument
//Callback function:function passed as argument to another function
const greet = () => console.log('Hello Jonas')
document.getElementById('btnClose').addEventListener('click', greet)

//addEventListener is higher order function:A function recieves a function as argument then it returns new function or both.
// greet is call back function. called when click event happens
/* ***************************** */

// 2.Function returns new function

function count() {
  //higher order function
  let counter = 0
  return function () {
    //returned function
    counter++
  }
}

//function accepting callback functions
const replaceSpace = (str) => {
  console.log(str.replaceAll(' ', '').toLowerCase())
}

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ')
  return [first.toUpperCase(), ...other].join(' ')
}
// replaceSpace("Consistance maintence");
// upperFirstWord("JavaScript is the best!");

const transformer = function (str, fn) {
  console.log(str, fn)
  console.log(`Transformed string is ${fn(str)}`)
  console.log(`Transformed by ${fn.name}`) // function also as method
}

transformer('JavaScript is a interpreter language', upperFirstWord) //upperFirstWord is callback function it is not call by itself call them later. transformer is higher order function.
/* ********************* */

document.body.addEventListener('click', loginHi)
function loginHi() {
  console.log('Hello Hi')
} //we can call before define or initialize.
// const loginHi = () => console.log("Hello Hi")// we can not call before define or initialization.

//function return function

// const greetReturn = (greet) =>{

//     console.log("Greet")
//     return function (name1){
// console.log(`${greet} ${name1}`)
//     }
// }

// const greetRecieve = greetReturn("Hello");//Greet
// greetRecieve("Jony");//Hello Jony it will call that get return
// greetRecieve("Jonas"); //Hello Jonas

//with arrrow function
// const greetReturn = (greet) =>{
//     return (name1)=>{
//         console.log(`${greet} ${name1}`)
//     }
// }

// const greetRecieve = greetReturn("Hello");
// greetRecieve("Jonas");
// greetRecieve("Sharmila");
// greetRecieve("Shankar");
// //or
// greetReturn("Hello")("Jonas")

const greetReturn = (greet) => (name1) => console.log(`${greet} ${name1}`)

const greetRecieve = greetReturn('Hello')
greetRecieve('Johny')
// greetReturn("Hello")("Johny")

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book:function flight(){}//istead this use below thing
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${lufthansa.iataCode}${flightNum}`
    ) //instead of lufthansa.airline and lufthansa.iataCode using this.airline and this.iataCode.
  },
}

lufthansa.book(239, 'Schmedtmann')
lufthansa.book(635, ' Jonas Smith')



// Immediately invoked function expression(IIFE)
//use IIFE when we want to exicute function only once

//normal function()
function runOnce(){
console.log(`It will exicute how many time we call`)
}

runOnce();
runOnce();

//IIFE
(function onlyOnce(){
    console.log(`It will exicute only once`);
})();//invoking immidietly after the expression


