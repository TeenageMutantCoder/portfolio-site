import React, { createRef, useRef } from "react";
import { Link } from "gatsby";

import Hamburger from "../Hamburger";
import ThemeToggle from "../ThemeToggle";
import "./index.scss";
import trapFocus from "../../utils/trapFocus";

const Header = ({ links }) => {
    const themeToggleRef = createRef();
    const hamburgerCheckboxRef = createRef();
    const navRef = useRef();

    const handleKeyDown = (e) => {
        // Only runs if user is in mobile browser with the navigation menu open and presses tab
        if (typeof window === "undefined") return;
        if (document.documentElement.clientWidth >= 768) return;
        if (!hamburgerCheckboxRef || !themeToggleRef || !navRef) return;
        if (!hamburgerCheckboxRef.current.checked) return;
        trapFocus(
            e,
            themeToggleRef.current,
            navRef.current.querySelector(":last-child")
        );
    };

    return (
        <header role="heading" aria-level="1" onKeyDown={handleKeyDown}>
            <ThemeToggle ref={themeToggleRef} />
            <Hamburger ref={hamburgerCheckboxRef} />
            <nav ref={navRef}>
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
