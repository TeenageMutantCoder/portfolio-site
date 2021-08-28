import React from "react";
import printJS from "print-js";
import Button from "./button";

import "./resume.scss";

const Resume = () => {
    const resumeFileName = "StevonWrightResume";

    return (
        <section className="Resume">
            <iframe
                title="My Resume/CV"
                src="https://drive.google.com/file/d/1PU5yowoZuFg9fjMt5ny0ETVZWEu4fsbz/preview"
            ></iframe>
            <Button
                type="button"
                text="Print"
                onClick={() => printJS("/Resume.pdf")}
            />
            <Button
                type="link"
                text="Download as PDF"
                href="/Resume.pdf"
                download={resumeFileName}
            />
            <Button
                type="link"
                text="Download as DOCX"
                href="/Resume.docx"
                download={resumeFileName}
            />
            <Button
                type="link"
                text="Download as TXT"
                href="/Resume.txt"
                download={resumeFileName}
            />
        </section>
    );
};

export default Resume;
