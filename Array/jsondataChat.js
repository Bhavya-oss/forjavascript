console.log('Chatgpt')

const employees = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 35 },
  { name: 'Charlie', age: 25 },
]

const averageAgeEmployees = employees.reduce(
  (accu, curr, indx, array) => accu + curr.age / array.length,
  0
)
console.log(averageAgeEmployees)

const arr = [2, 7, 9, 8, 3]

const maxNum = arr.reduce((accu, curr) => {
  if (accu > curr) {
    return accu
  } else {
    return curr
  }
}, arr[0])

console.log(maxNum)

const users = [
  { firstName: 'akshay', lastName: 'shaini', age: 26 },
  { firstName: 'donald', lastName: 'trump', age: 75 },
  { firstName: 'elon', lastName: 'musk', age: 50 },
  { firstName: 'deepika', lastName: 'padukone', age: 26 },
]

const concatedName = users.map((data) => `${data.firstName} ${data.lastName}`)

console.log(concatedName)

const numberOfPeople = users.reduce((accu, curr) => {
  if (accu[curr.age]) {
    accu[curr.age] = ++accu[curr.age];
  } else {
    accu[curr.age] = 1
  }
  return accu
}, {})


const numPeople = users.reduce((accu, curr) =>{
    if(accu[curr.age]){
        accu[curr.age] = ++accu[curr.age];

    }
    else{
    

    (accu[curr.age] = 1)
    }
    return accu;
})
console.log(numberOfPeople)


const array2 = users.map((data)=>{
    console.log(data)
    const fullName = `${data.firstName} ${data.lastName}`;
    const greet = `Hello, my name is ${fullName} and I am ${data.age} years old.`;
return {fullName, age:`${data.age}`, greet}

})


console.log(array2)


const celsiusTemperatures = [0, 10, 20, 30, 40];

const fahrenheitTemperatures = celsiusTemperatures.map(celsius => {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit.toFixed(2); // Round to 2 decimal places
});

console.log("Fahrenheit Temperatures:", fahrenheitTemperatures);



const numbers = [1, 2, 3, 4, 5, 6];


const evenNumber = numbers.filter(num => num%2 === 0).map(num=> num*2).reduce((accu, curr) => accu+curr ,0)

console.log(evenNumber)

const strings = ["apple", "banana", "orange", "kiwi", "grape"];

const stringLength = strings.filter(str => str.length > 5 )

console.log(stringLength)

const usersAvg = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 },
    { name: 'Emma', age: 45 }
  ];

  const yelders = usersAvg.filter((data) => {
    return data.age >= 40;
      } )
    //   .reduce((accu, curr, indx, arr) => accu + curr.age/arr.length,0)


  console.log("yeldersyelders", yelders)


  const purchases = [
    { customer: { name: 'Alice', age: 25 }, item: { name: 'Book', price: 20 } },
    { customer: { name: 'Bob', age: 35 }, item: { name: 'Phone', price: 500 } },
    { customer: { name: 'Charlie', age: 40 }, item: { name: 'Laptop', price: 1000 } },
    { customer: { name: 'David', age: 30 }, item: { name: 'Tablet', price: 300 } },
    { customer: { name: 'Emma', age: 45 }, item: { name: 'Headphones', price: 50 } }
  ];


  const customerAge = purchases.filter(item => item.customer.age >= 30).map(data =>  data.item.price).reduce((accu, curr) => accu+curr, 0)

  console.log(customerAge)


  const vowels = ['A', 'E', 'I', 'O', 'U'];
const mostExpensiveItem = purchases
  .filter(purchase => 
    vowels.includes(purchase.customer.name[0].toUpperCase())
    ) // Filter purchases by customers whose names start with a vowel
//   .reduce((maxItem, current) => maxItem.item.price > current.item.price ? maxItem : current); // Find the most expensive item

// console.log("Most expensive item purchased by customers whose names start with a vowel:", mostExpensiveItem);
console.log(mostExpensiveItem)