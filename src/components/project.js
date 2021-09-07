import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "./button";
import "./project.scss";

const Project = (props) => {
    const { data, image, loading } = props;
    const { title, techList, description, links } = data;
    const projectImage = getImage(image);
    return (
        <div className="Project">
            <h2 className="Project__title">{title}</h2>
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
