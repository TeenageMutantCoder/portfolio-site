const parser = new DOMParser();
let projectsDiv = document.getElementById("projects");
let projectTemplate = projectsDiv.querySelector(".project");
let projectTitle = projectTemplate.querySelector(".project__title");
let projectImage = projectTemplate.querySelector(".project__image");
let projectDescription = projectTemplate.querySelector(".project__description");
let projectLink = projectTemplate.querySelector(".project__link");

function addProjects(projects) {
    for (let i = 0; i < projects.length - 1; i++) {
        project = projects[i];
        fillTemplate(project);
        let tempElement = projectTemplate.cloneNode(true);
        projectsDiv.appendChild(tempElement);
    }
}

function fillTemplate(source) {
    const titleText = source.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    const imageText = source.getElementsByTagName("image")[0].childNodes[0].nodeValue;
    const descriptionText = source.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    const linkText = source.getElementsByTagName("link")[0].childNodes[0].nodeValue;

    projectTitle.innerHTML = titleText;
    projectImage.setAttribute("src", imageText);
    projectImage.setAttribute("alt", titleText);
    projectDescription.innerHTML = descriptionText;
    projectLink.setAttribute("href", linkText);
}

fetch("public/projects.xml").then((reponse) => {
    return reponse.text();
}).then((text) => {
    return parser.parseFromString(text, "text/xml");
}).then((xmlDocument) => {
    const projects = xmlDocument.getElementsByTagName("project");
    if (projects) {
        addProjects(projects);
        projectTemplate.remove();
    }
});
