const num = 35
console.log(typeof num)

setTimeout(() => console.log('Here is display you pizza'), 3000)

//passing a argument to setTimeout()
//pass argument after the delay
//setTimeout exicute onece
setTimeout(
  (ingridient1, ingridient2) => console.log(ingridient1, ingridient2),
  3000,
  'olive',
  'spinach'
)

//cancel the timer untill delay passed
const ingridience = ['olive', 'spinach']

const pizzaTimer = setTimeout(
  (ingridient1, ingridient2) => {
    console.log(`pizza some ingridience are ${ingridient1} and ${ingridient2} `)
  },
  3000,
  ...ingridience
)

if(ingridience.includes("spinach")){
    clearTimeout(pizzaTimer);
}

//setInterval
//setInterval exicute over and over again
setInterval(function(){
  const now =  new Date()
  console.log(now ,"Date")// every second exicute
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 1000);




