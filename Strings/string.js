//we can not muttet or change the string they are primitive datatype to do changes we have to strore in variable or some datastructure.
const airline = 'TAP Air Portugal'
const plane = 'A320'

// get a charecter at certain position
console.log(plane.charAt(1)) //3
console.log(plane.charAt(0)) //A

//or
console.log(plane[0]) //A

//directly on the string without variable
console.log('B737'[2]) //3

// find length of the string
console.log('Length of the string plane is', plane.length) //4
console.log('length of the string directly on string', 'B737'.length) //4

//indexof
console.log(airline.indexOf('r')) //6 gives first occurance
console.log(airline.lastIndexOf('r')) //10 gives last occurance if same letter is repeated.
console.log('Index of word', airline.indexOf('Portugal'))

//slice extract the part from string
console.log('Extracting part of string', airline.slice(4)) // Air Portugal extracting from index 4
console.log('extracting from to upto', airline.slice(4, 10)) // Air Po does not include the charecter at index 10. length is 10-4 is 6

//extract first word without mannually giving index number
console.log('extract first word', airline.slice(0, airline.indexOf(' ')))
console.log(airline.slice(-6, -1)) //rtuga
console.log(airline.slice(airline.lastIndexOf(' ') + 1)) // +1 remove space

console.log(airline.slice(-2)) //al
console.log(airline.slice(0, -1)) //TAP Air Portuga

//check middle seat or not

const middleSeat = function (seat) {
  const lastLetter = seat.slice(-1)
  lastLetter === 'B' || lastLetter === 'E'
    ? console.log(seat, ' is Middle Seat')
    : console.log(seat, 'is Corner Seat')
}

middleSeat('11B')
middleSeat('23C')
middleSeat('3E')

//String is primitive datatype but also method are applying methods are only avilable for non-primitive data types,<br/>
//Methods are applying to string becausewhen we call method with string  javscript take the string and covert it into object with same content this object will call the method this process is called boxing.
//when operation is done javascript convert it back to regular primitive

console.log(new String('Jonas')) //{Jonas}
console.log(typeof new String('Jonas')) //object
console.log(typeof new String('Jonas').slice(0), new String('Jonas').slice(0)) //string Jonas

//changing a case of string
console.log('Change to lower case', airline.toLowerCase())
console.log('Change to Uppercase', airline.toUpperCase())
console.log('passenger'.toUpperCase()) //

const passenger = 'joNAS'
const passengerLowerCase = passenger.toLowerCase()
console.log(
  passengerLowerCase.charAt(0).toUpperCase() + passengerLowerCase.slice(1)
) //Jonas

const email = 'hello@jonas.io'
const loginEmail = ' Hello@Jonas.Io \n'

//trim remove the space of string both the side, trimStart and trimEnd
const normalizedEmail = loginEmail.toLowerCase().trim()
console.log('normalizedEmail', normalizedEmail)

if (email === normalizedEmail) {
  console.log('Normal Email')
} else {
  console.log('Email does not match')
}

//replacing
const priceGB = '288.97$'
console.log(priceGB.replace(2, 3).replace(9, 6))

//replace word
const announcement = 'All passengers come to boarding door 23. Boarding door 23'
console.log(announcement.replace('door', 'gate')) // it replce at only first occurence.
console.log(announcement.replaceAll('door', 'gate')) // replce every where in string

//string
airline.toLowerCase()
console.log(airline)

//methods which returns Boolean
const planes = 'A320neo'
console.log(planes.includes('A320')) //true
console.log(planes.includes('a320')) //false

const startEnd = 'All passengers come'
console.log('Start string', startEnd.startsWith('All')) //true
console.log('start With', startEnd.startsWith('all')) //false

console.log('End with', startEnd.endsWith('come')) //true

const checkBaggage = function (item) {
  const checkBaggageToLowerCase = item.toLowerCase()
  if (
    checkBaggageToLowerCase.includes('knief') ||
    checkBaggageToLowerCase.includes('gun')
  ) {
    console.log('not allowed')
  } else {
    console.log('allowed')
  }
}

