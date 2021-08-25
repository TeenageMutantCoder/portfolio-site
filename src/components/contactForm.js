import React from "react";
import "./contactForm.scss";

import Button from "./button";

const ContactForm = () => {
    return (
        <form
            className="ContactForm"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
        >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="message">Message:</label>
            <br />
            <textarea id="message" name="message" rows="5"></textarea>
            <br />
            <Button type="submit" text="Send" />
        </form>
    );
};

export default ContactForm;
