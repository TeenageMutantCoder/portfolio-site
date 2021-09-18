import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/Seo";

import "../components/Button";

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" />
        <section
            style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                height: "80vh",
                justifyContent: "center",
                margin: "0 auto",
                width: "90vw",
            }}
        >
            <h1
                style={{
                    fontSize: "4rem",
                    textAlign: "center",
                    marginBottom: "5rem",
                }}
            >
                404: Not Found
            </h1>
            <p
                style={{
                    fontSize: "2rem",
                    textAlign: "center",
                    marginBottom: "5rem",
                }}
            >
                You just hit a route that doesn&#39;t exist... the sadness.
            </p>
            <Link
                style={{ width: "60%", marginBottom: "3rem" }}
                className="Button"
                to="/"
            >
                Go to Home
            </Link>
        </section>
    </Layout>
);

export default NotFoundPage;
