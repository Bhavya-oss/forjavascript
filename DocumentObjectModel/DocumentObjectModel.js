const upperDiv = document.querySelector('#upper')
console.log(upperDiv)
const middleDiv = document.querySelector('#middle')
console.log(middleDiv)
const innerDiv = document.querySelector('#inner')
console.log(innerDiv)
/********* by default event bubbling **********/
// upperDiv.addEventListener("click", function(){
//     console.log("Upper div is clicked buuling event")
// })

// middleDiv.addEventListener("click",function(){
//     console.log("Middle div is clicked buuling event");
// })

// innerDiv.addEventListener("click", function(){
//     console.log("Inner div is clicked buuling event")
// })
/*************************************************/
/********* if we set third parameter false then event bubbling **********/

// upperDiv.addEventListener("click", function(){
//     console.log("Upper div is clicked buuling event")
// }, false)

// middleDiv.addEventListener("click",function(){
//     console.log("Middle div is clicked buuling event");
// }, false)

// innerDiv.addEventListener("click", function(){
//     console.log("Inner div is clicked buuling event")
// }, false)
/*************************************************/

/********* if we set third parameter true then event capturing **********/

upperDiv.addEventListener(
  'click',
  function () {
    console.log('Upper div is clicked trickling event')
  },
  true
)

middleDiv.addEventListener(
  'click',
  function () {
    console.log('Middle div is clicked trickling event')
  },
  true
)

innerDiv.addEventListener(
  'click',
  function () {
    console.log('Inner div is clicked trickling event')
  },
  true
)

/*************************************************/

/******************Event Delegation******************/
document.querySelector('#category').addEventListener('click', function (event) {
  console.log('eventevent', event.target.id)
  if (event.target.tagName === 'li')
    window.location.href = '/' + event.target.id //localhost:8080/laptop
})


document.querySelector("#form").addEventListener("keyup", function(e){
console.log(e.target.dataset.uppercase !== undefined)
if(e.target.dataset.uppercase !== undefined)
        e.target.value = e.target.value.toUpperCase();
})
/***************************************************/
