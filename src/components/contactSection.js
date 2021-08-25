import React from "react";
import ContactForm from "./contactForm";
import Socials from "./socials";
import "./contactSection.scss";

const ContactSection = () => {
    return (
        <section className="ContactSection">
            <Socials />
            <p>
                Email:{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:stevon.wright.business@gmail.com"
                >
                    stevon.wright.business@gmail.com
                </a>
                <br />
                LinkedIn:{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://linkedin.com/in/stevon-wright"
                >
                    linkedin.com/in/stevon-wright
                </a>
                <br />
                GitHub:{" "}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/TeenageMutantCoder"
                >
                    github.com/TeenageMutantCoder
                </a>
            </p>
            <ContactForm />
        </section>
    );
};

export default ContactSection;
