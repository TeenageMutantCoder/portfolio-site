import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import TextSection from "../components/textSection";
import ImageSection from "../components/imageSection";

import sections from "../data/index";

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Hero />
        <TextSection data={sections.aboutMe} />
        <TextSection data={sections.skills} />
        <ImageSection data={sections.skillsIcons} />
    </Layout>
);

export default IndexPage;
