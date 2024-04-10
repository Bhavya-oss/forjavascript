let paras = document.querySelectorAll('p');
console.log(paras);
let obj ={id: crypto.randomUUID(),
name:"Sterling Archer",
email:'sterling@isis.org',
}

console.log(obj.id)
//nodelist look like a array but it is nodelist
console.log(typeof paras);//object
console.log(paras.constructor)//look

//forEach with nodelist

 paras.forEach((p) =>{
console.log(p.innerHTML)
})

//map() will not work for nodelist so use Array.from()
// const paraArray = paras.map(p => p.innerHTML)

// console.log(paraArray)//Uncaught TypeError: paras.map is not a function



//Array.from

//we can create array from other things
//querrySelectorAll() return the nodelist
const arrayFrom1 = Array.from({length:6}, (_, indx) =>{
    return indx+1;
})

console.log(arrayFrom1);

const arrayFrom2 = Array.from(paras);// convert nodelist to array
console.log(typeof arrayFrom2);
console.log(typeof [1,2,3,4,5]);

const arrayFrom3 = arrayFrom2.map((p) =>{
return p.innerHTML
})

console.log(arrayFrom3);


//do it in one line

let arrayFrom4 = Array.from(paras, (p)=> p.localName);
console.log(arrayFrom4)


const originalObject = {
    name: 'John',
    age: 30,
    city: 'New York'
  };

  const spreadObject = {...originalObject}
  console.log(originalObject);
  console.log(spreadObject)
