import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../Button";
import "./index.scss";

const Project = (props) => {
    const { data, image, loading, heading = "h2" } = props;
    const { title, techList, description, links } = data;
    const projectTitle = React.createElement(
        heading,
        { className: "Project__title" },
        title
    );
    const projectImage = getImage(image);
    return (
        <div className="Project">
            {projectTitle}
            <GatsbyImage
                className="Project__image"
                loading={loading}
                image={projectImage}
                objectFit="contain"
                alt={title}
            />

            <p className="Project__tech-list">Skills used: {techList}</p>
            <p className="Project__description">{description}</p>
            <div className="Project__links">
                <Button
                    type="link"
                    text="Repository"
                    href={links.repo || "#"}
                    rel="noopener noreferrer"
                    target="_blank"
                />
                <Button
                    type="link"
                    text="Live App"
                    href={links.website || "#"}
                    rel="noopener noreferrer"
                    target="_blank"
                />
            </div>
        </div>
    );
};

export default Project;
