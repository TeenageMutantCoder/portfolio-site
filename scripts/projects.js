let projectsDiv = document.getElementById("projects");
let projectTemplate = projectsDiv.querySelector(".project");
let projectTitle = projectTemplate.querySelector(".project__title");
let projectImage = projectTemplate.querySelector(".project__image");
let projectDescription = projectTemplate.querySelector(".project__description");
let projectLink = projectTemplate.querySelector(".project__link");

function addProjects(projects) {
    for (let i = 0; i < projects.length; i++) {
        project = projects[i];
        fillTemplate(project);
        let tempElement = projectTemplate.cloneNode(true);
        projectsDiv.appendChild(tempElement);
    }
}

function fillTemplate(source) {
    const titleText = source.title;
    const imageText = source.image ? source.image : "#";
    const descriptionText = source.description;
    const linkText = source.link

    projectTitle.innerHTML = titleText;
    projectImage.setAttribute("src", imageText);
    projectImage.setAttribute("alt", titleText);
    projectDescription.innerHTML = descriptionText;
    projectLink.setAttribute("href", linkText);
}

fetch("/projects.json").then((reponse) => {
    return reponse.json();
}).then((json) => {
    const projects = json.projects;
    if (projects) {
        addProjects(projects);
        projectTemplate.remove();
    }
});
