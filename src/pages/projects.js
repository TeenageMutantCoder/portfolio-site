import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ProjectsSection from "../components/projects";

import projectsData from "../data/projects";

const Projects = ({ data }) => {
    return (
        <Layout>
            <Seo title="Projects" />
            <h1 className="title">Projects</h1>
            <ProjectsSection data={projectsData} images={data.allFile.edges} />
        </Layout>
    );
};

export const projectImagesQuery = graphql`
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
`;

export default Projects;
