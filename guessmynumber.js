"use strict";

const message1 = (document.querySelector(".message").textContent =
  " DOM Manipulate");
console.log(message1);

const para = document.querySelector(".p");
// console.log("parapara", para.textContent= "Synchronous and Asynchrounous")
para.textContent = "Synchronous And Asynchronous";
// alert("Text set!")
para.style.color = "green";
document.querySelector("#again").addEventListener("click", function (e) {
  // e.preventDefault();
  console.log("To reset the page", document.querySelector("#again"));
  location.reload();
});
const randomNumber = Math.round(Math.random() * 20);
// const randomNumberShow =
document.querySelector("#randomNumber").textContent = randomNumber;

let scoreNumber = Number(document.querySelector("#score").textContent);

let highScore = Number(document.querySelector("#heighScore").innerHTML);
console.log("HighScore", highScore);
document.querySelector("#check").addEventListener("click", function (e) {
  e.preventDefault();
  const guess = Number(document.querySelector("#numberField").value);
  //   console.log("guess", guess, typeof guess);// always string

  const displayTheMessage = (msg) =>{
    document.querySelector("#startGuess").textContent = msg;

  }

  if (!guess) {
    // document.querySelector("#startGuess").textContent = "No number";
    displayTheMessage("No number");
  } else if (guess !== randomNumber) {
    // if(guess < randomNumber){
    // document.querySelector("#startGuess").textContent =
    displayTheMessage( guess < randomNumber ? "Too lower number entered" : "Too large")
    //   guess < randomNumber ? "Too lower number entered" : "Too large";
    // }
    // else{
    // document.querySelector("#startGuess").textContent = "Too Higher"
    // }
    scoreNumber--;
    document.querySelector("#score").textContent = scoreNumber;
  }

  //   else if (guess < randomNumber) {
  //     if (scoreNumber > 1) {
  //       document.querySelector("#startGuess").textContent = "Too low entered";
  //       scoreNumber--;
  //       document.querySelector("#score").textContent = scoreNumber;
  //     }

  //     else {
  //       document.querySelector("#startGuess").textContent = "You loss the game";
  //       document.querySelector("#score").textContent = 0;
  //     }
  //   }

  //   else if (guess > randomNumber) {
  //     if (scoreNumber > 1) {
  //       document.querySelector("#startGuess").textContent = "Too Heigh entere";

  //       scoreNumber--;
  //       document.querySelector("#score").textContent = scoreNumber;
  //     } else {
  //       document.querySelector("#startGuess").textContent = "You loss the game";
  //       document.querySelector("#score").textContent = 0;
  //     }
  //   }
  else if (guess === randomNumber) {
    // document.querySelector("#startGuess").textContent = "Correct Number";
displayTheMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector("#heighScore").innerHTML = highScore;
    }
    // scoreNumber+1
    // document.querySelector("#score").textContent
  } else {
    // document.querySelector("#startGuess").textContent = "Start guessing";
    displayTheMessage("Start guessing");
  }
});
