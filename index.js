//----------- For Image1(Player1) Randomiztion ------------------
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage1 = "dice" + randomNumber1 + ".png"; //Dice1.png - Dice6.png

let randomImageSource1 = "images/" + randomDiceImage1; //images/Dice1.png - images/Dice6.png 

let image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src",randomImageSource1);



//----------- For Image2(Player2) Randomiztion ------------------

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //Dice1.png - Dice6.png 
let image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


//---------------- IF PLAYER 1 WINS -------------------
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆Player 1 Wins!";
    document.querySelector("h1").style.color = "green";
}

//---------------- IF PLAYER 2 WINS -------------------

else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🏆Player 2 Wins!";
    document.querySelector("h1").style.color = "green";
}

//---------------- IF BOTH HAVE THE SAME SCORE(DRAW)-------------------
else {
    document.querySelector("h1").innerHTML = "Draw!";
    document.querySelector("h1").style.color = "red";

}
