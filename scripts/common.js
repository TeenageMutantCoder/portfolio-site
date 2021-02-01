// To import header and footer into page
let header = document.querySelector("header");
let footer = document.querySelector("footer");

function importHTML(source, destination) {
    fetch(source).then((reponse) => {
        return reponse.text();
    }).then((text) => {
        destination.outerHTML = text;
    });
}

importHTML("/common/header.html", header);
importHTML("/common/footer.html", footer);

// To allow to open and close navbar menu
let hamburger = document.getElementById("#header__hamburger");
let menu = document.getElementById("#header__menu");

function addCollapsibleMenu(button, menu) {
    button.addEventListener("click", () => {
        if ("open" in menu.classList) {
            menu.classList.remove("open");
        } else {
            menu.classList.add("open");
        }
    });
}

addCollapsibleMenu(hamburger, menu);