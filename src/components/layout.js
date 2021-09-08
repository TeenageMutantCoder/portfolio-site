import React from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import "./layout.scss";

const Layout = ({ children }) => {
    const links = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects/" },
        { name: "Resume/CV", path: "/resume/" },
        { name: "Contact", path: "/contact/" },
    ];

    return (
        <>
            <Header links={links} />
            <main>{children}</main>
            <Footer links={links} />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
