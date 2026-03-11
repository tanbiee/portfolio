import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FiCpu, FiTrendingUp, FiGlobe, FiEdit3, FiLayout, FiShoppingCart, FiMusic, FiGithub } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import './ProjectsSection.css';

const projects = [
    {
        title: 'StrokeHub – Multiplayer Drawing Game',
        date: 'Feb 2025 – Present',
        icon: <FiEdit3 />,
        github: 'https://github.com/tanbiee/Stroke-Hub',
        bullets: [
            'Built a real-time multiplayer Scribble-style drawing game with Socket.io, achieving <1s latency for instant drawing and chat syncing across 10+ concurrent players.',
            'Integrated WebRTC peer-to-peer voice chat with mute/unmute controls and speaking indicator rings, reducing third-party dependency by 100%.',
            'Implemented advanced drawing tools (freehand, shapes, flood fill), hint system, and in-room leaderboard, boosting average session time by 40%.',
            'Engineered host controls, confetti celebrations, and customizable avatars, delivering 95% positive user feedback in beta testing.',
        ],
        tech: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'MongoDB', 'Express'],
    },
    {
        title: 'CurixAI – AI Chatbot',
        date: 'Oct 2025 – Nov 2025',
        icon: <FiCpu />,
        github: 'https://github.com/tanbiee/CurixAI',
        bullets: [
            'Built an intelligent chatbot using Gemini API to simulate human-like conversations and answer user queries efficiently.',
            'Architected a scalable full-stack solution with React frontend and Express/Node backend to manage chat sessions and persist conversation history.',
            'Achieved 85% query resolution accuracy with context-aware responses across sessions, reducing average response time to under 2 seconds.',
        ],
        tech: ['React.js', 'Node.js', 'Express', 'Gemini API', 'MongoDB', 'HTML', 'CSS'],
    },
    {
        title: 'Zerodha Clone – Real-time Trading Engine',
        date: 'Sep 2025 – Nov 2025',
        icon: <FiTrendingUp />,
        github: 'https://github.com/tanbiee/zerodha-clone',
        bullets: [
            'Coded a full-stack Zerodha-style trading platform using React, Node.js, Express, and MongoDB, delivering smooth data flow across the system.',
            'Designed a responsive Material UI interface with adaptive layouts to ensure seamless user experience across desktop and mobile devices.',
            'Integrated Jest for unit testing, implementing test suites for core component logic and validating critical trading functionalities to ensure code reliability.',
            'Achieved 90% test coverage on core trading modules and reduced UI bugs by 60% through systematic component testing.',
        ],
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material UI', 'REST APIs', 'JWT'],
    },
    {
        title: 'DevDash – React DevOps Dashboard',
        date: '2025',
        icon: <FiLayout />,
        github: 'https://github.com/tanbiee/DevDash',
        bullets: [
            'Built a production-ready React Dashboard implementing a full DevOps lifecycle with Docker containerization.',
            'Features multi-stage Docker builds reducing image size by 70%, Nginx serving, and automated CI/CD pipelines via GitHub Actions.',
            'Achieved 99.9% deployment uptime through automated rollback mechanisms and health checks in the CI/CD pipeline.',
        ],
        tech: ['React', 'Docker', 'Nginx', 'GitHub Actions', 'CI/CD'],
    },
    {
        title: 'WanderLust – Travel & Tourism',
        date: 'Jun 2025 – Aug 2025',
        icon: <FiGlobe />,
        github: 'https://github.com/tanbiee/travel-tourism_',
        bullets: [
            'Engineered a dynamic travel website enabling users to explore destinations, view details, and navigate through an intuitive booking flow.',
            'Integrated secure user authentication and session handling to deliver personalized access and protect user information.',
            'Crafted a fully responsive interface with smooth navigation and visually appealing layouts for consistent performance across devices.',
            'Delivered 100% mobile responsiveness and reduced page load time by 35% through optimized asset delivery and lazy loading.',
        ],
        tech: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'XAMPP'],
    },
    {
        title: 'E-Commerce Platform',
        date: '2025',
        icon: <FiShoppingCart />,
        github: 'https://github.com/tanbiee/E-Commerce',
        collab: true,
        bullets: [
            'Collaborated on building a fully functional e-commerce platform with product browsing, filtering, and purchasing capabilities.',
            'Implemented user authentication, shopping cart persistence, and a seamless checkout experience with order tracking.',
            'Contributed to a 50% improvement in page navigation speed by optimizing React component rendering and API calls.',
        ],
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs'],
    },
    {
        title: 'Music Player – MERN',
        date: '2025',
        icon: <FiMusic />,
        github: 'https://github.com/tanbiee/music_player',
        bullets: [
            'Built a music player application using the MERN stack with audio playback, playlist management, and search functionality.',
            'Designed an intuitive interface for browsing, searching, and playing tracks with real-time progress tracking.',
            'Implemented efficient audio streaming delivering smooth playback with zero buffer interruptions for tracks up to 10MB.',
        ],
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
];

export default function ProjectsSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    return (
        <section className="section" id="projects" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="accent">~/</span>projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} inView={inView} />
                    ))}
                </div>

                <motion.div 
                    className="projects-footer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <a href="https://github.com/tanbiee" target="_blank" rel="noopener noreferrer" className="neon-btn github-more-btn">
                        <FiGithub /> Explore More on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
