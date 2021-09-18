import React from "react";
import "./index.scss";
import { AiFillGithub as GitHub } from "@react-icons/all-files/ai/AiFillGithub";
import { HiOutlineMail as Email } from "@react-icons/all-files/hi/HiOutlineMail";
import { AiFillLinkedin as LinkedIn } from "@react-icons/all-files/ai/AiFillLinkedin";

const Socials = () => {
    return (
        <div className="Socials">
            <a
                href="mailto:stevon.wright.business@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Email />
                <span className="visible-hidden">Email</span>
            </a>
            <a
                href="https://github.com/TeenageMutantCoder"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHub />
                <span className="visible-hidden">GitHub</span>
            </a>
            <a
                href="https://www.linkedin.com/in/stevon-wright/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedIn />
                <span className="visible-hidden">LinkedIn</span>
            </a>
        </div>
    );
};

export default Socials;
