import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen } from 'react-icons/fi';
import './EducationSection.css';

const education = [
    {
        degree: 'Bachelor of Technology',
        field: 'Computer Science and Engineering',
        school: 'Lovely Professional University',
        location: 'Phagwara, Punjab',
        period: 'Aug 2023 – Present',
        grade: 'CGPA: 7.71',
        hash: 'a1b2c3d',
    },
    {
        degree: 'Intermediate (12th)',
        field: 'Science Stream',
        school: 'Kendriya Vidyalaya Sangathan',
        location: 'Bharatpur, Rajasthan',
        period: 'Apr 2021 – Mar 2022',
        grade: 'Percentage: 82%',
        hash: 'e4f5g6h',
    },
    {
        degree: 'Matriculation (10th)',
        field: '',
        school: 'Kendriya Vidyalaya Sangathan',
        location: 'Bharatpur, Rajasthan',
        period: 'Apr 2019 – Mar 2020',
        grade: 'Percentage: 90%',
        hash: 'i7j8k9l',
    },
];

export default function EducationSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

    return (
        <section className="section" id="education" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="accent">git</span> log --education
                </motion.h2>

                <div className="git-log">
                    {education.map((edu, i) => (
                        <motion.div
                            className="git-commit"
                            key={edu.hash}
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.2 + 0.3 }}
                        >
                            <div className="git-graph">
                                <div className="git-node"></div>
                                {i < education.length - 1 && <div className="git-line"></div>}
                            </div>
                            <div className="git-content glass-card">
                                <div className="git-hash">
                                    <span className="hash-text">commit {edu.hash}</span>
                                    <span className="git-date">{edu.period}</span>
                                </div>
                                <h3 className="git-degree">
                                    <FiBookOpen className="degree-icon" />
                                    {edu.degree}
                                </h3>
                                {edu.field && <p className="git-field">{edu.field}</p>}
                                <p className="git-school">{edu.school}</p>
                                <div className="git-meta">
                                    <span className="git-location">{edu.location}</span>
                                    <span className="git-grade">{edu.grade}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
