const friends = ["Michel", "Steven", "Peter"]


// Add elements to an array
let friendsPush = friends.push("Joy", "Jiy")// push() return the length of the new array
console.log(friends);// ["Michel", "Steven", "Peter", "Joy", "Jiy"] push the element to end of the array
console.log(friendsPush) // 4

friendsPush =  friends.unshift("Johny");
console.log(friends); // ["Johny", "Michel", "Steven", "Peter", "Joy"] push the elements at starting of the array
console.log(friendsPush)// unshift function returns the new array length

//Delete element from the array
friendsPop = friends.pop();
console.log(friendsPop);// pop() return element which deleted from the array
console.log("pop",friends)// delete the last element in the array


friendsPop = friends.shift();
console.log(friendsPop);// shift() return the element from the array
console.log(friends);// delete the first element in the array


// let numbertostring = 5;
// console.log(typeof numbertostring, numbertostring)
// console.log(typeof numbertostring.toString());
// console.log(friends.toString());
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// arraytostring = fruits.toString()
// console.log(arraytostring)

//Index of element
console.log(friends.indexOf("Michel"))
let friendsIndex = friends.indexOf("Steven");// 0 return the indexof the given element
console.log("friendsIndex", friendsIndex)// 1
console.log(friends.indexOf("Merry"))// if elements is not in the array then indexOf() returns the -1

//include() check the element is present in the array or not
console.log(friends.includes("Michel"));// returns true
console.log(friends.includes("Merry")); //return false if element not present in the array

// mainly includes() used to check strict equality

friends.push(23);
console.log(friends.includes(23)); // true
console.log(friends.includes("23")); // false

// includes() to write condition
if(friends.includes("Steven")){
    console.log("Steven is there in array")
}else{
    console.log("Steven is not there in array")
}
 

//get the element by index value
freindsAt = friends.at(2);
console.log("freindsAtfreindsAt",freindsAt)// peter it same as friend[2]
console.log(friends[2]);

//concatinate two array
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const bothPepole = myGirls.concat(myBoys);
console.log("bothPepole", bothPepole, myGirls, myBoys)
console.log("jonasArryajonasArryajonasArryajonasArrya")

