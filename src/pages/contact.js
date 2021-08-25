import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import ContactSection from "../components/contactSection";

const Contact = () => (
    <Layout>
        <Seo title="Contact" />
        <h1 className="title">Contact</h1>
        <ContactSection />
    </Layout>
);

export default Contact;
