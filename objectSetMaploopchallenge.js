//builtin data structure in Javascript is array,object,set and map.
//non-builtin datastructure in javascript is linked lists, stack, queue, trees and hash tables 


let game = {
    team1:"Bayern Munich",
    team2:"Borrussia Dortmund",
    scored:["Lewendowski", "Gnarby", "Lewndowski",  "Hummels" ],
odds:{
    team1:1.33,
    x:3.25,
    team2:6.5,
}
};


//without destructuring
for(const score of game.scored.entries()){
    console.log(score)
    console.log(`Goal ${score[0]+1}: ${score[1]}`)
}


for(const [series, gameName] of game.scored.entries()){
console.log(`Goal ${series+1}: ${gameName}`)
}


const oddsLength = Object.values(game.odds);
let sum = 0
console.log(oddsLength)
for (const value of oddsLength){
     sum +=  value
     console.log("Sum is ", sum)
}

console.log("Average is", sum, oddsLength.length, sum/(oddsLength.length))


for (const [nameOfPerson, score] of Object.entries(game.odds)){
    const teamString = nameOfPerson === "draw"?"Bayern Munich":`victory ${game[nameOfPerson]}` 
    console.log(`Odd of ${teamString}: ${score}`)
}


//Javascript data structure array, objects, sets and map
//set has unique value

//create set
const orderSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta", "Pizza"])// making array because itterable, mixed datatyepes, values are unique, order is irrelevent
console.log("Set is", orderSet)// removes the redundant values {"Pasta", "Pizza", "Risotto"}
const array1 = [1, 4, "a", "b", "c", 6, "a", "b", "c"];// we can use mixed datatype, order ir relavent, value can be repeate
for(const value of array1){
    console.log("valuevalue", typeof value)
}

for (const [index, value] of array1.entries()){
    console.log(index,value )
}

//sets can be empty
console.log(new Set()); //{}
console.log(new Set("Jonas"))//String also itterable {'J', 'o', 'n', 'a', 's'}

//get set size
console.log("Size of the Set", orderSet.size);

//Check element present in set or not
console.log(orderSet.has("Pasta"));//true
console.log(orderSet.has("Burger"));//false

//add new element to set
console.log(orderSet.add("Burger"))

//delete element from set
console.log(orderSet.delete("Risotto"))
console.log(orderSet)

//itterate the set
for(const order of orderSet){
    console.log("Sets",order)
}


//delete all of the element from the array
orderSet.clear();
console.log("Set is cleared", orderSet)//{}



//we can not access value from set if we want value then use array


//Set is mainly used to remove duplicates from array

const staff = ["waiter", "cheff", "waiter", "manager", "cheff", "waiter"];
const setStaff = new Set(staff);// converting array to set
console.log("Array to Set", setStaff)// {'waiter', 'cheff', 'manager'}

// const setStaff = [...new Set(staff)];// At a time convert array to set and set back to array
console.log("setStaff", setStaff)
const arrayStaff = [...setStaff]//set to array  ['waiter', 'cheff', 'manager']
console.log(arrayStaff)

//set is used to how many defferent word is there or we can for lette
const differentWord = new Set(["waiter", "cheff", "waiter", "manager", "cheff", "waiter"]).size;
console.log("differentWord",differentWord);//3

const differentLetter = new Set("jonasschemdtmann").size;// srting also itterable
console.log("differentLetter",differentLetter)

//map:- map will map the values to key. map is like object data store in key-value pairs
//difference between map and object is map key can have any data type it can be array, object or other map but in object key can have only string

//create map
const rest = new Map()//always create empty map then add key and value
console.log(rest);
//add
rest.set("name", "Classico Italiano");
// console.log(typeof rest, rest);
rest.set(1, "Firenze, Italy");
rest.set(2,"Lisbon, Portugal");
rest.set("categories", ["Italian", "Pizzeria", "Vagetarian", "organic"]).set("open", 11).set("close", 23).set(true,"We are Open ").set(false, "We are Closed")// we are addin key and value here only because set will return updated map data.
console.log(rest)

//we can get the data from map we use get()
console.log(rest.get("name"))// to read type is important if we not use name inside "" it will return undefine
console.log(rest.get(true));
console.log(rest.get(1));
const time = 20;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))
)

//check map contains certain keys
console.log(rest.has("name"))//true
console.log(rest.has("mainMenu"))//false

// delet key and value from map 
//slow process not recommend to delete key and value from map
rest.delete(2);
console.log(rest);

// rest.clear();
console.log(rest)// delete all

console.log(rest.size)

rest.set([1,2], "test");
console.log(rest.get([1,2]))//but it giving undefined because they are not same object in the heap
// to work above [1,2]
const arr =[1,2];
console.log(rest.set(arr));
console.log(rest)

console.log(rest.get(arr));
