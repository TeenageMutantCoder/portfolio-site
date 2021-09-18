import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ProjectsSection from "../components/Projects";

const ProjectsPage = () => {
    return (
        <Layout>
            <Seo title="Projects" />
            <h1 className="title">Projects</h1>
            <ProjectsSection eagerLoadingCount="2" />
        </Layout>
    );
};

export default ProjectsPage;
