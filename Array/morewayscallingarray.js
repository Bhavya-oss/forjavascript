const array1 = ['a', 'b', 'c', 'd', 'e', 'f']
const object1 = array1.reduce((accu, curr) => {
  // console.log(accu, curr)
  accu[curr] = curr
  return accu
}, {})

console.log('object1', object1)
let object2 = {}
array1.forEach((element, index) => {
  object2[element] = index
})

// console.log('object2object2', object2)

function sayHi() {
  let role
  console.log('rolerole', role)
  console.log('namename', name)
  console.log('ageage', age)
  var name = 'Lydia'
  var age = 28
}

sayHi()

// function containsAllLetters(arr) {
//   const [first, second] = arr.map((str) => str.toLowerCase()) // Convert both strings to lowercase
//   const letterCount = {}

//   for (const char of first) {
//     letterCount[char] = (letterCount[char] || 0) + 1
//   }
//   console.log('letterCountletterCount', letterCount)
//   for (const char of second) {
//     console.log('charchar', char)
//     if (!letterCount[char]) {
//       return false
//     }
//     letterCount[char]--
//   }

//   return true
// }

// console.log(containsAllLetters(['Boy', 'oy'])) // true
// console.log(containsAllLetters(['test', 'tset'])) // true
// console.log(containsAllLetters(['Hello', 'World'])) // false


// const elementPresent = (array) =>{
// const [first, second ] = array.map(ele => ele.toLowerCase());
// let objectLetter = {}
// for(const char of first){
//     objectLetter[char] = char;
// }

// for(const char of second){
//     if(!objectLetter[char]){
//         console.log("Many")
//         return false;
//     }
//     return true;

// }



// }


// console.log(elementPresent(["Boy", "yok"]))


// function containsAllLetters(arr) {
//     const [first, second] = arr.map(str => str.toLowerCase()); // Convert both strings to lowercase
//     const letterCount = {};

//     for (const char of first) {
//         letterCount[char] = char;
//     }

//     for (const char of second) {
//         if (!letterCount[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(containsAllLetters(["Boy", "oy"])); // true
// console.log(containsAllLetters(["test", "tset"])); // true
// console.log(containsAllLetters(["Hello", "World"])); // false


//closure
function outer(){
var outerNumber =1;
return function inner(){
    console.log(outerNumber);
}
}

outer()()

function outer1(){
     function inner1(){
        console.log(outerNumber);
    }
    var outerNumber =10;

    return inner1
    }
    
    outer1()()


//
console.log("Array is ",[1,2,3,4,5,6,7]);//[1,2,3,4,5,6,7]
console.log(new Array(1,2,3,4,5,6,7));//[1,2,3,4,5,6,7]

const x = new Array(7)//create empty array of length 7
console.log(x)//[empty × 7] we can fill this empty array by fill()


// const array3 = new("String");
// console.log(array3)//error

//fill()
//fill() mutate the original array
x.fill(3);
console.log(x)//[3, 3, 3, 3, 3, 3, 3]

x.fill(4, 2,4)// value will fill, strating index, upto except last index(index 4)
console.log(x)//[3, 3, 4, 4, 3, 3, 3]

//change also filled array
const array3 = [3,4,8,1,3,8,2,0,12];
array3.fill(25, 3, 6);
console.log(array3);//[3,4,8,25,25,25,2,0,12]

//Array.from() same as and better than new Array() and fill()
const array4 = Array.from({length:7}, () => 4);
console.log(array4);//[4, 4, 4, 4, 4, 4, 4]


const arrray5 =  Array.from({length:7}, (curr, i) => {//leke map() current element and current index
  //curr is not useing so we can put "_" instead of curr
  console.log("array5", curr, i)
 return i+1;
})

console.log(arrray5)