import React from "react";
import { Link } from "gatsby";
import "./footer.scss";

const Footer = () => {
    return (
        <footer>
            <Link to="/">Home</Link>
            <Link to="/projects/">Projects</Link>
            <Link to="/resume/">Resume/CV</Link>
            <Link to="/contact/">Contact</Link>
        </footer>
    );
};

export default Footer;
