import React from "react";
import Socials from "./socials";
import "./hero.scss";

const Hero = () => {
    return (
        <div className="Hero">
            <p>Hey, I'm...</p>
            <h1>Stevon Wright</h1>
            <p>Software Developer</p>
            <Socials />
        </div>
    );
};

export default Hero;
