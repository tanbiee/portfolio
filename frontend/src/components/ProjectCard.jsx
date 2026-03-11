import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiUsers } from 'react-icons/fi';
import './ProjectCard.css';

export default function ProjectCard({ project, index, inView }) {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setRotateX((y - centerY) / 15);
        setRotateY((centerX - x) / 15);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            className="project-card-wrapper"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.5 }}
        >
            <div
                className="project-card glass-card"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`,
                }}
            >
                <div className="project-card-header">
                    <div className="project-icon">
                        {project.icon}
                        {project.collab && <span className="collab-badge"><FiUsers /> Collab</span>}
                    </div>
                    <div className="project-links">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FiGithub />
                            </a>
                        )}
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live">
                                <FiExternalLink />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-date">{project.date}</p>

                <ul className="project-bullets">
                    {project.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                    ))}
                </ul>

                <div className="project-tech">
                    {project.tech.map((t) => (
                        <span className="tech-tag" key={t}>{t}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
