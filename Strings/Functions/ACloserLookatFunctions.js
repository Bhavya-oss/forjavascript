"use strict"

const booked = [];

const createBooking = function(flightNum, numPassengers=3, price= 199*numPassengers
    // 199*1.2 
    ){
        //assign is in ES6
    //ES5
    // numPassengers = numPassengers || 1;
    // price =price || 199;

    const reserve = {flightNum,numPassengers, price}
    console.log("reservereserve",reserve)
    booked.push(reserve);

}

createBooking("LM123");
createBooking("LH123", 2, 800);
createBooking("LH123",undefined,840)
console.log("bookedbooked", booked)


//passing arguments works: value vs reference
//primitive data types are pass by value
//non-primitive data types are pass by reference
/* ****** */
//pass by value
let a =10;
let b ="booked";
let c= a;
console.log(c,a)//10,10
c = c+1;
console.log(a,c)//10, 11 a value does not changed


//pass by reference
let array1 = [1,2];// here array1 store the address(reference) not value
let array2 = array1;
// array2 = [1,2,3];// not change the array1 because reassigning
array2.push(3,4,5);// it change the both array1 and array2 because now it manipulating
console.log(array1,array2 )//[1,2,3,4,5], [1,2,3,4,5]
/* ****** */

const flightref = ['C', 'l', 'o', 'u', 'd', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
// console.log(flightref.split(""));
const flight  = "LM123";
const passenger = {
    name:"Jonas",
    passport:24739479284,
}

const checkIn = function (flightNum, passengers, flightCloud){
    flightNum = "LH999";
    passengers.name = "Mr " + passengers.name;
    flightCloud=flightCloud.shift();
    console.log("flightrefflightref",flightCloud)
    if(passengers.passport === 24739479284){
        alert("checked in")
    }
    else{
        alert("Wrong passport")
    }

}

const newPassport = function(passenger){
passenger.passport = Math.trunc(Math.random()*10000);
}

checkIn(flight, passenger,flightref);
console.log(flight);//LM123 not changed out side of the function because it is primitive data type, primitive type takes the copy of the variable not that value only so it is not changing
console.log(passenger.name)//Mr Jonas it changed even outside of the function 
console.log("flightrefflightref", flightref)//changed
newPassport(passenger);
// if we call newPassport() before checkIn() it gives Wrong passport because same object updating in two functions.