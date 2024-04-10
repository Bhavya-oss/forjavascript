const movements=[200, 450, -400, 3000, -650, -130, 70, 1300]

//include() and some() both are same but includes() used only for value but some() for condition
//includes() and some() both return true or false
let checkExit=  movements.includes(450);

console.log("checkExit",checkExit)

// let checkSomeExist = movements.some(mov => mov>1400)
let checkSomeExist = movements.some(mov => mov>0)//true

console.log(checkSomeExist)

//every() also same as some() but some() return true if any one element satisfy the condition in array
// every() should satisfy every element in the array then returns true
console.log(movements.every(mov => mov > 0));//false

//separate callBack define function once and call many times
const deposit = mov => mov>0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


//flat and flatMap
//remove the nested of array and gives the flat array
const array1 = [[1,2,3],[4,5,6],7,8];
console.log(array1.flat())//[1,2,3,4,5,6,7,8]

const array2 = [[[1,2],3],[4,[5,6]]];
console.log(array2.flat());// it will not flat the inside array it give nested only inside array(one level depth) so do it by depth mentioning
//[[1,2],3,4,[5,6]]
console.log(array2.flat(1))//[[1,2],3,4,[5,6]]
console.log(array2.flat(2));//[1, 2, 3, 4, 5, 6]


const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
  }
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, 790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  }
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  }
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90, -130, 70, 1300],
    interestRate: 1,
    pin: 4444,
  }
  
  const accounts = [account1, account2, account3, account4]
  console.log("accountsaccounts",accounts)

  let accountMovements = accounts.map(mov => mov.movements)
console.log(accountMovements);
console.log(accountMovements.flat());


//flatMap() work only one level deep we can not change like flat() depth
 accountMovements = accounts.flatMap(acc => acc.movements)//here flatMap() working same as map()

 console.log("accountMovements",accountMovements);