import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import TextSection from "../components/TextSection";
import ImageSection from "../components/ImageSection";
import FeaturedProjects from "../components/FeaturedProjects";

import sections from "../data/index";

const IndexPage = () => (
    <Layout>
        <Seo title="Home" />
        <Hero />
        <TextSection data={sections.aboutMe} />
        <TextSection data={sections.skills} />
        <ImageSection data={sections.skillsIcons} />
        <FeaturedProjects />
    </Layout>
);

export default IndexPage;
