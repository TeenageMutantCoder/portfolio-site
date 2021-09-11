import React, { useEffect, useState } from "react";
import useDarkMode from "use-dark-mode";
import { FaSun as LightModeIcon } from "@react-icons/all-files/fa/FaSun";
import { FaMoon as DarkModeIcon } from "@react-icons/all-files/fa/FaMoon";

import "./themeToggle.scss";

// Used to fix error where SSR and browser don't agree on the darkMode value
// https://stackoverflow.com/questions/55271855/react-material-ui-ssr-warning-prop-d-did-not-match-server-m-0-0-h-24-v-2
export const useLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);
    return loaded;
};

const ThemeToggle = () => {
    const darkMode = useDarkMode(false);
    const loaded = useLoaded();

    return (
        <div className="ThemeToggle">
            <input
                type="checkbox"
                name="theme-toggle"
                id="theme-toggle"
                checked={darkMode.value}
                onChange={() => {
                    darkMode.toggle();
                }}
            />
            <label htmlFor="theme-toggle">
                {loaded &&
                    (darkMode.value ? <DarkModeIcon /> : <LightModeIcon />)}
            </label>
        </div>
    );
};

export default ThemeToggle;
