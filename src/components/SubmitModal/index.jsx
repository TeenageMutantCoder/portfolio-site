import React from "react";
import "./index.scss";

import Backdrop from "../Backdrop";
import Button from "../Button";

function SubmitModal({ setIsSubmitted }) {
    const handleClick = (e) => {
        if (typeof setIsSubmitted === "function") {
            setIsSubmitted(false);
        }
    };

    return (
        <Backdrop>
            <div className="SubmitModal">
                <p>Thank you for your submission!</p>
                <Button type="button" onClick={handleClick}>
                    Close
                </Button>
            </div>
        </Backdrop>
    );
}

export default SubmitModal;
