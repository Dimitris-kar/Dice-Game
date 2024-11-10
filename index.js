let randomNumber1 = Number(Math.floor((Math.random() * 6) + 1));
let randomNumber2 = Number(Math.floor((Math.random() * 6) + 1));
let header = document.querySelector("h1");

document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNumber2 + ".png");

//Change the Title to Display a Winner

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerText = "It's a Draw!";
}