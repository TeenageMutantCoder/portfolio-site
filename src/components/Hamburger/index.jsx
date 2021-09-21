import React, { forwardRef } from "react";
import "./index.scss";

const Hamburger = forwardRef((props, checkboxRef) => {
    return (
        <>
            <input
                ref={checkboxRef}
                type="checkbox"
                id="Hamburger__checkbox"
                name="Hamburger__checkbox"
            />
            <button
                className="Hamburger"
                onPointerDown={(e) => {
                    if (!checkboxRef) return;
                    // Only toggles when user taps or left clicks.
                    if (e.button !== 0) return;
                    checkboxRef.current.checked = !checkboxRef.current.checked;
                }}
                onKeyDown={(e) => {
                    if (!checkboxRef) return;
                    // Only toggles when user presses enter or space bar
                    if (!["Enter", " "].includes(e.key)) return;
                    // Prevents scroll when user presses space bar
                    e.preventDefault();
                    checkboxRef.current.checked = !checkboxRef.current.checked;
                }}
            >
                <span className="sr-only">Open navigation menu</span>
                <span className="Hamburger__bar"> </span>
                <span className="Hamburger__bar"> </span>
                <span className="Hamburger__bar"> </span>
            </button>
        </>
    );
});

export default Hamburger;
