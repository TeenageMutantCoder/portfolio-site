import React, { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";

import Header from "./header";
import Footer from "./footer";
import "./layout.scss";
import { gsap } from "gsap";

const Layout = ({ children }) => {
    const links = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects/" },
        { name: "Resume/CV", path: "/resume/" },
        { name: "Contact", path: "/contact/" },
    ];
    const mainRef = useRef();
    // Adds simple animation on page load
    useLayoutEffect(() => {
        gsap.from(mainRef.current, {
            opacity: 0.3,
            y: 40,
            duration: 0.8,
            onComplete: () => {
                gsap.to(mainRef.current, { clearProps: "all" }); // Used to remove transform property that messed up mobile menu
            },
        });
    });
    return (
        <>
            <Header links={links} />
            <main ref={mainRef}>{children}</main>
            <Footer links={links} />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
