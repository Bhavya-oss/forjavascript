// in array order of the element is important to retrive the element but in object it not nessesary we can retrive the element by key
const jonasArrya = ["Jonas", "schemedmann", 2037-1991, 'techer', ["Michel", "Peter", "Steven"]];
// console.log("jonasArryajonasArrya", jonasArrya)

const jonasObject = {
    firstName:"Jonas",
    lastName:"schemedmann",
    age:2037,
    job:"teacher",
    friends:[{bestFriend:"Michel"}, "Peter", "Steven"],
    hasDriverLicense:true,
    calAge: function (){
        return 2037-age;

    }
}

const array1 = [1,2,3,4]
console.log("jonasObjectjonasObject",typeof jonasObject.friends, typeof array1)
console.log("calAgecalAge",jonasObject.calAge())
console.log(jonasObject.firstName);
console.log(jonasObject["lastName"])// access by brackets but key in quotation

console.log(jonasObject["first"+"Name"]);// we can write expression inside brackets
console.log(jonasObject["last"+"Name"]);

// let interesteIn = prompt("What do you know about Jonas? Choose between firstName, lastName, age, job, friends");// prompt() returns the string
// // console.log(jonasObject.interesteIn)// gives undefined because there is no key name called interesteIn jonasObject
// console.log(jonasObject[interesteIn]);// return the value 
// if(jonasObject[interesteIn]){
//     console.log(jonasObject[interesteIn])
// }else{
//     console.log("Enter correctly")
// }


//add key, value to the jonasObject
jonasObject.location = "portugal";
jonasObject["twitter"] = "@jonasschmedtman";
console.log(jonasObject)

// console.log(jonasObject["friends"]["best"])
console.log(jonasObject.friends[0].bestFriend)
console.log(jonasObject.friends.length)

console.log(`${jonasObject.firstName} has ${jonasObject.friends.length} friends, and his best friend is called ${jonasObject.friends[0].bestFriend}`)