import React from "react";
import "./button.scss";

const Button = (props) => {
    const { text, onClick, type, download, href, target, rel } = props;

    return (
        <>
            {type === "link" && (
                <a
                    className="Button"
                    href={href}
                    download={download}
                    target={target}
                    rel={rel}
                >
                    {text}
                </a>
            )}
            {type !== "link" && (
                <button type={type} onClick={onClick} className="Button">
                    {text}
                </button>
            )}
        </>
    );
};

export default Button;
