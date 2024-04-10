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

// const totalDeposit = accounts.map((acc, indx, array ) => {
//     const array2 = acc.movements.reduce((accu, curr, indx, array) => accu+curr)
// },

// );

// const totalDeposite = accounts.map(curr => curr.movements).flat();// both map() and flat() can do by flatMap()

const totalDeposite = accounts
  .flatMap((curr) => curr.movements)
  .filter((curr) => curr > 5000)

// const minBalance = accounts.movements.reduce((ele) => ele.movements)
const array3 = accounts
  .flatMap((ele) => ele.movements)
  .filter((ele) => ele >= 1000).length
console.log('totalDeposittotalDeposit', array3)

//or
const array4 = accounts
  .flatMap((ele) => ele.movements)
  .reduce((count, curr) => (curr > 1000 ? ++count : count), 1) //post increment is not working giving 0
console.log(array4)

//return object from reduce
const sumObject = accounts
  .flatMap((ele) => ele.movements)
  .reduce(
    (accu, curr) => {
      curr > 0 ? (accu.deposite += curr) : (accu.withdrawal += curr)
      return accu
    },
    { deposite: 0, withdrawal: 0 }
  )
console.log(sumObject)

//destructur immidietly
const { deposite, withdrawal } = accounts
  .flatMap((ele) => ele.movements)
  .reduce(
    (accu, curr) => {
      //     curr > 0?accu.deposite += curr: accu.withdrawal += curr
      //  return accu;
      accu[curr > 0 ? 'deposite' : 'withdrawal'] += curr
      return accu
    },
    { deposite: 0, withdrawal: 0 }
  )
console.log('depositedeposite', deposite, withdrawal)

const accumilater = {
  deposite: 1000,
  withdrawal: 500,
}

accumilater['total'] = 5000
console.log(accumilater[deposite]) // Output: 1000
console.log(accumilater.deposite)
console.log(accumilater)
console.log(accumilater['total'])

//return array from reduce
const sumArray = accounts
  .flatMap((curr) => curr.movements)
  .reduce(
    (accu, curr, indx, array) => {
      console.log(accu[0])
      accu[curr > 0 ? 0 : 1] += curr
      // curr > 0 ? accu[0] += curr : accu[1] += curr;

      // curr > 0 ? accu[0] + curr : accu[1] + curr;// not work
      return accu
    },
    [0, 0]
  )
console.log(sumArray)

//This is a Nice Title.
const sentenceConv = (sen) => {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with']

  console.log(sen)
  console.log(sen.toLowerCase())
  const splitedSen = sen.toLowerCase().split(' ')
  const firstCap = splitedSen.map((curr) => {
    console.log( exceptions.includes(curr))
    const operationDone = exceptions.includes(curr) ? curr : curr[0].toUpperCase() + curr.slice(1)
    return operationDone;
  })
  console.log(firstCap.join(" "))
}

sentenceConv('This is a Nice Title')
