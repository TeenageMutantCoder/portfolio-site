import React from "react";
import "./hamburger.scss";

const Hamburger = () => {
    return (
        <>
            <input
                type="checkbox"
                id="Hamburger__checkbox"
                name="Hamburger__checkbox"
            />
            <label className="Hamburger" htmlFor="Hamburger__checkbox">
                <span className="Hamburger__bar"> </span>
                <span className="Hamburger__bar"> </span>
                <span className="Hamburger__bar"> </span>
            </label>
        </>
    );
};

export default Hamburger;
