import React from "react";
import { AiFillHtml5 as Html } from "@react-icons/all-files/ai/AiFillHtml5";
import { DiCss3 as Css } from "@react-icons/all-files/di/DiCss3";
import { DiSass as Sass } from "@react-icons/all-files/di/DiSass";
import { SiStyledComponents as StyledComponents } from "@react-icons/all-files/si/SiStyledComponents";
import { SiJavascript as Js } from "@react-icons/all-files/si/SiJavascript";
import { SiTypescript as Ts } from "@react-icons/all-files/si/SiTypescript";
import { SiPython as Python } from "@react-icons/all-files/si/SiPython";
import { SiReact as ReactLogo } from "@react-icons/all-files/si/SiReact";
import { SiNextDotJs as Next } from "@react-icons/all-files/si/SiNextDotJs";
import { SiGatsby as Gatsby } from "@react-icons/all-files/si/SiGatsby";
import { SiCplusplus as Cpp } from "@react-icons/all-files/si/SiCplusplus";
import { SiMongodb as MongoDb } from "@react-icons/all-files/si/SiMongodb";
import { SiMysql as MySql } from "@react-icons/all-files/si/SiMysql";
import { DiSqllite as SqLite3 } from "@react-icons/all-files/di/DiSqllite";
import { DiGit as Git } from "@react-icons/all-files/di/DiGit";
import { AiFillGithub as GitHub } from "@react-icons/all-files/ai/AiFillGithub";
import { SiExpress as Express, SiCypress as Cypress } from "react-icons/si";

const sections = {
    aboutMe: {
        title: "About Me",
        text: "I am a software developer that has been building applications for over 2 years. I enjoy software development because it allows me to combine my love for technology with my curiosity and interest for problem-solving. Some of my other interests include basketball, videogames, anime, YouTube, guitar, and piano.",
    },
    skills: {
        title: "Skills",
        text: "My expertise lies primarily in front-end web development, although I have some experience in full-stack web development and desktop application development. Because of my strong grasp of programming fundamentals, I am able to quickly learn whatever technology I need for a project. Some of my current skills include:",
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
                title: "SASS",
                image: <Sass />,
            },
            {
                title: "Styled Components",
                image: <StyledComponents />,
            },
            {
                title: "JavaScript",
                image: <Js />,
            },
            {
                title: "TypeScript",
                image: <Ts />,
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
                title: "Express",
                image: <Express />,
            },
            {
                title: "Next.js",
                image: <Next />,
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
                title: "MongoDB",
                image: <MongoDb />,
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
                title: "Cypress",
                image: <Cypress />,
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
