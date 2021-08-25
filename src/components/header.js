import React from "react";
import { Link } from "gatsby";
import Hamburger from "./hamburger";
import "./header.scss";

const Header = () => {
    return (
        <header>
            <Hamburger />
            <nav>
                <Link to="/" activeClassName="active">
                    Home
                </Link>
                <Link to="/projects" activeClassName="active">
                    Projects
                </Link>
                <Link to="/resume" activeClassName="active">
                    Resume/CV
                </Link>
                <Link to="/contact" activeClassName="active">
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;
