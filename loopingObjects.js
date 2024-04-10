//object is non-itterable even we can itterate by (Object.keys or Object.values) it convert to array
//array is itterable
const restaurant = {
    name: 'SomeOne',
    address: 'SomeWhere',
    categorie: [
      'vegiterian',
      'non-vegiterian',
      'waterien',
      'Partian',
      'Italiean',
    ],
    startMenu: ['chapathi', 'rotti', 'Bathu'],
    mainMenu: ['Mudde', 'Saaru', 'Kaalu'],
    openingHours: {
      thurs: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0,
        close: 24,
      },
    },
    orderPizza: function (a, ...rest) {
      console.log("orderPizzaorderPizza", a, rest)
  
    },
  }

 //property name
 const objectKeys = Object.keys(restaurant?.openingHours);
 let openStr = `We open the resturant ${objectKeys.length} days `
 console.log(restaurant?.openingHours)// {thurs: {…}, fri: {…}, sat: {…}}
 console.log("objectKeysobjectKeys", objectKeys)// ['thurs', 'fri', 'sat']
//   console.log(`We open the resturant ${objectKeys.length} days `);

const openStrJoin = openStr + objectKeys.join(', ') + '.';//to put comma in between and . at end
console.log(openStrJoin);//We open the resturant 3 days thurs, fri, sat.difference is (.)


  for (const day of objectKeys){
    openStr +=  `${day}, `
  }

  console.log(openStr)//We open the resturant 3 days thurs, fri, sat, Difference is (,)

const objectValues = Object.values(restaurant?.openingHours);
console.log(objectValues)//  here we getting only vlues
for (const hour of objectValues.entries()){
    console.log(hour)
}
//entries object
const entrieValue = Object.entries(restaurant?.openingHours)
console.log("entrieValue", entrieValue)// here we getting key and value both

// for (const hour of entrieValue){
//     console.log("hourhour",hour)
//     console.log(`On ${key} we open at ${open} and close at ${close}`)// error key is not defined
// }

// to over come the error
for (const [key, {open, close }] of entrieValue){// destructure
    // console.log("hourhour",hour)
    console.log(`On ${key} we open at ${open} and close at ${close}`)// error key is not defined
}


  first_name
  Some_Variable
  calculate_Age
  delayed_departure