//map() method also similar to forEach but map() produce new array

//map()
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurTousd = 1.1;

let movementsUSD = movements.map( function(element){
    return element*eurTousd;
});

console.log("movementsUSD", movementsUSD);

//if we want to create same array movementsUSD by for of

const eurTousdfor = [];
for (const element of movements){
    eurTousdfor.push(element*eurTousd);
}
console.log("eurTousdforeurTousdfor",eurTousdfor);

// movementsUSD = movements.map((ele)=> ele*eurTousd
// movementsUSD = movements.map(ele => ele*eurTousd);//one line code
movementsUSD = movements.map((ele) =>{
    return ele*eurTousd;
})
     

console.log("movementsUSD", movementsUSD);

//filter()
const filterArray=movements.filter(function(ele){
return ele>0;
})
console.log("filterArrayfilterArray", filterArray)

const filterArrayFor = []
for (const movement of movements){
    if(movement > 0)
filterArrayFor.push(movement);
}

console.log("filterArrayForfilterArrayFor", filterArrayFor);

const filterWithdrawals = movements.filter(function(ele, indx){
// console.log(ele, indx);
return ele<0;
})

console.log("filterWithdrawals",filterWithdrawals);

const filterWithdrawalFor = [];
for (const element of movements)if(element<0)filterWithdrawalFor.push(element)
console.log("filterWithdrawalFor", filterWithdrawalFor);

//reduce()

// const reduceFromArray = movements.reduce(function(acc, cur, indx, array){//accumulator, current value, index, array
//     // console.log("movementsmovements",movements, acc, cur, indx, array)
//     return acc+cur;
// })

//arrow function
const reduceFromArray = movements.reduce((acc,cur) => acc+cur);
console.log("reduceFromArrayreduceFromArray", reduceFromArray);


const accumulatorInitialize = movements.reduce(function(acc, cur, indx, array){
console.log(`Accumulator value in the index ${indx} is ${acc}`)
return acc+cur;
}, 0)//if we initialize 0 here then accumulater in first itteration hold 0 otherwise first value of the array.
//if we mention 100 then first value index value will 100 and if we not mention anything then index 0 will not be there.

let sum = 0;
for( const element of movements){
    sum += element;
}



console.log(`sum is `, sum);