import React from "react";
import "./projects.scss";

import Project from "./project";

const Projects = (props) => {
    const { data } = props;

    return (
        <section className="Projects">
            {data.map((project, index) => (
                <Project key={index} data={project} />
            ))}
        </section>
    );
};

export default Projects;
