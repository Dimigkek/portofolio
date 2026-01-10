import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import "../css/ProjectCard.css";

export default function ProjectCard({ title, description, tags, link, github, image }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={title} />
            </div>
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tags">
                    {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>

                <div className="project-links">
                    {/* Always show GitHub */}
                    <a href={github} target="_blank" rel="noreferrer" className="social-icon">
                        <Github size={20} />
                    </a>
                    {link && (
                        <a href={link} target="_blank" rel="noreferrer" className="social-icon">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}