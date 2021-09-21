import React, { forwardRef, useState } from "react";
import "./index.scss";

const Hamburger = forwardRef((props, checkboxRef) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <>
            <input
                ref={checkboxRef}
                type="checkbox"
                id="Hamburger__checkbox"
                name="Hamburger__checkbox"
                aria-label="Mobile menu checkbox"
                aria-hidden
            />
            <button
                className="Hamburger"
                onPointerDown={(e) => {
                    if (!checkboxRef) return;
                    // Only toggles when user taps or left clicks.
                    if (e.button !== 0) return;
                    checkboxRef.current.checked = !checkboxRef.current.checked;
                    setIsChecked(!isChecked);
                }}
                onKeyDown={(e) => {
                    if (!checkboxRef) return;
                    // Only toggles when user presses enter or space bar
                    if (!["Enter", " "].includes(e.key)) return;
                    // Prevents scroll when user presses space bar
                    e.preventDefault();
                    checkboxRef.current.checked = !checkboxRef.current.checked;
                    setIsChecked(!isChecked);
                }}
            >
                <span className="sr-only">{`${
                    checkboxRef?.current?.checked ? "Close" : "Open"
                } navigation menu`}</span>
                <span className="Hamburger__bar"> </span>
                <span className="Hamburger__bar"> </span>
                <span className="Hamburger__bar"> </span>
            </button>
        </>
    );
});

export default Hamburger;
