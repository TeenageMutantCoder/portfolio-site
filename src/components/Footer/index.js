import React from "react";
import { Link } from "gatsby";
import "./index.scss";

const Footer = ({ links }) => {
    return (
        <footer>
            {links.map((link) => (
                <Link key={link.name.replace(/\W/g, "")} to={link.path}>
                    {link.name}
                </Link>
            ))}
        </footer>
    );
};

export default Footer;
