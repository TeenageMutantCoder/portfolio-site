import React from "react";
import printJS from "print-js";
import Button from "./button";

import "./resume.scss";

const Resume = () => {
    return (
        <section className="Resume">
            <iframe
                title="My Resume/CV"
                src="https://drive.google.com/file/d/1PU5yowoZuFg9fjMt5ny0ETVZWEu4fsbz/preview"
            ></iframe>
            <div className="Resume__buttons">
                <Button
                    type="button"
                    text="Print"
                    onClick={() => printJS("/Resume.pdf")}
                />
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
            </div>
        </section>
    );
};

export default Resume;
