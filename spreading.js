//when ever we want element seaparetly in arrya then use spread ....(shallow copy of the array)
const array1 = ["a", "b", "c", "d"];
console.log("array1", array1);// [a, b,c, d]

const array2 = [1, 2, ...array1];
console.log("array2", array2);// [1,2, a, b,c,d]
console.log("array2",...array2);//1 2 a b c d

const array3 = [array1, ...array2,];
console.log("array3", array3);//[[a, b, c, d], 1, 2, a, b, c, d]
console.log("array3", ...array3)//[a, b, c, d] 1 2 a b c d

const array4 = [1, 2, array1[0], array2[1], array1[2]];
console.log("array4", array4)//[1, 2, 'a', 2, 'c']

const destructureObject = {
    name:"SomeOne",
    address:"SomeWhere",
    categorie:["vegiterian", "non-vegiterian", "waterien","Partian", "Italiean"],
    startMenu:["chapathi", "rotti","Bathu"],
    mainMenu:["Mudde", "Saaru","Kaalu"]
}

//join  two arrya
const array5= [...destructureObject.startMenu,...destructureObject.categorie,  destructureObject.name ];
console.log("array5", ...array5)//array5 chapathi rotti Bathu vegiterian non-vegiterian waterien Partian Italiean SomeOne
console.log("array5", array5)//['chapathi', 'rotti', 'Bathu', 'vegiterian', 'non-vegiterian', 'waterien', 'Partian', 'Italiean', 'SomeOne']



//Iterables:array, string, map and sets not object
//spread operator works on iterables
//string

const str1 = "Jonas";
const letters = [...str1, " ", "q"];
console.log("letters", letters)//['J', 'o', 'n', 'a', 's', ' ', 'q']
console.log("letters", ...letters)//J o n a s  q

// console.log(`${...str1}`) // gives an error

// we can spread while sending parameters to function or building new array
const destructureObjectSpre = {
    name:"SomeOne",
    address:"SomeWhere",
    categorie:["vegiterian", "non-vegiterian", "waterien","Partian", "Italiean"],
    startMenu:["chapathi", "rotti","Bathu"],
    mainMenu:["Mudde", "Saaru","Kaalu"],
    orderPasta: function(ing1,ing2, ing3){
        console.log(`Ingridience are ${ing1}, ${ing2} and ${ing3}`)
    }
}

// const ingridience = ["Mayonis", "Saas", "Kechap"];
// const pastha = destructureObjectSpre.orderPasta(...ingridience);

// call function with prompt 
// const promptIngridience = [prompt('Let\'s make pasta from ingridient1'), prompt('Let\'s make pasta from ingridient2'), prompt('Let\'s make pasta from ingridient3')] //using "\" with " ' " because to tell string not ending when we use  single quote 

// console.log("promptIngridience", promptIngridience)// what we entered in prompt
// destructureObjectSpre.orderPasta(promptIngridience[0], promptIngridience[1], promptIngridience[2])
// destructureObjectSpre.orderPasta(...promptIngridience);

// Since ES 2018 spread operator works on object also even object is not itterable
const copyDestructureObject = {...destructureObject, founderIn:1998, founder:"Guiseppe"} // adding new key value
console.log("destructureObject",copyDestructureObject);

copyDestructureObject.name = "Ristorante Roma";
console.log({...copyDestructureObject}) ;// update the name
console.log({...destructureObject});//original name


