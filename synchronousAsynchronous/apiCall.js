'use strict'

const btn = document.querySelector('#btn-country')
console.log(btn)
const countriesSelected = document.querySelector('#countries')
console.log(countriesSelected)
const getCountryData = (country) =>{

const request = new XMLHttpRequest()
request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
request.send()

console.log(request.responseText)


request.addEventListener('load', function () {
  // console.log(this.responseText)
  //convert JSON to actual javascript data
let  [data] = JSON.parse(this.responseText)
  console.log(data)
  data && console.log('datadata', data)
  const html = `<article class="country>
<img class="country__img" src="${data.flags.svg}"/>
<div class="country__data>
<div class="country__name">${data.name.common}</div>

<div class="country__region>${data.region}</div>

<p class="country__row">${data.population}</p>
<p class="country__row">${data.languages.por}</p>
<p class="country__row">${data.currencies.EUR.name}</p>
</div>

</article>`
  const toInsert = document.querySelector('#countries')
  toInsert.insertAdjacentHTML('afterbegin', html)
})
}

//JSON.parse():
const jsonParse = '{"name": "John", "age": 30}'
const data1 = JSON.parse(jsonParse)
console.log(data1) // Output: { name: 'John', age: 30 }

//JSON.stringify():
const data2 = { name: 'John', age: 30 }
const jsonString = JSON.stringify(data2)
console.log(jsonString) // Output: '{"name":"John","age":30}'

getCountryData("portugal")
// getCountryData("usa")

//this is traditional
// const request = new XMLHttpRequest()
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
// request.send()

//now
const request = fetch("https://restcountries.com/v3.1/name/portugal")
console.log("requestrequestFetch",request)//return promises

//initially promise is in pending state after in settled in settled whether in success or rejet state           

fetch("https://restcountries.com/v3.1/name/portuga").then(response => console.log("response", response))//data will not displaying.
fetch("https://restcountries.com/v3.1/name/portuga").then(response => response.json()).then(data => console.log("datadata", data))