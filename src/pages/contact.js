import React, { useEffect } from "react";
import { useState } from "react";
import { navigate } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ContactSection from "../components/ContactSection";
import SubmitModal from "../components/SubmitModal";

const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [prevWasSubmitted, setPrevWasSubmitted] = useState(false);
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (window.location.href.split("/").includes("?submitted=true")) {
            navigate("/contact/");
            setPrevWasSubmitted(true);
            setModalIsOpen(true);
        }
    }, [isSubmitted]);

    return (
        <Layout animate={!(isSubmitted || prevWasSubmitted)}>
            <Seo title="Contact" />
            <h1 className="title">Contact</h1>
            <ContactSection setIsSubmitted={setIsSubmitted} />
            {modalIsOpen && (
                <SubmitModal
                    setIsSubmitted={setIsSubmitted}
                    setModalIsOpen={setModalIsOpen}
                />
            )}
        </Layout>
    );
};

export default ContactPage;
