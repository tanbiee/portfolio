import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './AboutSection.css';

export default function AboutSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section className="section" id="about" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="accent">~/</span>about_me
                </motion.h2>

                <motion.div
                    className="about-grid"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="terminal-window about-terminal">
                        <div className="terminal-header">
                            <div className="terminal-dot red"></div>
                            <div className="terminal-dot yellow"></div>
                            <div className="terminal-dot green"></div>
                            <span className="terminal-title">shalini@portfolio:~</span>
                        </div>
                        <div className="terminal-body">
                            <p><span className="prompt">$ </span><span className="command">cat about.txt</span></p>
                            <br />
                            <p className="about-text">
                                <span className="comment">// Who am I?</span>
                            </p>
                            <p className="about-text">
                                I&apos;m a passionate <span className="highlight">Full-Stack Developer</span> and
                                B.Tech CSE student at <span className="highlight">Lovely Professional University</span>.
                                I thrive on building scalable web applications that solve real-world problems.
                            </p>
                            <br />
                            <p className="about-text">
                                <span className="comment">// What I do</span>
                            </p>
                            <p className="about-text">
                                With expertise in the <span className="highlight">MERN stack</span> and a
                                strong foundation in <span className="highlight">Data Structures & Algorithms</span>,
                                I craft clean, efficient code. I&apos;ve built everything from AI chatbots to
                                full-scale trading platforms.
                            </p>
                            <br />
                            <p className="about-text">
                                <span className="comment">// Beyond code</span>
                            </p>
                            <p className="about-text">
                                A <span className="highlight">Smart India Hackathon National Finalist</span>,
                                200+ LeetCode problems solver, and a runner-up in Effective Speaking
                                competitions. I bring both technical skill and communication to every team.
                            </p>
                            <br />
                            <p><span className="prompt">$ </span><span className="cursor-line">_</span></p>
                        </div>
                    </div>

                    <div className="about-stats">
                        {[
                            { number: '200+', label: 'LeetCode Problems' },
                            { number: '3+', label: 'Full-Stack Projects' },
                            { number: '15+', label: 'GitHub Repositories' },
                            { number: '7.71', label: 'CGPA' },
                        ].map((stat, i) => (
                            <motion.div
                                className="stat-card glass-card"
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.3 + i * 0.1 }}
                            >
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
