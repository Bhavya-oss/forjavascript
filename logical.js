const destructureObjectSpre = {
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
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Ingridience are ${ing1}, ${ing2} and ${ing3}`)
  },
}

console.log('--OR--') // returns first truthy value, if all are falsy then return last falsy value
console.log(3 || 'Jonas') //3
console.log(0 || 'string') // string
console.log(null || undefined) // undefined
console.log(undefined || null) //null
console.log('' || 'Jonas') // Jonas
console.log(true || 0) //true
let restaurant = {
  numGuets: 0,
}
restaurant.numGuets = 20
const guests1 = restaurant.numGuets ? restaurant.numGuets : 10
console.log('guests1', guests1)

//or
//shortncircuiting
const guests2 = restaurant.numGuets || 10
console.log('guests2', guests2)
console.log(0 || undefined || false || 'course' || 3 || '' || null) //course

console.log('--AND--') // return last truthy value, first falsy value

console.log(3 && 'Jonas') //Jonas
console.log(0 && 'Jonas') // 0
console.log('Hello' && 23 && null && 'Jonas') //null

if (destructureObjectSpre.orderPasta) {
  destructureObjectSpre.orderPasta('Mayonis', 'Chees', 'Kechap')
}

//use
destructureObjectSpre.orderPasta &&
  destructureObjectSpre.orderPasta('Mayonis', 'Chees', 'Kechap')

console.log('--nullish coalescing--')

// or operator
restaurant.numGuets = 0
const guest3 = restaurant.numGuets || 10
console.log('guests3guests3', guest3) //10
//it displaying 10 even restaurant.numGuets = 0 because 0 is falsy value we are not getting original value we can over come this by nullish coalescing

// nullish values are :-null and undefined
//falsy values are :- null, undefined, 0, "", false,
const guest4 = restaurant.numGuets ?? 10
console.log('guest4guest4', guest4) //0

restaurant.numGuets = null
const guest5 = restaurant.numGuets ?? 20
console.log('guest5guest5', guest5) //20

//add new key and value to the object
let person = {}
person.name = 'Johan'
console.log(person.name)

console.log(
  '--Data structure and Modern Operators(Logical assignment operator)--'
)

const rest1 = {
  name: 'Capri',
  numGuests: 20,// if 0 then in console 10 over come by nullish coalescing operator
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}
//by or operator
rest1.numGuests = rest1.numGuests || 10
console.log('rest1.numGuests', rest1) //{name:"Capri",numGuests:20,}

rest2.numGuests = rest2.numGuests || 10
console.log('rest2.numGuests', rest2) //{name:"La Piazza", owner:"Giovanni Rossi",numGuests:10}

// we can do the above this by
rest1.numGuests ||= 10
rest2.numGuests ||= 10

console.log('rest1.numGuests', rest1) //{name: 'Capri', numGuests: 20}
console.log('rest2.numGuests', rest2) //{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10}

//Logical nullish coalescing operator

const rest3 = {
  name: 'Capri',
  numGuests: 0,
}

const rest4 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}
rest3.numGuests ??= 20
console.log('rest3.numGuests'.rest3) // {name:"Capri", numGuests:0,}

rest4.numGuests ??= 20
console.log('rest4.numGuests', rest4) //{name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 20}

//logical && operator
rest1.owner = rest1.owner && "<ANONYMOUS>";//{name: 'Capri', numGuests: 20, owner: undefined}name: "Capri"numGuests: 20owner: undefined[[Prototype]]: Object

rest2.owner = rest2.owner && "<ANONYMOUS>";//{name: 'La Piazza', owner: '<ANONYMOUS>', numGuests: 10}

rest1.owner &&= "<ANONYMOUS>" ;//{name: 'Capri', numGuests: 20,} it does not display undefined like above
rest2.owner &&= "<ANONYMOUS>";//{name: 'La Piazza', owner: '<ANONYMOUS>', numGuests: 10}

console.log("rest1.owner", rest1);
console.log("rest2.owner", rest2);