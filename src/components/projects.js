import React from "react";
import "./projects.scss";

import Project from "./project";

const Projects = (props) => {
    const { data, images } = props;
    return (
        <section className="Projects">
            {data.map((project, index) => (
                <Project
                    key={index}
                    data={project}
                    image={
                        images.find(
                            (image) =>
                                image.node.name ===
                                project.title.replace(/\s|-+/g, "")
                        )?.node
                    }
                    loading={index < 2 ? "eager" : "lazy"}
                />
            ))}
        </section>
    );
};

export default Projects;
