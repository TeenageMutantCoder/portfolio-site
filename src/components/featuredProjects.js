import React from "react";

import { Link } from "gatsby";
import Projects from "../components/projects";
import "../components/button.scss";
import "./featuredProjects.scss";

const FeaturedProjects = (props) => {
    const { count = 3 } = props;

    return (
        <section className="FeaturedProjects">
            <h2>Featured Projects</h2>
            <Projects count={count} heading="h3" />
            <Link className="Button" to="/projects/">
                See more
            </Link>
        </section>
    );
};

export default FeaturedProjects;
