const destructureArray = [1, 2, 3, 4, 5,6];


const [a,b,c, ...rest] = destructureArray;
console.log("a", a, b,c,rest)

const destructureObject = {
    name:"SomeOne",
    address:"SomeWhere",
    categorie:["vegiterian", "non-vegiterian", "waterien","Partian", "Italiean"],
    startMenu:["chapathi", "rotti","Bathu"],
    mainMenu:["Mudde", "Saaru","Kaalu"]
}

console.log("destructureObject", destructureObject)

const {name, address, ...kuech} = destructureObject;

const [categorie] = destructureObject.categorie;

let field = "fdalskfjsalkdfj"

let data = {["jshdg"] : field}
destructureObject["jshdg"] = field;

console.log("datadata", data)

// destructureObject.name = "fskfdlaskj"
// destructureObject["name"] = "fksjfsaklfjdh"

console.log(name, kuech, )
console.log(categorie, )

let [first, , , ,second] = destructureObject.categorie;
console.log("firstsecond", first, second)

// swiching
// let temp = first;
// first =second;
// second =temp;
// console.log("first", first)
// console.log("second", second)

// we can swich like this also

//  [second] =[first]

//  console.log("secondfirst", second, first)

const nested =[ 1, 2, [3, 4]];
// console.log("nestednested", nested);

const [i,j,[l,m]] = nested;

console.log("ijk", i, j,l, m)


// default values
// const [e,f,g] = [3, 6, 12];
// console.log("efg", e, f, g);3,6,12


// const [e,f,g ] = [3,6]
// console.log("efg", e,f,g)// 3, 6, undefined

// const [e=1, f=1,g=2] = [3,6]
// console.log("efg", e,f,g)//3,6,2

const [e, f=2, g=1 ] = [3]
console.log("efg", e, f, g);//3,2,1


