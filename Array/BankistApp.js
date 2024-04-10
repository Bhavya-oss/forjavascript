//data
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

// Elements
const labelWelcome = document.querySelector('.welcome')
const labelDate = document.querySelector('.date')
const labelBalance = document.querySelector('.balance__value')
const labelSumIn = document.querySelector('.summary__value--in')
const labelSumOut = document.querySelector('.summary__value--out')
const labelSumInterest = document.querySelector('.summary__value--interest')
const labelTimer = document.querySelector('.timer')

const containerApp = document.querySelector('.app')
const containerMovements = document.querySelector('.movements')

const btnLogin = document.querySelector('.login__btn')
const btnTransfer = document.querySelector('.form__btn--transfer')
const btnLoan = document.querySelector('.form__btn--loan')
const btnClose = document.querySelector('.form__btn--close')
const btnSort = document.querySelector('.btn--sort')

const inputLoginUsername = document.querySelector('.login__input--user')
const inputLoginPin = document.querySelector('.login__input--pin')
const inputTransferTo = document.querySelector('.form__input--to')
const inputTransferAmount = document.querySelector('.form__input--amount')
const inputLoanAmount = document.querySelector('.form__input--loan-amount')
const inputCloseUsername = document.querySelector('.form__input--user')
const inputClosePin = document.querySelector('.form__input--pin')

