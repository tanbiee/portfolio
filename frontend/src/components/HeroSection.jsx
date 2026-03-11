import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import './HeroSection.css';

export default function HeroSection() {
    return (
        <section className="hero-section" id="hero">
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.p
                        className="hero-greeting"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="prompt-symbol">&gt;</span> Hello, World! I&apos;m
                    </motion.p>

                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        Shalini Singh
                    </motion.h1>

                    <motion.div
                        className="hero-typing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <span className="typing-prefix">const role = </span>
                        <span className="typing-quotes">&quot;</span>
                        <TypeAnimation
                            sequence={[
                                'Full-Stack Developer',
                                2000,
                                'Problem Solver',
                                2000,
                                'Tech Enthusiast',
                                2000,
                                'MERN Stack Developer',
                                2000,
                                'Competitive Programmer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="typing-text"
                        />
                        <span className="typing-quotes">&quot;</span>
                        <span className="cursor-blink">;</span>
                    </motion.div>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                    >
                        B.Tech CSE student at Lovely Professional University. I build scalable web
                        applications and love turning ideas into elegant, performant code.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                    >
                        <a href="#projects" className="neon-btn" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            View Projects
                        </a>
                        <a href="#contact" className="neon-btn secondary" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-social"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                    >
                        <a href="https://github.com/tanbiee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FiGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/shalinisinghh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FiLinkedin />
                        </a>
                    </motion.div>

                    <motion.div
                        className="scroll-indicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2 }}
                    >
                        <span>Scroll Down</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <FiArrowDown />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
