import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ContactSection from "../components/ContactSection";

const ContactPage = () => (
    <Layout>
        <Seo title="Contact" />
        <h1 className="title">Contact</h1>
        <ContactSection />
    </Layout>
);

export default ContactPage;
