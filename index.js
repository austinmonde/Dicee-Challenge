var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png 

var image1 = document.querySelectorAll("img")[0] //image/dice1/png - image/dice6.png

image1.setAttribute("src", randomDiceImage); // image attribute gets replaced

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1]

image2.setAttribute("src", randomDiceImage1);

//if player one wins h1 attribute  is changed to "Refresh me" is replaced with "🚩Player1 wins" and vice versa
// if the dice roll is even, replace with "Draw"

if (randomDiceImage > randomDiceImage1) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
}else if(randomDiceImage < randomDiceImage1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
}else if(randomDiceImage == randomDiceImage1) {
    document.querySelector("h1").innerHTML = "Draw!"
}