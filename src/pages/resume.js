import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ResumeSection from "../components/Resume";

const ResumePage = () => (
    <Layout>
        <Seo title="Resume/CV" />
        <h1 className="title">Resume/CV</h1>
        <ResumeSection />
    </Layout>
);

export default ResumePage;
