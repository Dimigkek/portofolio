import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="hero">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="title">Hi, I'm <span className="highlight">Dimitris </span></h1>
                <p className="subtitle">Software Engineer</p>

                <div className="social-links">
                    <a href="https://github.com/Dimigkek" target="_blank" rel="noreferrer" className="social-icon">
                        <Github size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/dimitris-gkekas-69a47b1b5/" target="_blank" rel="noreferrer" className="social-icon">
                        <Linkedin size={30} />
                    </a>
                    <a href="mailto:dimigkek@gmail.com" className="social-icon">
                        <Mail size={30} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}