import React from "react";
import "./index.scss";

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
                    {text || props.children}
                </a>
            )}
            {type !== "link" && (
                <button type={type} onClick={onClick} className="Button">
                    {text || props.children}
                </button>
            )}
        </>
    );
};

export default Button;