checkBaggage('I have a loptop, some food and packet knief')
checkBaggage('  ')
checkBaggage('Got some snacks and gus  for protection')

//split
const splitstr = 'a+very+nice+string'
console.log('a+very+nice+string'.split('+')) //["a", "very", "nice", "string"]
console.log('Jonas Schmedtmann'.split(' '))

//destructuring
destructureName = 'Jonas Schmedtmann'
const [firstName, lastName] = destructureName.split(' ')

//join
console.log(firstName, lastName)

const joinedString = ['Mr.', firstName, lastName].join(' ') + '.'
console.log('Joined String', joinedString)

const capitaLizeName = function (name) {
  const splitsName = name.split(' ')
  const toJoinName = []
  for (const n of splitsName) {
    // const capitaLizeName = n[0].toUpperCase() + n.slice(1);
    // toJoinName.push(capitaLizeName);
    toJoinName.push(n.charAt(0).toUpperCase() + n.slice(1))
    //or
    // toJoinName.push(n.replace(n.charAt(0), n.charAt(0).toUpperCase()));
  }
  console.log(toJoinName.join(' '))
}

capitaLizeName('jessica ann smith davis')
capitaLizeName('jonas Schmedtmann')
capitaLizeName('jonas Schmedtmann')

//padding how much we mention the lengh that much length grow with what padding place string we mentioned
const message = 'Go to gate 23!'
console.log(message.padStart(25, '+'), message.padStart(25, '+').length) //+++++++++++Go to gate 23! lengthis 25
console.log(message.padEnd(25, '+'), message.padEnd(25, '+').length) //Go to gate 23!+++++++++++ 25

console.log(
  message.padStart(25, '+').padEnd(30, '+'),
  message.padStart(25, '+').padEnd(30, '+').length
)

//in credit card, complete number is not displayed it is padded
const maskCreditCard = function (number) {
  // const convertToString = String(number);
  const convertToString = number + '' //conver number to string it implicit convert
  const slicedSting = convertToString.slice(-4)
  return slicedSting.padStart(convertToString.length, '*')
}
console.log(maskCreditCard(43378463864647384))
console.log(maskCreditCard('334859493847755774'))
console.log('334859493847755774'.slice(-4))

//repeat
const repeateWord = 'Bad weather... All Departues Delayed...'
console.log('Reate this', repeateWord.repeat(5))

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'
console.log(flights)
const remove_ = flights
  .split('_')
  .join(' ')
  .split(';')
  .join(' ')
  .split('+')
  .join('')
//   const join+ = remove_
console.log(remove_)

//problem1
const underScoreToCamelCase = function (tesxt) {
  const separateText = tesxt.split('_')
  const pushName = []
  console.log('separateTextseparateText', separateText)
  for (const name of separateText) {
    const nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1)
    console.log(nameUpperCase)
    pushName.push(nameUpperCase)
  }
  const joinName = pushName.join('')
  console.log('pushName', joinName[0].toLowerCase() + joinName.slice(1))
}
console.log(underScoreToCamelCase('first_name'))
console.log(underScoreToCamelCase('Some_Variable'))
console.log(underScoreToCamelCase('calculate_Age'))
console.log(underScoreToCamelCase('delayed_departure'))

const textArea = document.querySelector('#textEnter').value
console.log('textAreatextArea', textArea)

document.querySelector('#send_btn').addEventListener('click', function () {
  const textFromTeaxtArea = document.querySelector('#textEnter').value
  const listText = textFromTeaxtArea.split('\n')
  for (const name of listText.entries()) {

    
    const sepateText = name[1].split('_')
    const pushName = []
    for (const separateName of sepateText) {
        const lowerCaseText = separateName.toLowerCase();
      const upperCaseName =
      lowerCaseText[0].toUpperCase() + lowerCaseText.slice(1)
      pushName.push(upperCaseName)
    }
    const joinName = pushName.join('').trimStart();
    console.log('pushNamepushName', joinName[0]?.toLowerCase()+joinName.slice(1).padEnd(30,"*")+"A".repeat(name[0]+1));
    // const trimSpace = joinName.trimStart();
    // console.log('pushNamepushName', trimSpace.indexOf("del"));
  }
})
