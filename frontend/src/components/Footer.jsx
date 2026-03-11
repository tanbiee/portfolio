import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <a href="#hero" className="footer-logo">
                        <span className="logo-bracket">&lt;</span>
                        Shalini
                        <span className="logo-bracket"> /&gt;</span>
                    </a>
                    <p className="footer-tagline">Building the future, one line of code at a time.</p>
                </div>

                <div className="footer-social">
                    <a href="https://github.com/tanbiee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/shalinisinghh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FiLinkedin />
                    </a>
                    <a href="mailto:singh.shalini2603@gmail.com" aria-label="Email">
                        <FiMail />
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>
                        Designed & Built with <FiHeart className="heart-icon" /> by Shalini Singh
                    </p>
                    <p className="footer-copy">&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
