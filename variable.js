// var stringVariable = "variable"
// console.log("stringVariable", typeof stringVariable)
// let  stringVariable1 ="variable2"
// console.log("stringVariable", typeof stringVariable)
// stringVariable = "variable3"
// console.log("stringVariable", stringVariable)
// let andraPradesh = true;
// if(andraPradesh){
// console.log("andraPradesh", typeof andraPradesh)
// }
// let AndraPradesh
// console.log("AndraPradesh", typeof AndraPradesh)
// AndraPradesh ="ap"
// console.log("AndraPradesh", typeof AndraPradesh)
// let variable_rules = null;
// if(variable_rules){
// console.log("variable_rules",typeof variable_rules)
// }

let conv;
conv = Boolean("A String");
console.log(conv, typeof conv);

conv = Boolean(0);
console.log(conv, typeof conv);

conv = Boolean(" ");
console.log(conv, typeof conv);

conv = Boolean({});
console.log(conv, typeof conv);

conv = Boolean(undefined);
console.log(conv, typeof conv);

conv = Boolean(null);
console.log(conv, typeof conv);
conv = Boolean([]);
console.log(conv, typeof conv);

conv = Boolean(false);
console.log(conv, typeof conv);

let m = 10;
console.log(m, typeof typeof m);

let sumof = Boolean([2] + [4 + 8]);
console.log(sumof, typeof sumof);

sumof = 2 + (4 + 8);
console.log(sumof, typeof sumof);

console.log(Boolean("0"), "returnBoolean");
console.log(false == "0");
console.log(false == null);

console.log(false == "false");
console.log(true == "true");

let unitArray = new Uint32Array(m);
let memoryAdress = unitArray.byteOffset;
console.log("MemoryAddress", memoryAdress);

let a = 10;
let b = "Hi";
let c = a;
c = c + 1;
c = [1, 2];
let d = c;
d.push(3);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d =${d}`);

c = [1, 2];
// d = c;
d = [1, 2];
console.log(`c === d ${c === d}`);
console.log(`c == d ${c == d}`);

let array = [1, 2, 3, 4, 5];
let reciveArray = removeValue();
console.log("arrayIndex", reciveArray);
function removeValue() {
  for (i = 0; i < array.length; i++) {
    if (array[i] !== 2) {
      return array[i];
    }
  }
}

array = [1, 3, 2, 7, 8, 10];
let filterArray = array.filter((data) => {
  console.log("datadata", data);
  return data !== 2;
});

console.log("filterArray", filterArray);

let e = [1, 2];
a = 3;
console.log("push", e, a);
appendElementToArraye(e, 4);
function appendElementToArraye(e, element) {
  e.push(element);
  a = 4;
  console.log("push", e, a);
}

c = [1, 2];
d = c;
console.log(c, d);

d.push(c);
console.log(d[2]);

let y = [1, 2, 3, 4, 5];
console.log("y", y);
let firstName = "Bhavya";
let lastName = "D S";
const DOBY = 1998;
const currentYear = 2024;
let storeSentance =
  "Hello i am" +
  " " +
  firstName +
  " " +
  lastName +
  " " +
  (currentYear - DOBY) +
  "years" +
  " " +
  "women";
console.log("storeSentancestoreSentance", storeSentance);
let backticksKeyBoard = `Hello i am ${firstName} ${lastName} ${
  currentYear - DOBY
} years women`;
console.log(
  "ES6 sentance without any concatination symbol and spacing giving",
  backticksKeyBoard
);

let age = 16;
let isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("Can Drive ");
} else {
  let wait = 18 - age;
  console.log(`Should wait ${wait}`);
}

let birthCentury = 1998;
let century;
if (birthCentury <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log("centuryYear", century);
let inputYear = "1991";
console.log("Convert to number", Number(inputYear));
console.log("iNPUT YEAR", inputYear + 18);

console.log("is string convert to number", Number("Jonas"));

let check = String(23);
console.log(typeof check);
console.log(typeof 23);
let number = "1" + 1;
console.log(number);

console.log(number - 1);

const str = "42";
const num = Number(str);
console.log(num + 1);
let height = 0;
if (height) {
  console.log("True block zeroo");
} else {
  console.log("False Block zero ");
}


// prompt("What is your favourite number");

// let promptStore =  prompt("What you want ");
// console.log("prompt",Number(promptStore), typeof Number(promptStore));

// if(promptStore <= 10){
//   console.log("less than or equal ten")
// }
// else if(promptStore >10 && promptStore <= 20){
//   console.log("Greater than 10 and less than or equal to twenty")
// }
// else if(promptStore > 20 && promptStore <= 30){
//   console.log("Greater than 20 and less than or equal to thirty");

// }
// else{
//   console.log("Greater than thirty")
// }
 let ageLogical = 16;

if(age >= 18 && age <= 30){
  console.log("Check")
}

if(!(age >= 18) && age <= 30){
  console.log("Logical not operator")
}


if(age <= 30 && !(age >= 18)){// Logical not operator has more presidence tha Logical and and logical or
  console.log("Not operator has first precidence than Logical And an Or")
} 


