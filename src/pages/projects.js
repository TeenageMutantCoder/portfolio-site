import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ProjectsSection from "../components/projects";

const Projects = () => {
    return (
        <Layout>
            <Seo title="Projects" />
            <h1 className="title">Projects</h1>
            <ProjectsSection eagerLoadingCount="2" />
        </Layout>
    );
};

export default Projects;
