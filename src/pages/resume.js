import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ResumeSection from "../components/resume";

const Resume = () => (
    <Layout>
        <Seo title="Resume/CV" />
        <h1 className="title">Resume/CV</h1>
        <ResumeSection />
    </Layout>
);

export default Resume;
