import React from "react";
import { Link } from "gatsby";

import Hamburger from "../Hamburger";
import ThemeToggle from "../ThemeToggle";
import "./index.scss";

const Header = ({ links }) => {
    return (
        <header>
            <ThemeToggle />
            <Hamburger />
            <nav>
                {links.map((link) => (
                    <Link
                        key={link.name.replace(/\W/g, "")}
                        to={link.path}
                        activeClassName="active"
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;
