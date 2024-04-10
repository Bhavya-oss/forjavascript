"strict mode";
function lecture() {
  console.log("Lecture name is Jonas");
}

lecture();

function takeargument(a, b) {
  // console.log("c", c)
  return a + b;
}

const take = takeargument(8, 10);
console.log("taketake ", take);

// console.log(takeargument(5,22))
// takeargument(46,7)
let age1 = calAge1(1996, 8);
console.log("Age is", age1);

function calAge1(birthYear, a) {
  return `${2024 - birthYear} second ${a}`;
}

const calAge2 = function (birthYear, a) {
  return `${2024 - birthYear} and ${a}`;
};

let age2 = calAge2(1998, 6);
console.log("age2", age2);

const calcAge3 = (birthYear) => {
  return 2024 - birthYear;
};

const age3 = calcAge3(1999);
console.log("Age3", age3);

const calcAge4 = (birthYear) => 2024 - birthYear; // Use when you pass one parameter and one return

const age4 = calcAge4(1998);
console.log("age4", age4);

// const calc5 = (birthYear, role) => {
//   const age = 2024 - birthYear;
//   let retirement;
//   if (age <= 65) {
//      retirement = 65 - age;
//   }
//   else
//   {
//     retirement = "Retired"
//   }
//   return `Retirement in ${retirement} role is ${role}`
// };


// const age5 = calc5(1930, "FrontEnd Developer")
// console.log("age5", age5)

//calling one function inside the another function
function fruitProcessor(apple, pomogranate){
  const cuttedAppleFruit = cutFruits(apple);
    const cuttedPomogranateFruit = cutFruits(pomogranate)
    const juice = `Make juice by ${cuttedAppleFruit} and with ${cuttedPomogranateFruit}.`;
    return juice;
}

const fruit = fruitProcessor(8, 14);
console.log("fruitfruit", fruit)

function cutFruits(fruit){
    return fruit*2;
}

const ageCalc = (birthYear) => 2024 -birthYear;
const retirement =(retirement) => {
    if(retirement <= 65){
        return 65-ageCalc(2002); 
    }
    else{
        return "Retired"
    }
}

const calc5 = (birthYear, role) => {
    // const age = ageCalc(1956);
   const retirementAge =retirement(30);
    return `Retirement in ${retirement} role is ${role}`
  };
  
  
  const age5 = calc5(1930, "FrontEnd Developer")
  console.log("age5", age5)