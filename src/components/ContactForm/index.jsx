import React, { useState } from "react";
import { navigate } from "gatsby";
import "./index.scss";

import Button from "../Button";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // This function encodes the captured form data in the format that Netlify's backend requires
    // https://github.com/kaganjd/gatsby-starter-default-form/commit/4ccd833d693f27826f9b29d957e47d948066e9c1
    function encode(data) {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    }

    // Adapted from link in comment above
    const handleChange = (e, param) => {
        const stateFunctions = {
            name: setName,
            email: setEmail,
            message: setMessage,
        };
        const stateValues = { name: name, email: email, message: message };

        stateFunctions[param]({
            ...stateValues[param],
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Adapted from link in comment above
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": e.target.getAttribute("name"),
                ...name,
                ...email,
                ...message,
            }),
        })
            // On success, redirect to the custom success page using Gatsby's `navigate` helper function
            .then(() => navigate("/contact/?submitted=true/"))
            // On error, show the error in an alert
            .catch((e) => alert(e));
    };

    return (
        <form
            action="/contact/?submitted=true/"
            className="ContactForm"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">Name:</label>
            <br />
            <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => handleChange(e, "name")}
                required
            />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => handleChange(e, "email")}
                required
            />
            <br />
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
                id="message"
                name="message"
                rows="5"
                onChange={(e) => handleChange(e, "message")}
                required
            ></textarea>
            <br />
            <Button type="submit" text="Send" />
        </form>
    );
};

export default ContactForm;
