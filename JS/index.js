"use strict"

const img = document.querySelector(".img-box");

function changeBorder() {
    img.style.boxShadow = "1px 1px 35px white";
}

function notification() {
    alert("Hi there, this is a simple portfolio just for practice, at this time i started" +
        " working on my main portfolio with more features, where i also will use " +
        "React, React-Router, Redux, JS, CSS, HTMl  and so on..." +
        "if you wanna to give me feedback or just ask something, please fill free to contact with me, i will be happy for that" +
        "see you soon ;)");
}

img.addEventListener("mouseover", changeBorder);
img.addEventListener("mouseout", () => img.style.boxShadow = "");
img.addEventListener("click", notification);