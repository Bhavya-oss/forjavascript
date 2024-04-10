const person1Name = {
    firstName : "Akshay",
    lastName : "Shaini",
    // fullName : function(){
    //     console.log(this.firstName +" "+ this.lastName)//also we can write it as separate function()
    // }
}

// person1Name.fullName();
const printFullName = () => {
    console.log(`${this.firstName} ${this.lastName}`)
}
// const person2Name = {
//     firstName : "Akshay",
//     lastName : "Shaini",
//     fullName : function(){
//         console.log(this.firstName +" "+ this.lastName)// same function we are using in different object so redundent so use call()
//     }
// }
printFullName.call(person1Name)

const person2Name = {
    firstName : "Sachin",
    lastName : "Tendulkar",
}
printFullName.call(person2Name);

//function borrowing

// person1Name.fullName.call(person2Name)