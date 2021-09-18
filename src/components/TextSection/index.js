import React from "react";
import "./index.scss";

const TextSection = (props) => {
    const { data } = props;

    return (
        <section className="TextSection">
            <h2>{data.title}</h2>
            <p>{data.text}</p>
        </section>
    );
};

export default TextSection;
