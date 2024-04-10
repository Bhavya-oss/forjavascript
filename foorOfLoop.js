const destructureObject = {
    name:"SomeOne",
    address:"SomeWhere",
    categorie:["vegiterian", "non-vegiterian", "waterien","Partian", "Italiean"],
    startMenu:["chapathi", "rotti","Bathu"],
    mainMenu:["Mudde", "Saaru","Kaalu"]
    
}

// for of used for array and for in is used for an object
//we can dor= destructure in for of
const menu = [...destructureObject.startMenu, ...destructureObject.mainMenu,  ];
console.log("menumenu", menu)

for( const item of menu){
    console.log("item is", item)
}

//get index
for( const item of menu.entries()){
    console.log(item)//[0,"chapathi"] [1,"rotti" ] etc...
}


for (const item of menu.entries()){
    console.log(`${item[0]+1}: ${item[1]}`);//1: chapathi 2: rotti etc
}

// do above thisngs by destructuring
for(const [index, element] of menu.entries()){
    console.log(`${index+1}: ${element}`)////1: chapathi 2: rotti etc
}

function* generateSequence() {
    return  1;
    return 2;
    return 3;
  }
  
  for (const value of generateSequence()) {
    console.log(value);
  }
  
// console.log(menu.entries())

//Optional chaining rule

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

  const days =["monday", "tuesday", "wed", "thurs","fri", "sat" ];
for(const day of days){
    // console.log(restaurant?.openingHours[day]?.open)
    // let open = restaurant?.openingHours[day]?.open  || "closed";    // day is not key in resturant so if we want to use variable name as property name we have to use [] (for dynamic)

    let open = restaurant?.openingHours[day]?.open  ?? "closed";// day is not key in resturant so if we want to use variable name as property name we have to use [] (for dynamic)
    console.log(`On ${day} we open at ${open} oClock`);
}


//optional chaing for methods
console.log(restaurant.order?.(0,1)??"Method  does not exist"
)

//optional chainging for array
const users = [ {name:"Jonas", emai:"jonas@gmail.com", }]
console.log(users[0]?.name ?? "User array is empty");
//or we can 
if(users.length > 0) { console.log(users[0].name)}else {console.log("User array is empty")}
