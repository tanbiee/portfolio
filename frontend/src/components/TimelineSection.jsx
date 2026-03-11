import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBookOpen, FiCode, FiCloud, FiExternalLink } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';
import './TimelineSection.css';

const trainingItems = [
    {
        title: 'Data Structure and Algorithm | C++',
        subtitle: 'Lovely Professional University, Phagwara',
        date: 'Feb 2025 – May 2025',
        icon: <FiCode />,
        link: 'https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12318633_848_20_08_2025.pdf?_gl=1%2A4pabtl%2A_gcl_au%2AMjA0MDIxOTE4Mi4xNzYyNDk5MTQwLjQwMzY0MjQzNy4xNzYyNDk5MTU2LjE3NjI0OTkxNzY.%2A_ga%2ANzUyOTU0NzUzLjE3NTk5NDU2Mjc.%2A_ga_WKLQCVXZ47%2AczE3NjM5ODg0NDkkbzMkZzEkdDE3NjM5ODg1MDIkajckbDAkaDA',
        bullets: [
            'Mastered core CS fundamentals including arrays, linked lists, stacks, queues, trees, and graphs.',
            'Solved 100+ coding problems on LeetCode and GeeksforGeeks.',
            'Implemented optimized algorithms for sorting, searching, and graph traversal.',
        ],
    },
];

const certifications = [
    { title: 'SQL Basic', org: 'HackerRank', date: 'Aug 2025 – Sep 2025', icon: <SiHackerrank />, link: 'https://www.hackerrank.com/certificates/412ac63123e2' },
    { title: 'Cloud Computing', org: 'NPTEL', date: 'Feb 2025 – May 2025', icon: <FiCloud />, link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S104750081404255310.pdf' },
    { title: 'Python Industrial Training', org: 'CodeSprint', date: 'Feb 2024 – Mar 2024', icon: <FiBookOpen />, link: 'https://certify.codesprint.in/verify/iJGzCGFw' },
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
                                        {item.link && (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                                                View Certificate <FiExternalLink />
                                            </a>
                                        )}
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
                                        {cert.link && (
                                            <div style={{marginTop: '4px'}}>
                                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-cert-btn" style={{marginTop: 0}}>
                                                    View Certificate <FiExternalLink />
                                                </a>
                                            </div>
                                        )}
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
