// spread operator is used to build new array(unpacking an array) or to pass multiple element into a function.
//rest operator is used to pack the array (used to desturcturing)

//rest and spread for destructuring
const destructureObject = {
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

// Spread, because right side of the "="
const array1 = [1, 2, ...[3, 4]]
console.log('array1', array1) //[1,2,3,4]

//Rest, because left side of the "="
// const [a,b, ...others] = [1,2,3,4,5];
// console.log(a, b, others) //1 2 [3,4,5]

// const [mudde,kaalu, ...others] = [...destructureObject.startMenu, destructureObject.mainMenu]
// console.log(mudde, kaalu, others)// chapathi rotti ["Bathu", ["Mudde", "Saaru","Kaalu"]]

const [mudde, , kaalu, ...others] = [
  ...destructureObject.mainMenu,
  ...destructureObject.startMenu,
]
console.log(mudde, kaalu, others) // Mudde Kaalu ["chapathi", "rotti", "Bathu"]

//objects
const { thurs, ...rest } = {
  ...destructureObject.openingHours,
  ...destructureObject.mainMenu,
}

// const {thurs, ...rest} = destructureObject.openingHours;
console.log(thurs, rest)

//rest and spread for function
const addRest = function (...numbers) {
  console.log(numbers) // dispay the 4 array [1,2] [1,2,3,4,,5] so rest operator pakking the array
  let sum = 0
  for (let i = 0; i <= numbers.length; i++) {
    sum += i
    console.log(sum)
  }
}
//rest
addRest(1, 2)
addRest(1, 2, 3, 4, 5)
addRest(1, 2, 3, 4, 5, 6, 7)
// addRest(1,2,3,4,5,6,7,8,9);

//for spread
const addSpread = function (a, b, c, d, e) {
  console.log(a, b, c, d, e)
}
const numbers = [1, 2, 3, 4, 5]
addSpread(...numbers)

destructureObject.orderPizza("mashroom", "onion", "olives", "spinach")// mashroom, onion, olives, spinach
destructureObject.orderPizza("mashroom")//mashroom, []
