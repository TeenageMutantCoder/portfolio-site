let header = document.querySelector("header");
let footer = document.querySelector("footer");

// Replaces HTML with information from external HTML file
function importHTML(sourcePath, destination) {
    fetch(sourcePath).then((reponse) => {
        return reponse.text();
    }).then((text) => {
        destination.outerHTML = text;
    });
}

importHTML("/common/header.html", header);
importHTML("/common/footer.html", footer);