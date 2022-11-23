var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomNumber2 = Math.floor(Math.random()*6)+1;

var r1 = randomNumber1.toString();
var r2 = randomNumber2.toString();

var newImg1 = "images/dice" + r1 + ".png";
var newImg2 = "images/dice" + r2 + ".png";

document.querySelector(".img1").setAttribute("src", newImg1);
document.querySelector(".img2").setAttribute("src", newImg2);


if(r1 > r2){
	document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(r1 < r2){
	document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else {
	document.querySelector("h1").innerHTML = "Draw!";
}
