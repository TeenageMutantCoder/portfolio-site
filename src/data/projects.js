import todo from "../images/projects/Todo.jpg";
import orbitalSim from "../images/projects/OrbitalSim.jpg";
import aboutSoftwareDevelopment from "../images/projects/AboutSoftwareDevelopment.jpg";
import alarmClock from "../images/projects/AlarmClock.jpg";
import calculator from "../images/projects/Calculator.jpg";
import minesweeper from "../images/projects/Minesweeper.jpg";
import snake from "../images/projects/Snake.jpg";
import ticTacToePython from "../images/projects/TicTacToePython.jpg";

const projects = [
    {
        title: "Todo",
        description:
            "A mobile-friendly Todo web application with light/dark mode toggle and persistent storage.",
        techList: "HTML, CSS, JavaScript (React)",
        links: {
            website: "https://sw-todo.netlify.app",
            repo: "https://github.com/TeenageMutantCoder/todo",
        },
        image: todo,
    },

    {
        title: "Orbital Sim",
        description: "A 3D N-Body simulation made using React and BabylonJS.",
        techList: "HTML, CSS, JavaScript (React, BabylonJS)",
        links: {
            website: "https://orbital-sim.netlify.app/",
            repo: "https://github.com/TeenageMutantCoder/n-body-sim",
        },
        image: orbitalSim,
    },

    {
        title: "About Software Development",
        description:
            "A website about software development made using Wordpress.",
        techList: "Wordpress",
        links: {
            website: "https://aboutswe.wordpress.com",
            repo: null,
        },
        image: aboutSoftwareDevelopment,
    },

    {
        title: "Alarm Clock",
        description: "A time-keeping program made in Python.",
        techList: "Python (Tkinter, SQLite3)",
        links: {
            website: null,
            repo: "https://github.com/TeenageMutantCoder/Alarm-Clock",
        },
        image: alarmClock,
    },

    {
        title: "Snake",
        description: "A clone of Snake made in Python.",
        techList: "Python (Pygame, SQLite3)",
        links: {
            website: null,
            repo: "https://github.com/TeenageMutantCoder/Snake-Game",
        },
        image: snake,
    },

    {
        title: "Minesweeper",
        description: "A clone of Minesweeper made in Python.",
        techList: "Python (Pygame, Tkinter)",
        links: {
            website: null,
            repo: "https://github.com/TeenageMutantCoder/Minesweeper",
        },
        image: minesweeper,
    },

    {
        title: "Tic-Tac-Toe",
        description: "A clone of Tic-Tac-Toe made in Python.",
        techList: "Python (Pygame)",
        links: {
            website: null,
            repo: "https://github.com/TeenageMutantCoder/Tic-Tac-Toe",
        },
        image: ticTacToePython,
    },

    {
        title: "Calculator",
        description: "A simple calculator made in Python.",
        techList: "Python (Tkinter)",
        links: {
            website: null,
            repo: "https://github.com/TeenageMutantCoder/Calculator-with-GUI",
        },
        image: calculator,
    },
];

export default projects;
