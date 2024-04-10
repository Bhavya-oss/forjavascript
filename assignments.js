const country = "India";
const continent = "Asia";
let population = 300;
let populationCheck = 30;
populationCheck = 13;
populationCheck = 130;
console.log("country", country);
console.log("continent",continent);
console.log("population",population);
const ourState = "Karnataka";
const nativeLanguage = "Kannada";
const isISland = false;
const language = "Kannada";
console.log(`Country ${typeof country}, Continent ${typeof continent}, Population ${typeof population}, isIsland ${typeof isISland} Language ${typeof language}` )
console.log("Divide the population in equal", population/2);
console.log("Increase the population by one", ++population)

const countryFinland = 600;
let isOurCountryHasMorePopulation = population> countryFinland;
console.log("Is our country has more population than finland",isOurCountryHasMorePopulation )

const populationPortugal ="Portugal is in Europe, and its 11 million people speak portuguese";
const countryEurope = 6600
console.log("Is our country has more population than Europe", population > countryEurope)
console.log(populationPortugal)

console.log(`Our country is ${country} and have population ${population} million and ${ourState} Native language is ${nativeLanguage}.`)

if(populationCheck  > 33){
    console.log("Portugal's population is 22 million below average")
}

console.log('5'-'4');// :- 1
console.log('19'-'13'+'17');// :- 617
console.log('19'-'13' + 17);// => 23
console.log('123'< 57); // =>false
console.log(5+6+'4'+9-4-2);// =>117 wrong
console.log(5 + 6 + '4' + 9 - 4 - 2); //=>1143 correct 
console.log(typeof (5+6)); // => number
console.log(typeof (5+6+'4')); // => string
console.log(typeof (5+6+'4'+9)); // => string
console.log(typeof (5+6+'4'+9-4)); // => number
console.log(typeof (5+6+'4'+9-4-2)); // => number

// const numNeighbours =Number(prompt("How many neighbour countries dose your country have?"));
// console.log("Neighbours countries count",numNeighbours )

// if(numNeighbours === 1){
//     console.log("Only 1 border!");
// }else{
//     console.log("More tha one border");
// }
 
let sarahNeedLanguage = "English";
let sarahNeedPopulation = 50;

let isIsland = true;

console.log("IsIsland", isISland, isIsland)
if(sarahNeedLanguage === "English" && sarahNeedPopulation <= 50 && !isIsland){
    console.log("Sarah can live here ...")
}

let date = new Date();
let converToStringForDay = String(date)
console.dir(date, )
console.log(date.getDay(), converToStringForDay)

let languageCheck = "chinese or mandarin";
switch(languageCheck){
    case "chinese or mandarin":
    console.log("MOST number of native speakers!" );
    console.log(converToStringForDay.slice(0,3))
    break;

    case "spanish":
    console.log("2nd place in number of native speakers");
    break;

    case "english":
    console.log("3rd place");
    break;

    case "hindi":
    console.log("Number 4");
    break;

    case "arabic":
    console.log("5th most spoken language");
    break;
    
     default :
     console.log("Great language too :D")
}


let day = "sunday";
switch(day){
    case "sunday":{
        console.log("Today is Sunday");
        console.log(new Date());
        break;
    }
    case "monday":{
        console.log("Today is Monday");
        console.log(new Date());
        break;
    }

    case "tuesday":{
        console.log("Today is Tuesday");
        console.log(new Date());
        break;
    }

    case "wednesday":{
        console.log("Today is Wednesday");
        console.log(new Date());
        break;
    }

    case "thursday":{
        console.log("Today is Thursady");
        console.log(new Date());
        break;
    }

    case "friday":{
        console.log("Today is Friday");
        console.log(new Date());
        break;
    }

    case saturday :{
        console.log("Today is Saturday")
        console.log(new Date());
    }

     default:{
        console.log("Default")
        break;
     }
}


if( day === "sunday"){
    console.log("Today is Sunday");
    console.log(new Date());
}
else if(day == "monday"){
    console.log("Today is Monday");
    console.log(new Date());
}else if(day === "tuesday") {
    console.log("Today is Tuesday");
    console.log(continent)
}else if(day === "wednesday"){
    console.log("Today is Wednesday");
    console.log(new Date());
}
else if(day === "thursday"){
    console.log("Today is Thursday");
    console.log(new Date());

}else if(day === "friday"){
    console.log("Today is Friday");
    console.log("Friday");

}
else if(day === "saturday"){
    console.log("Today is Saturday");
    console.log(new Date());

}
else{
    console.log("Doing")
}


let age = 22;
 age <= 18 ? console.log("Age is Less tha eighteen"):console.log("Age is Greater thas eighteen")

 let value = 22;
 const accept = value === 22? `${value}`:null;

 console.log("acceptacceptaccept", accept)