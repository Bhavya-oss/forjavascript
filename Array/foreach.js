const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

console.log('movements', movements)

for (const movement of movements) {
  if (movement > 0) {
    console.log(movement)
  }
}

movements.forEach(function (element) {
  //callback function(), for each method exicute and pass the current element(argument) to the callback function in every itteration
  if (element > 0) {
    console.log('movements', element)
  } else {
    console.log('less than zero elements', element)
  }
})

//anonymos function:function does not have the name

movements.forEach((element, index, array) => {
  if (element > 0) {
    console.log(`Movement ${index + 1}: element is ${element} ${array}`)
  } else {
    console.log(`Movement ${index + 1}: element is ${Math.abs(element)} ${array}`)
  }
})


//when should use for each and for of

//we can not use breack() and continue() statement with forEach loop itterate entaire array so if we want to use break() and continue() use for of 


//forEach with map and sets
const currencies = new Map([["USD", "United State dollar"], ["EUR", "Euro"], ["GBP", "Pound sterling"]]);

currencies.forEach(function(value, key, map){
console.log(`${key}: ${value} $
{map}`)
})

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

currenciesUnique.forEach((element, index, array)=>{//set doesnot have index so use "_" in place of "index"
console.log(`${element}: ${element}`)//USD: USD, GBP: GBP,  EUR: EUR
})