import React from "react";
import "./resume.scss";

import Button from "./button";

const Resume = () => {
    return (
        <section className="Resume">
            <iframe
                title="My Resume/CV"
                src="https://drive.google.com/file/d/1PU5yowoZuFg9fjMt5ny0ETVZWEu4fsbz/preview"
            ></iframe>
            <Button
                type="link"
                text="Download as PDF"
                href="/Resume.pdf"
                download="Stevon-Wright"
            />
            <Button
                type="link"
                text="Download as DOCX"
                href="/Resume.docx"
                download="Stevon-Wright"
            />
        </section>
    );
};

export default Resume;
