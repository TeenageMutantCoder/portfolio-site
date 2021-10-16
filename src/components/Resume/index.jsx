import React from "react";
import printJS from "print-js";
import Button from "../Button";

import "./index.scss";

const Resume = () => {
    const resumeFileName = "StevonWrightResume";

    return (
        <section className="Resume">
            <iframe
                title="My Resume/CV"
                src="https://drive.google.com/file/d/1PU5yowoZuFg9fjMt5ny0ETVZWEu4fsbz/preview"
                allow="autoplay"
            ></iframe>
            <Button
                type="button"
                text="Print"
                onClick={() => printJS(`/${resumeFileName}.pdf`)}
            />
            <Button
                type="link"
                text="Download as PDF"
                href={`/${resumeFileName}.pdf`}
                download={resumeFileName}
            />
            <Button
                type="link"
                text="Download as DOCX"
                href={`/${resumeFileName}.docx`}
                download={resumeFileName}
            />
            <Button
                type="link"
                text="Download as TXT"
                href={`/${resumeFileName}.txt`}
                download={resumeFileName}
            />
        </section>
    );
};

export default Resume;
