// Import Header and Footer into page
let header = document.querySelector("header");
let footer = document.querySelector("footer");

function importHTML(source, destination) {
    fetch(source).then((reponse) => {
        return reponse.text();
    }).then((text) => {
        destination.outerHTML = text;
    });
}

importHTML("/common/navbar.html", header);
importHTML("/common/footer.html", footer);
