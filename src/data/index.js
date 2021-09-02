import React from "react";
import { AiFillHtml5 as Html } from "@react-icons/all-files/ai/AiFillHtml5";
import { DiCss3 as Css } from "@react-icons/all-files/di/DiCss3";
import { DiSass as Sass } from "@react-icons/all-files/di/DiSass";
import { SiJavascript as Js } from "@react-icons/all-files/si/SiJavascript";
import { SiPython as Python } from "@react-icons/all-files/si/SiPython";
import { SiReact as ReactLogo } from "@react-icons/all-files/si/SiReact";
import { SiGatsby as Gatsby } from "@react-icons/all-files/si/SiGatsby";
import { SiCplusplus as Cpp } from "@react-icons/all-files/si/SiCplusplus";
import { SiMysql as MySql } from "@react-icons/all-files/si/SiMysql";
import { DiSqllite as SqLite3 } from "@react-icons/all-files/di/DiSqllite";
import { DiGit as Git } from "@react-icons/all-files/di/DiGit";
import { AiFillGithub as GitHub } from "@react-icons/all-files/ai/AiFillGithub";

const sections = {
    aboutMe: {
        title: "About Me",
        text: "I am a recent high school graduate that has been learning software development in his spare time for the last 5 years. I am pursuing a career in software development because it allows me to combine my love for technology with my curiosity and interest for problem-solving. Some of my other interests include basketball, videogames, anime, YouTube, guitar and piano.",
    },
    skills: {
        title: "Skills",
        text: "My expertise lies primarily in front-end web development, although I have some experience in full-stack web development and desktop application development. I generally prefer web development because of the ease of UI creation, software distribution, and deployment. Because of my strong grasp of programming fundamentals, I am able to quickly learn whatever technology I need for a project. Some of my specific skills include:",
    },
    skillsIcons: {
        title: "",
        images: [
            {
                title: "HTML",
                image: <Html />,
            },
            {
                title: "CSS",
                image: <Css />,
            },
            {
                title: "SASS/SCSS",
                image: <Sass />,
            },
            {
                title: "JavaScript",
                image: <Js />,
            },
            {
                title: "Python",
                image: <Python />,
            },
            {
                title: "React",
                image: <ReactLogo />,
            },
            {
                title: "Gatsby",
                image: <Gatsby />,
            },
            {
                title: "C++",
                image: <Cpp />,
            },
            {
                title: "MySQL",
                image: <MySql />,
            },
            {
                title: "SQLite3",
                image: <SqLite3 />,
            },
            {
                title: "Git",
                image: <Git />,
            },
            {
                title: "GitHub",
                image: <GitHub />,
            },
        ],
    },
};

export default sections;
