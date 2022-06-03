"use strict"

const img = document.querySelector(".img-box");

function changeBorder() {
    img.style.boxShadow = "1px 1px 35px white";
}

function notification() {
    alert("Hi there, here will be more logic using JavaScript soon...");
}

img.addEventListener("mouseover", changeBorder);
img.addEventListener("mouseout", () => img.style.boxShadow = "");
img.addEventListener("click", notification);