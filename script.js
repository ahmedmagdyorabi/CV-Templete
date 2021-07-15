document.getElementsByClassName("contact")[0].addEventListener("mouseover", function () {
    document.getElementById("sound").currentTime = 0;
    document.getElementById("sound").play();
});

document.getElementsByClassName("contact")[0].addEventListener("mouseout", function () {
    document.getElementById("sound").pause();
});