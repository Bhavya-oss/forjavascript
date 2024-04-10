let variableString = "String Operations"
let variableString1 = "String1";
let variableString2 = "String2";

//toUppercase
console.log(variableString.toUpperCase());

//toLowerCase
console.log(variableString.toLowerCase());

//to concatinate strings
let concatedString = variableString1.concat(variableString2);
console.log(variableString1, variableString2);
console.log(concatedString);

console.log(variableString1 + " " + variableString2 +" "+ variableString);// use "+" to concat strings
console.log(variableString1.concat(" ", variableString2, " ", variableString ));// use concat() to concatinate two strings

//extracing string 
//slice(start, end)
console.log(variableString.charAt(5))
let slicedString = variableString.slice(0,5); //Strin slice() extract 0 to 4 not include the 5
let slicedString1 = variableString.slice(0,6);// String 
let sliceStringEnd = variableString.slice(-6, -3)//ati

console.log("slicedStringslicedString", slicedString);
console.log("slicedString1slicedString1", slicedString1)
console.log(variableString.slice(6));//for 5 g Operations, for 6 Operations
console.log("slicedString1slicedString1slicedString1slicedString1", sliceStringEnd)// ati

//subString
//Same as slice but less than 0 treated as 0
console.log(variableString.substring(0,6))// String
console.log(variableString.substring(-6, 4)) //Stri

//substr
// Same as slice but second parameter specify the length of the extracted substring
console.log("substrsubstr", variableString.substr(0,6))


const objectArray = {
        
}
