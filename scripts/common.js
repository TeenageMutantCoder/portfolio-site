let header = document.querySelector("header");
let footer = document.querySelector("footer");

// Replaces HTML element with information from external HTML file
function importHTML(sourcePath, destination) {
    fetch(sourcePath).then((reponse) => {
        return reponse.text();
    }).then((text) => {
        destination.outerHTML = text;
    });
}

importHTML("/common/header.html", header);
importHTML("/common/footer.html", footer);

// Closes mobile menu if user clicks outside of mobile menu
document.addEventListener("pointerup", (e) => {
    if (e.target.id === "header__menu" || e.target.id === "header__hamburger" || 
        e.target.parentElement?.id === "header__menu" || e.target.parentElement?.id === "header__hamburger" ||
        e.target.parentElement?.parentElement?.id === "header__menu") return;
    const menuToggle = document.querySelector("input#menu-toggle");
    if (menuToggle.checked) {
        menuToggle.checked = false;
    }
});