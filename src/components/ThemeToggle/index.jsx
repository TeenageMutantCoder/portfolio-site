import React, { useEffect, useState, forwardRef } from "react";
import useDarkMode from "use-dark-mode";
import { FaSun as LightModeIcon } from "@react-icons/all-files/fa/FaSun";
import { FaMoon as DarkModeIcon } from "@react-icons/all-files/fa/FaMoon";

import "./index.scss";

// Used to fix error where SSR and browser don't agree on the darkMode value
// https://stackoverflow.com/questions/55271855/react-material-ui-ssr-warning-prop-d-did-not-match-server-m-0-0-h-24-v-2
export const useLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);
    return loaded;
};

const ThemeToggle = forwardRef((props, ref) => {
    const darkMode = useDarkMode(false);
    const loaded = useLoaded();

    return (
        <button
            ref={ref}
            type="button"
            className="ThemeToggle"
            onPointerDown={(e) => {
                // Only toggles when user taps or left clicks.
                if (e.button !== 0) return;
                darkMode.toggle();
            }}
            onKeyDown={(e) => {
                // Only toggles when user presses enter or space bar
                if (!["Enter", " "].includes(e.key)) return;
                darkMode.toggle();
            }}
        >
            <span className="sr-only">
                {`Switch to ${darkMode.value ? "light" : "dark"} theme`}
            </span>
            {loaded && (darkMode.value ? <DarkModeIcon /> : <LightModeIcon />)}
        </button>
    );
});

export default ThemeToggle;