/* *********************************************************** */
//insert the html to specified position insertAdjacentHTML()
const displayMovements = function (movemet, isSorted = false) {
  containerMovements.innerHTML = ''
  //   console.log("isSortedisSortedisSorted",movemet)

  let movSort = isSorted ? movemet.slice().sort((a, b) => a - b) : movemet
  console.log('isSortedisSortedisSorted check ****', movSort)

  movSort.forEach((ele, indx) => {
    const type = ele > 0 ? 'deposit' : 'withdrawal'
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      indx + 1
    } ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${ele}</div>
</div>`
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

// displayMovements(account1.movements)
/* ************************************************************* */
// let storeAbbriv = [];

// const userNameAbbrivation = (name) =>{
//     firstLetterName = name.split(" ");
//    firstLetterName.forEach(ele => storeAbbriv.push(ele.charAt(0)))
// }
// console.log("namename",storeAbbriv.join(""))
// userNameAbbrivation("Steven Thomas Williams")

const updateUI = function () {
  //display movements

  displayMovements(userNameFound.movements)

  //display balance
  totalBalance(userNameFound)

  //display deposit, withdrawal and intrest(summary)
  calcDisplaySummary(userNameFound)
}

const createUserName = (user) => {
  console.log('useruser', user)
  user.forEach((account) => {
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map((ele) => {
        return ele.charAt(0)
        // console.log("element", ele[0])
      })
      .join('')
  })
} //no need to return we are not creating new array we are modifying creating anothe key value (userName)

createUserName(accounts)

console.log('userName', accounts)

/* *************************************** */
const totalBalance = function (account) {
  console.log('movementsmovements', account)
  account.balance = account.movements.reduce((accu, curr, indx) => {
    return accu + curr
    // if(accu > curr){
    //   return accu;
    // }
    // else{
    //   return  curr
    // }
  }, account.movements[0]) //if we put 0 then it will effect check max and min value so now putting movements[0].
  //   console.log('balancebalance', balance)
  labelBalance.textContent = `${account.balance} EUR`
}

// const balance = totalBalance([200, 450, -400, 3000, -650, -130, 70, 1300])
// labelBalance.textContent = `${balance} EUR`
console.log('balancebalance', totalBalance)
/* ******************************************* */

//chaining methods()
//do not use more chaining method() it effect the performence and also it is bad practice in javascript to mutate the original array (with splice and reverse) so do not chain the method with splice and reverse
const eurotousd = 1.1
const totalDepositsUSD = (movement) => {
  console.log('movementmovement', movement)
  console.log(
    movement
      .filter((ele) => ele > 0)
      .map((ele) => ele * eurotousd)
      .reduce((accu, curr) => accu + curr, 0)
  )
}
totalDepositsUSD(account2.movements)

//summary
const calcDisplaySummary = function (ele) {
  const totalDeposit = ele.movements
    .filter((element) => element > 0)
    .reduce((accu, curr) => accu + curr, 0)
  const totalWithdrawel = ele.movements
    .filter((element) => element < 0)
    .reduce((accu, curr) => accu + curr, 0)
  const totalIntrest = ele.movements
    .filter((element) => element > 0)
    .map((element) => element * (ele.interestRate / 100))
    .filter((element) => element >= 1)
    .reduce((accu, curr) => accu + curr, 0)

  console.log('totalDeposit', totalIntrest)
  labelSumIn.textContent = totalDeposit
  labelSumOut.textContent = `${Math.abs(totalWithdrawel)}`
  labelSumInterest.textContent = `${totalIntrest}`
}
// calcDisplaySummary(account1.movements)

console.log('inputLoginUsername', inputLoginUsername.value)

let userNameFound
btnLogin.addEventListener('click', function (e) {
  e.preventDefault()
  userNameFound = accounts.find(
    (ele) => ele.userName === inputLoginUsername.value
  )
  console.log(
    'userNameFounduserNameFound',
    userNameFound,
    userNameFound?.pin,
    Number(inputLoginPin.value)
  )
  if (userNameFound?.pin === Number(inputLoginPin.value)) {
    //display ui and welcome message
    containerApp.style.opacity = 1
    labelWelcome.textContent = 'WelCome'

    inputLoginUsername.value = ''
    inputLoginPin.value = ''
    updateUI()
  }
})
console.log('totalBalancetotalBalance', totalBalance)
console.log(btnTransfer)
const transferAmount = () => {
  btnTransfer.addEventListener('click', function (e) {
    e.preventDefault()
    const transferToAmount = accounts.find(
      (ele) => ele.userName === inputTransferTo.value
    )

    const transferAmount = Number(inputTransferAmount.value)
    if (
      transferAmount > 0 &&
      userNameFound.balance >= transferAmount &&
      transferToAmount.userName !== userNameFound.userName
    ) {
      userNameFound.movements.push(-transferAmount)

      updateUI()
      console.log('userNameFounduserNameFound', userNameFound.movements)
      transferToAmount?.movements.push(transferAmount)
    }

    console.log(
      'transferTOAmounttransferTOAmount',
      transferToAmount,
      transferAmount
    )
  })
}
transferAmount()

//request loan
const loanSanction = () => {
  btnLoan.addEventListener('click', function (e) {
    e.preventDefault() // Prevent default form submission behavior
    const amount = Number(inputLoanAmount.value)
    if (
      amount > 0 &&
      userNameFound.movements.some((ele) => ele > (amount * 1) / 10)
    ) {
      // checking atleast any one deposit amount greater than the loan amount requestion 10%.
      console.log(
        'LoanLoanLoanLoanLoanLoanLoanLoanLoanLoanLoanLoanLoanLoanLoanLoan'
      )
      userNameFound.movements.push(amount)

      updateUI()
    }
  })
}
loanSanction()

//Delete an account

//indexOf is find the index of element in array but findIndex find the index number for complex
const closeAccount = () => {
  btnClose.addEventListener('click', function (e) {
    e.preventDefault()
    const inputPin = inputClosePin.value
    console.log('inputUserNameinputUserName', typeof inputPin)
    if (
      inputCloseUsername.value === userNameFound?.userName &&
      Number(inputClosePin.value) === userNameFound.pin
    ) {
      console.log('inputCloseUsernameinputCloseUsername', inputCloseUsername)

      const index = accounts.findIndex(
        (ele) => ele.userName === userNameFound?.userName
      )
      //delete account
      accounts.splice(index, 1)

      //hide ui
      containerApp.style.opacity = 0
      labelWelcome.textContent = 'Account deleted'
    }

    checkCridential = console.log('closeAccount')
  })
}

closeAccount()
let isSorted = false

//sort the movements
btnSort.addEventListener('click', function (e) {
  e.preventDefault()
  console.log('isSortedisSortedisSorted', isSorted)
  isSorted = !isSorted
  displayMovements(userNameFound.movements, isSorted)
  //   isSorted = !isSorted;//uncomment it and comment above same code check the difference

  //   console.log('beforeSortbeforeSort', beforeSort)
  // beforeSort.sort((a,b)=> b-a);
  //   updateUI()
})

let array = [
  { name: 'Sindhu', id: '473863' },
  { name: 'Prajwal', id: '587394' },
]

// Function to find the index based on the name
function findIndexByName(name) {
  return array.findIndex((element) => element.name === name)
}

// Example: Find index of element with name "Prajwal"
const index = findIndexByName('Sindhu')

console.log(index) // Output: 1


//movements nodelist to array by Array.from
const movementElements = document.querySelectorAll('.movements__value')
console.log('movementElements', movementElements.value)
labelBalance.addEventListener('click', function () {
  const movementElements = document.querySelectorAll('.movements__value')
  //nodelist
  console.log(movementElements)
  console.log('movementElements', movementElements.constructor)

  const movMapElements = Array.from(document.querySelectorAll('.movements__value'), (mov,indx) => 
  // console.log(mov.innerHTML, indx);
  mov.innerHTML
  )
  console.log(movMapElements)
})

//movements nodelist to array by spreading
const spreadMovElements = [...movementElements];

console.log("movementElementsmovementElements",spreadMovElements)


