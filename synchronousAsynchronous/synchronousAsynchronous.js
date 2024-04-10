// const asynchPara = document.querySelector('h1')
// setTimeout(() => {
//   console.log('Text Style!');
//   asynchPara.textContent = "Exicute in background"
// }, 3000);
// asynchPara.style.color = "blue";

// const para = document.querySelector('p')
// para.textContent = 'Synchronous Javascript'
// alert('Text style!') //alert button block the code exicution untill we click the okay button.
// para.style.color = 'green'

// console.log(para)

console.log(
  (document.querySelector('#beforeAdd').textContent =
    'Before Add event listener')
)
const buttonId = document.getElementById('clickButton')
buttonId.addEventListener('click', function () {
  const heading4 = document.querySelector('#addEvent')
  heading4.textContent = 'Inside Addevent listener'
})
console.log(document.querySelector("#afterAdd").textContent = "After AddEventListner");
//note:- setTimeout() is callback function it making code as asynchronous, map(), reduce() are all also callback function but those are not asynchrounos
//callBack function alone does not make code as asynchronous
