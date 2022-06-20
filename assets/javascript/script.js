const portfolioButton = document.getElementById("portfolio-shortcut");
const sideButton = document.querySelectorAll(".sidebutton");
console.log(portfolio);

portfolioButton.addEventListener("click", function() {
    document.getElementById("portfolio").scrollIntoView();
    console.log(":sdasd");
})
sideButton[0].addEventListener("click", function() {
    document.getElementById("home").scrollIntoView();
    console.log(":sdasd");
})
sideButton[1].addEventListener("click", function() {
    document.getElementById("about").scrollIntoView();
    console.log(":sdasd");
})
sideButton[2].addEventListener("click", function() {
    document.getElementById("portfolio").scrollIntoView();
    console.log(":sdasd");
})
sideButton[3].addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView();
    console.log(":sdasd");
})
