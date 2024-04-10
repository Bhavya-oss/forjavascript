const arr = ['a', 'b', 'c', 'd', 'e']

console.log('-----slice-----')
arr.slice(2)
console.log(arr) //displaying list of methods for array

console.log(new String('string'))
console.log('string'.slice(2)) //displaying list of methods for string

//slice() take a part of the array without changing original array

console.log(arr.slice(2)) // ['c', 'd', 'e']
console.log(arr.slice(2, 4)) // ['c', 'd']
console.log(arr.slice(-3)) //['c', 'd', 'e']
console.log(arr.slice(2, -2))

//create shallow copy of an array same as spread(we can use any one in both)
console.log(arr.slice()) //["a", "b", "c", "d", "e"]
console.log([...arr]) //["a", "b", "c", "d", "e"]

//splice()
//splice() also same as slice but slice does not mutate the original array but splice() mutate the original array
//in slice second parameter for up to which index have to delete but in splice() second parameter specify how many numbers have to delete
console.log('---splice---')
console.log(arr.splice(2)) //['c', 'd', 'e']
console.log('original array', arr) //['a', 'b']
console.log(arr.splice(-1)) //["b"];
console.log(arr) //["a"]
console.log(arr.splice(1, 1)) //[]
console.log(arr.splice(0, 1)) //['a']

const array1 = ['a', 'b', 'c', 'd', 'e']
const array2 = ['f', 'g', 'h', 'i', 'j']
//reverse()
//reverse() will mutate the original array
console.log('---revese---')
console.log(array1.reverse()) //["e", "d", "c", "b", "a"]
console.log(array1) //["e", "d", "c", "b", "a"]
console.log(array1.reverse())

//concat()
//concat the original array
console.log(array1.concat(array2)) //["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
console.log([...array1, ...array2, ...array1]) //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']// does not mutate the original array

//join() convert array to string
console.log(array2.join("_"), typeof array2.join("-"));//f_g_h_i_j


console.log("---new methods intoduce in ES 2022---");

//at get the value in the index
const array3 = [23, 21, 26, 11, 64];

console.log(array3[3]);
console.log(array3.at(3))// not working

console.log(array3.flat(3));


console.log(array3[array3.length - 1]);//last index value 64
console.log(array3.at(1));//21
console.log(array3.slice(-1))//[64]
console.log(array3.slice(-1)[0])//64
console.log(array3.at(-1));//64
console.log(array3.at(-2));//11


