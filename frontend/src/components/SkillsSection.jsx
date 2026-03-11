import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    SiC, SiCplusplus, SiPhp, SiJavascript, SiPython,
    SiReact, SiExpress, SiNodedotjs, SiMongodb, SiNextdotjs,
    SiBootstrap, SiTailwindcss, SiMui,
    SiGit, SiGithub, SiMysql, SiPostman, SiDocker, SiLaravel,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiMonitor, FiZap } from 'react-icons/fi';
import { HiLightBulb, HiUserGroup, HiChatBubbleLeftRight, HiPuzzlePiece, HiMicrophone } from 'react-icons/hi2';
import './SkillsSection.css';

const skillGroups = [
    {
        title: 'Languages',
        color: 'green',
        skills: [
            { name: 'C', icon: <SiC /> },
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'PHP', icon: <SiPhp /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'Java', icon: <FaJava /> },
            { name: 'Python', icon: <SiPython /> },
        ],
    },
    {
        title: 'Frameworks',
        color: 'cyan',
        skills: [
            { name: 'React.js', icon: <SiReact /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'Bootstrap', icon: <SiBootstrap /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
            { name: 'Material UI', icon: <SiMui /> },
            { name: 'Laravel', icon: <SiLaravel /> },
        ],
    },
    {
        title: 'Tools / Platforms',
        color: 'purple',
        skills: [
            { name: 'Git', icon: <SiGit /> },
            { name: 'GitHub', icon: <SiGithub /> },
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Postman', icon: <SiPostman /> },
            { name: 'VS Code', icon: <FiMonitor /> },
            { name: 'Docker', icon: <SiDocker /> },
            { name: 'Thunder Client', icon: <FiZap /> },
        ],
    },
    {
        title: 'Soft Skills',
        color: 'green',
        skills: [
            { name: 'Adaptive Learner', icon: <HiLightBulb /> },
            { name: 'Leadership', icon: <HiUserGroup /> },
            { name: 'Communication', icon: <HiChatBubbleLeftRight /> },
            { name: 'Problem-Solving', icon: <HiPuzzlePiece /> },
            { name: 'Public Speaking', icon: <HiMicrophone /> },
        ],
    },
];

export default function SkillsSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section" id="skills" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="accent">./</span>skills
                </motion.h2>

                <div className="skills-grid">
                    {skillGroups.map((group, gi) => (
                        <motion.div
                            className="skill-group glass-card"
                            key={group.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: gi * 0.15, duration: 0.5 }}
                        >
                            <h3 className={`skill-group-title ${group.color}`}>
                                <span className="bracket">{`{`}</span> {group.title} <span className="bracket">{`}`}</span>
                            </h3>
                            <div className="skill-tags">
                                {group.skills.map((skill, si) => (
                                    <motion.span
                                        className={`tech-tag ${group.color}`}
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: gi * 0.15 + si * 0.05 + 0.3 }}
                                        whileHover={{ scale: 1.08 }}
                                    >
                                        {skill.icon}
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
