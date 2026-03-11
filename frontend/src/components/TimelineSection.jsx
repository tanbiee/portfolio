import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBookOpen, FiCode, FiCloud } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';
import './TimelineSection.css';

const trainingItems = [
    {
        title: 'Data Structure and Algorithm | C++',
        subtitle: 'Lovely Professional University, Phagwara',
        date: 'Feb 2025 – May 2025',
        icon: <FiCode />,
        bullets: [
            'Mastered core CS fundamentals including arrays, linked lists, stacks, queues, trees, and graphs.',
            'Solved 100+ coding problems on LeetCode and GeeksforGeeks.',
            'Implemented optimized algorithms for sorting, searching, and graph traversal.',
        ],
    },
];

const certifications = [
    { title: 'SQL Basic', org: 'HackerRank', date: 'Aug 2025 – Sep 2025', icon: <SiHackerrank /> },
    { title: 'Cloud Computing', org: 'NPTEL', date: 'Feb 2025 – May 2025', icon: <FiCloud /> },
    { title: 'Python Industrial Training', org: 'CodeSprint', date: 'Feb 2024 – Mar 2024', icon: <FiBookOpen /> },
];

export default function TimelineSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section className="section" id="training" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="accent">./</span>training <span className="accent">&amp;&amp;</span> certifications
                </motion.h2>

                <div className="timeline-grid">
                    {/* Training */}
                    <div className="timeline-column">
                        <h3 className="timeline-column-title">
                            <FiBookOpen /> Training
                        </h3>
                        <div className="timeline">
                            {trainingItems.map((item, i) => (
                                <motion.div
                                    className="timeline-item"
                                    key={item.title}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: i * 0.2 + 0.3 }}
                                >
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-card glass-card">
                                        <div className="timeline-icon">{item.icon}</div>
                                        <h4>{item.title}</h4>
                                        <p className="timeline-subtitle">{item.subtitle}</p>
                                        <span className="timeline-date">{item.date}</span>
                                        <ul className="timeline-bullets">
                                            {item.bullets.map((b, j) => (
                                                <li key={j}>{b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="timeline-column">
                        <h3 className="timeline-column-title">
                            <FiAward /> Certifications
                        </h3>
                        <div className="cert-list">
                            {certifications.map((cert, i) => (
                                <motion.div
                                    className="cert-card glass-card"
                                    key={cert.title}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: i * 0.15 + 0.3 }}
                                >
                                    <div className="cert-icon">{cert.icon}</div>
                                    <div className="cert-info">
                                        <h4>{cert.title}</h4>
                                        <p>{cert.org}</p>
                                        <span className="timeline-date">{cert.date}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
