import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ProjectsSection from "../components/projects";

import projectsData from "../data/projects";

const Projects = () => {
    return (
        <Layout>
            <Seo title="Projects" />
            <h1 className="title">Projects</h1>
            <ProjectsSection data={projectsData} />
        </Layout>
    );
};

export default Projects;
