import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { FileText } from "lucide-react";

export default function Hero() {
    return (
        <section className="hero">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="title">Hi, I'm <span className="highlight">Dimitris</span></h1>
                <p className="subtitle">
                    Software Engineer
                </p>
                <p className="about-description">
                    Based in <strong>Ioannina</strong>, I am a <strong>Java Developer</strong> specialized in engineering scalable <strong>Java EE applications</strong>.
                    While my core expertise is in robust backend systems and RESTful APIs, I take the initiative to build modern <strong>React interfaces</strong> to deliver seamless, full-stack excellence.
                </p>

                <div className="cv-container">
                    <p className="cv-text">Interested in my professional journey?</p>
                    <a
                        href="/Dimitrios Gkekas Java Developer CV.pdf"
                        download
                        className="cv-download-btn"
                    >
                        <FileText size={20} />
                        Download My CV
                    </a>
                </div>

                <div className="social-divider">
                    <span>Let's Connect :</span>
                </div>
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