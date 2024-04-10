const friends = ["Michel", "Steven", "Peter"]
console.log("Array1 is ", friends)
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2])
console.log(friends.length)

const Array1 = new Array(1991, 19992, 1993, 1994, 1995);
console.log(Array1)

console.log(friends[friends.length - 1] )// inside square brackets we can put expressions

friends[2] = "Pathi" // array updating (array declared in const but we still updating the array because for primitive data types we can not update the value but we can in non primitive data types)
console.log(friends)

// friends = ["index1", "index2", "index3"]
// console.log(friends)// but we can not update complete array like this "Uncaught TypeError: Assignment to constant variable".

const firstName = "Jonas"
const Array2 = ["index0", firstName, "Lecture", 2024-25, friends ] // we can put array inside the array and expression or already declared and initialized variable.
console.log("Array2", Array2)


const calcAge = function (birthYear)  {
return 2024-birthYear;
}


const Array3 = [1992, 1995, 1834, 1923, 1999];


// const calculatedAge = calcAge(Array3)// we can not do like this Array3 is also

let calculatedAge = calcAge(Array3[5-2]);// we can do this
console.log("Calculated age is ", calculatedAge)
 let age1 = calcAge(Array3[0]);
 let age2 =calcAge(Array3[1]);
 let age3 = calcAge(Array3[Array3.length - 1]);// select value
console.log(age3, age1, age2);

let ages = [calcAge(Array3[0]), calcAge(Array3[1]),  calcAge(Array3[Array3.length - 1])]
console.log(ages)