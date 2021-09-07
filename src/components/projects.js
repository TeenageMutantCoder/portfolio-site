import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Project from "./project";
import "./projects.scss";
import projectsData from "../data/projects";

const Projects = (props) => {
    const { count, eagerLoadingCount = 0, heading = "h2" } = props;
    const imageQueryData = useStaticQuery(graphql`
        query ProjectImagesQuery {
            allFile(filter: { relativeDirectory: { eq: "projects" } }) {
                edges {
                    node {
                        name
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);
    const images = imageQueryData.allFile.edges;

    return (
        <section className="Projects">
            {projectsData
                .slice(0, count ? count : projectsData.length)
                .map((project, index) => (
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
                        loading={index < eagerLoadingCount ? "eager" : "lazy"}
                        heading={heading}
                    />
                ))}
        </section>
    );
};

export default Projects;
