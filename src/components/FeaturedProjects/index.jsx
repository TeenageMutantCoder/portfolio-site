import React from "react";

import { Link } from "gatsby";
import Projects from "../Projects";
import "../Button";
import "./index.scss";

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
