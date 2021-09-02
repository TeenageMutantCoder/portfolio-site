import React from "react";
import ContactForm from "./contactForm";
import Socials from "./socials";
import "./contactSection.scss";

const ContactSection = () => {
    return (
        <section className="ContactSection">
            <Socials />
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:stevon.wright.business@gmail.com"
                >
                    Email: stevon.wright.business@gmail.com
                </a>
                <br />
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://linkedin.com/in/stevon-wright"
                >
                    LinkedIn: linkedin.com/in/stevon-wright
                </a>
                <br />
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/TeenageMutantCoder"
                >
                    GitHub: github.com/TeenageMutantCoder
                </a>
            </p>
            <ContactForm />
        </section>
    );
};

export default ContactSection;
