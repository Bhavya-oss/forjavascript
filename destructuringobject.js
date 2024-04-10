let restaurant = {
  name: 'classico italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegiterian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
}

let { name, categories, openingHours, } = restaurant;
console.log("namecategoriesopeningHours", name, categories, openingHours)

// change the key name
let  {name:restaurantName, categories:foodCategories, openingHours:restaurantOpeningOurs} = restaurant;
console.log("namecategoriesopeningHours", name, restaurantName, foodCategories, restaurantOpeningOurs);

// //set default value
// let {menu, startMenu:restaurantStartMenu = [], mainMenu:restaurantMainMenu= {} } = restaurant;
// console.log("menustartMenumainMenu", menu,restaurantStartMenu, restaurantMainMenu ) // undefined, ["Italian", "Pizzeria", "Vegiterian", "Organic"],["Pizza", "Pasta", "Risotto"];

let {menu=[], startMenu:restaurantStartMenu = [], mainMenu:restaurantMainMenu = []} = restaurant;
console.log("menustartMenumainMenu", menu, restaurantStartMenu, restaurantMainMenu)// [],  ["Italian", "Pizzeria", "Vegiterian", "Organic"],["Pizza", "Pasta", "Risotto"]

//mutating variables
let a = 111;
let b = 222;
const obj= {a:23, b:7, c:14};
// {a, b} =  obj // Unexpected token '='
({a, b} = obj);
console.log("ab", a, b)// 23, 7

// nested objects 
let { fri } = openingHours;
console.log(fri)// {open: 11,  close: 23,}

let {fri:{open, close}} = restaurant.openingHours;
console.log(open, close)// 11 23

// renaming the key
let {fri:{open:o, close:c}} = openingHours;
console.log("oc",o,c)// 11 23


// use the destructuring when we need to pass more parameters to an function because there is no need of argument order.
let restaurantMethod = {
    
        name: 'classico italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegiterian', 'Organic'],
        startMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
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
        orderDerliver: function({starterIndex=1, mainIndex=1, address, time}){// argument there is no need in order
            console.log(`StarterIndex and MainIndex is ${starterIndex}, ${mainIndex} at ${time} to ${address} `)
        },
      
}

restaurantMethod.orderDerliver({
    time:"22:30", address:"Via del Sole, 21",
    mainIndex:2, starterIndex:2,
})

restaurantMethod.orderDerliver({time:"22:30", address:"Via del Sole, 21"})// default value