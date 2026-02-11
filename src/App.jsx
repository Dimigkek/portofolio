import "./App.css";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import lolIcon from "./assets/lol.ico";
import toDoIcon from "./assets/todo.png";
import { Code2, Layers, Cpu, Globe, Database, Palette } from "lucide-react";
import SkillCard from "./components/SkillCard";
import JavaIcon from "./assets/Java.png";

const myProjects = [
    {
        title: "LoL Champion Guessing Game",
        description: "A Wordle-inspired game for League of Legends. Features Redux for high-score persistence and complex game logic.",
        tags: ["React", "Redux", "JavaScript", "CSS3"],
        github: "https://github.com/Dimigkek/leagueOfLegends",
        link: "https://league-of-legends-nu.vercel.app/",
        image: lolIcon
    },
    {
        title: "Java/React Employee Management System",
        description: "a Full stack project in Java/SpringBoot and React that manage company's employees.",
        tags: ["React", "SpringBoot", "Java", "CSS3"],
        github: "https://github.com/Dimigkek/Project",
        link: null,
        image: JavaIcon
    },
    {
        title: "Todo-List App",
        description: "A sleek, modern planning experience built with React, Tailwind CSS, and Framer Motion. This application allows users to manage their daily tasks with an integrated calendar and secure authentication.",
        tags: ["React", "Redux", "JavaScript", "CSS3"],
        github: "https://github.com/Dimigkek/calendar-todolist",
        link: "https://calendar-todolist-y1v7xevbf-dimigkeks-projects.vercel.app/",
        image: toDoIcon
    },
    {
        title: "User App Backend",
        description: "This is the core REST API for the User Management application, built with Spring Boot 4.0.2 and Java 21/23",
        tags: ["SpringBoot", "Java"],
        github: "https://github.com/Dimigkek/calendar-todolist",
        link: null,
        image: JavaIcon
    },
];
const mySkills = [
    { name: "React", icon: Code2},
    { name: "Redux", icon: Layers},
    { name: "Java EE", icon: Cpu},
    { name: "JavaScript", icon: Cpu,},
    { name: "Node.js", icon: Database},
    { name: "PostgreSQL", icon: Database },
    { name: "CSS", icon: Palette },
    { name: "Git", icon: Globe },
];

function App() {
    return (
        <main className="container">
            <Hero />
            <section className="skills-section">
                <h2 className="section-title">Developer Stack</h2>
                <div className="skills-grid">
                    {mySkills.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </section>

            <section className="projects-section">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {myProjects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default App;
