let dogsJulia = [3, 5, 2, 12, 7]
let dogsKate = [4, 1, 15, 8, 3]

const checkDogs = (julia, kate) => {
  console.log(`Julia dog ${julia}, Kate dogs ${kate}`)
  const juliaMutate = julia.slice(1, 3)
  const bothArray = [...juliaMutate, ...kate]
  console.log(bothArray)
  // bothArray.forEach(ele =>console.log(ele))// if we have only one thing that is ele if we want to add indx als then
  bothArray.forEach((ele, indx) => {
    if (ele >= 3) {
      console.log(`Dog number ${indx + 1} is an adult, and is ${ele} years old`)
    } else {
      console.log(`Dog number ${indx + 1} is stilla puppy`)
    }
  })
}

checkDogs(dogsJulia, dogsKate)

const doghumanAge = (age) => {
  const dogtohumanage = age
    .map((curr) => {
      if (curr <= 2) {
        return 2 * curr
      } else {
        return 16 + curr * 4
      }
    })
    .filter((curr) => curr >= 18)

  const averageAge = dogtohumanage.reduce(
    (accu, curr, indx, arr) => accu + curr / arr.length,
    0
  )
  console.log('averageAgeaverageAge', averageAge)
  // console.log("averageAgeaverageAge", averageAge/(dogtohumanage.length))
  // console.log("dogtohumanagedogtohumanage",averageAge,dogtohumanage)
}

doghumanAge([5, 2, 4, 1, 15, 8, 3])
doghumanAge([16, 6, 10, 5, 6, 1, 4])

const doghumanAgeArrow = (age) => {
  const dogtohumanArrow = age
    .map((accu) => (accu <= 2 ? 2 * accu : 16 + accu * 4))
    .filter((accu) => accu >= 18)
    .reduce((accu, curr, index, arr) => accu + curr / arr.length, 0)
  // .filter(accu => accu > 18).reduce((accu, curr, index, arr) => accu + curr/ arr.length);
  console.log('dogtohumanArrowdogtohumanArrow', dogtohumanArrow)
}

doghumanAgeArrow([5, 2, 4, 1, 15, 8, 3])
doghumanAgeArrow([16, 6, 10, 5, 6, 1, 4])

const dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ['Alice', 'Bob'],
  },
  {
    weight: 8,
    curFood: 200,
    owners: ['Matilda'],
  },
  {
    weight: 13,
    curFood: 275,
    owners: ['Sarah', 'John'],
  },
  {
    weight: 32,
    curFood: 340,
    owners: ['Michel'],
  },
]

const recommendFoodAdd = dogs.map((curr) => {
  console.log(curr)
  curr.recommendedFood = Math.trunc(curr.weight ** 0.75 * 28)
  // console.log(curr.owners.includes("Sarah") && curr.curFood > curr.recommendedFood?"larger":"smaller")
  // console.log(curr)
  return curr
})
// console.log(recommendFoodAdd)

const includeOwner = dogs.find((ele) => {
    ele.owners.includes("Sarah");
  console.log(ele.owners.includes("Sarah"))
  return ele;
})
if(includeOwner.weight > includeOwner.recommendedFood){
    console.log("Too much")
}
else{
    console.log("little")
}
console.log(includeOwner)


const muchArray = dogs.filter(ele => ele.curFood > ele.recommendedFood).flatMap(ele => ele.owners);
console.log("muchArraymuchArray", muchArray)

const lessFoodArray = dogs.filter(ele => ele.recommendedFood > ele.curFood).flatMap(ele => ele.owners);
console.log("lessFoodArraylessFoodArray", lessFoodArray);

console.log(`${muchArray.join(" ")}'s dog eat too much food`)
console.log(`${lessFoodArray.join(" ")}'s dog eat too less food`)

const isExcatlySame = dogs.map(ele => {console.log("isExcatlySame", ele)
ele.weight === ele.recommendedFood? true :false}
)

console.log(dogs.some(ele => ele.weight === ele.recommendedFood));

console.log(dogs.some(ele => ele.curFood > ele.curFood * 0.1 && ele.recommendedFood < ele.recommendedFood* 0.1))
console.log(dogs)
const accendingRec = dogs.slice().sort((a,b) => a.recommendedFood - b.recommendedFood)
console.log("accending order",accendingRec)