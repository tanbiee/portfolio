import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiMessageSquare, FiCode, FiCheckCircle } from 'react-icons/fi';
import './AchievementsSection.css';

const achievements = [
    {
        icon: <FiAward />,
        title: 'Smart India Hackathon',
        description: 'Secured National Finalist position in SIH after demonstrating technical excellence in the university-level internal hackathon.',
        color: 'green',
    },
    {
        icon: <FiMessageSquare />,
        title: 'Effective Speaking Runner-Up',
        description: 'Clinched Runner-Up title in the University Effective Speaking Competition by demonstrating exceptional communication and leadership.',
        color: 'cyan',
    },
    {
        icon: <FiCode />,
        title: '200+ LeetCode Problems',
        description: 'Solved over 200 competitive programming problems on the LeetCode platform, building strong algorithmic thinking.',
        color: 'purple',
    },
    {
        icon: <FiCheckCircle />,
        title: '50+ GeeksforGeeks Problems',
        description: 'Solved over 50 problems on GeeksforGeeks, strengthening fundamentals in data structures, algorithms, and competitive coding.',
        color: 'green',
    },
];

export default function AchievementsSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

    return (
        <section className="section" id="achievements" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="accent">./</span>achievements
                </motion.h2>

                <div className="achievements-grid">
                    {achievements.map((item, i) => (
                        <motion.div
                            className={`achievement-card glass-card achievement-${item.color}`}
                            key={item.title}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ delay: i * 0.15 + 0.2 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className={`achievement-icon ${item.color}`}>
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
