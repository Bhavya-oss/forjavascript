const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
console.log(owners)
console.log(owners.sort())
console.log(owners) //sort mutate the original array

const number = [4, 111, 112, 21, 30, 27, 18]
console.log(number.sort()) // it will not sort numbers correctly because it sort based on the stirng

//sort number acending order
// number.sort((a, b) => {
//   //if it return a<b a,b(keep a order)
//   //if it return a>b b,a(switch the order)
//   if (a > b) {
//     return 1
//   } else {
//     return -1
//   }
// })

//sort number decending order
number.sort((a, b) => {
  if (a > b) {
    return -1
  } else {
    return 1
  }
})

console.log(number) //[4, 18, 21, 27, 30, 111, 112]

const array1 = [-40, 70, -2, 40, -10, 30, 29]
array1.sort((a, b) => {
  return a - b //accesnding order
  //    return b-a; //sort desending order
})

console.log(array1)
console.log(array1.reverse())

let array2 = [3, 5, 1, 2, 8, 6]
let sorted = false // Variable to track whether the array is sorted
// let temp = [...array2]
let resultantarray = array2.slice().sort((a, b) => a - b)

// Function to sort the arra

// Function to handle button click
function handleClick() {
  sorted = !sorted
  if (sorted) {
    console.log('Array:', resultantarray)
  } else {
    console.log('Array:', array2)
  }
}

// Attach click event listener to the button
document.getElementById('sortButton').addEventListener('click', handleClick)
