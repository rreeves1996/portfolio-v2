const portfolioButton = document.getElementById("portfolio-shortcut");
const sideButton = document.querySelectorAll(".sidebutton");
const pages = [
    home = document.getElementById("home"),
    about = document.getElementById("about"),
    portfolio = document.getElementById("portfolio"),
    contact = document.getElementById("contact")];

portfolioButton.addEventListener("click", function() {
    portfolio.scrollIntoView();
});
for (let i = 0; i < pages.length; i++) {
    sideButton[i].addEventListener("click", function() {
        pages[i].scrollIntoView();
    });
}