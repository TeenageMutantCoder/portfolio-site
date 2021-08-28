import React from "react";
import Button from "./button";
import "./project.scss";

const Project = (props) => {
    const { data } = props;
    const { title, image, techList, description, links } = data;
    return (
        <div className="Project">
            <h2 className="Project__title">{title}</h2>
            <img
                className="Project__image"
                src={image}
                alt={title}
                width="300"
                height="300"
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
