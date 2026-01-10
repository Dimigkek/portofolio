import { motion } from "framer-motion";
import "../css/Skills.css";

export default function SkillCard({ name, icon: Icon, level }) {
    return (
        <motion.div className="skill-card" whileHover={{ x: 10 }}>
            <div className="skill-icon-container">
                <Icon size={24} color="#c8aa6e" />
            </div>

            <div className="skill-info">
                <h3>{name}</h3>
                <div className="skill-bar-bg">
                    <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: level }}
                    />
                </div>
            </div>

            <div className="skill-percentage" style={{color: '#c8aa6e', fontWeight: 'bold'}}>
                {level}
            </div>
        </motion.div>
    );
}