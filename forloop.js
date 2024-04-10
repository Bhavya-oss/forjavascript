for (let i = 1; i <= 10; i++) {
  console.log("Lifting weights repetition", i);
  console.log(`$Lifting weights repetition ${i}`);
}

const jonasArrya = [
  "Jonas",
  "schemedtman",
  2037 - 1991,
  "teacher",
  ["Michel", "Peter", "Steven"],
];

for (let i = 0; i < jonasArrya.length; i++) {
  console.log("Jonas Data", jonasArrya[i], typeof jonasArrya[i]);
}

const newArray = [];
for (let i = 0; i < jonasArrya.length; i++) {
  // newArray[i] = typeof jonasArrya[i];
  newArray.push(typeof jonasArrya[i]);
}

console.log("newArraynewArray",newArray);

// continue only we can use with for loop, while loop, do while loop, (if statement) can not use with switch statement terminate only the iterrration fot from entaire loop
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) 
  continue;

  console.log("continue statement", i);// 1,3,5,7,9,11,,13,15,17,19
}


for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) 
  
    console.log("continue statement", i);// 0,2,4,6,8,10,12,14,16,18,20
    continue;

  }

//break we can use with for loop, while loop, do while loop and switch
for (let i =0; i<=20; i++){
    if(i%2 == 0){
        console.log("Even number", i) //0
        break;
    }
}

for (let i =0; i<=20; i++){
    if(i%2 == 0){
        break;

    }
    console.log("Even number", i) // empty

}

//use continue when we want to display all the things except the condition
for( let i=0;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log("Value Not equal to  5", i)
}

//use break when do not want to display rest of the value
for( let i=0;i<=10;i++){
    if(i>5){
        break;
    }
    console.log("Less than 5", i)
}


for(let i = 0; i<newArray.length; i++){
    if(newArray[i] !== "string"){
        continue;
    }
    console.log("String", newArray[i])// string string string
}


//Looping backwards
for (let i=jonasArrya.length-1; i>=0; i--){
    console.log("JonasArray is", jonasArrya[i]);
}

// for(let rep=1; rep<=10; rep++){
//     console.log("Weight lifiting", rep, "times")
// }

// let rep =1;
// while(rep<=10){
//     console.log(`weight listing ${rep} times`)
// }


//destructuring
const alphabet  = ["Apple", "Ball", "Car", "Dog", "Egg","Fan"];
const number = ["one", "two", "three", "four", "five", "six"];
const newCombinedArray = [...alphabet, ...number]
const [a, , c,] = alphabet;
console.log([a, c,]);
console.log("newCombinedArray", newCombinedArray)
console.log(alphabet.concat(number));


const SumAndMultiplication = (a, b) =>{
    return [a+b, a*b]
}


const  [sum , multiply, division ="not doing now"]=SumAndMultiplication(4, 8);
console.log(sum, multiply, division )

const johny = {
    firstName:"Jony",
    lastName:"kon",
    age:5,
    address:{
        city:"Mysore",
        country:"Karnataka"
    }
}

const jooly = {
    firstName:"Jooly",
    lastName:"reh",
    age :8,
    address:{
        city:"Banglore",
        country:"Karnataka"
    }
}

const { firstName, lastName, age} = johny;  
console.log(firstName,lastName , age)// similar johny.firstName, johny.lastName, johny.age

// renaming the key
const {firstName:fname, lastName:lname} = jooly;
console.log(fname, lname)

// use when we do not know how many itterations are there and do not need increment
let i=1;
while(i<=10){
    console.log("the value is ", i);
    i++;
}