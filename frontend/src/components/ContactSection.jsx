import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import './ContactSection.css';

export default function ContactSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formsubmit.co/ajax/singh.shalini2603@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `Portfolio Contact from ${formData.name}`,
                    _template: 'table',
                }),
            });

            if (response.ok) {
                setStatus('sent');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const getButtonText = () => {
        switch (status) {
            case 'sending': return 'Sending...';
            case 'sent': return 'Message Sent!';
            case 'error': return 'Failed — Try Again';
            default: return 'send_message()';
        }
    };

    const getButtonIcon = () => {
        switch (status) {
            case 'sent': return <FiCheck />;
            case 'error': return <FiAlertCircle />;
            default: return <FiSend />;
        }
    };

    return (
        <section className="section" id="contact" ref={ref}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="accent">./</span>contact_me
                </motion.h2>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="terminal-window contact-terminal">
                            <div className="terminal-header">
                                <div className="terminal-dot red"></div>
                                <div className="terminal-dot yellow"></div>
                                <div className="terminal-dot green"></div>
                                <span className="terminal-title">contact_info.sh</span>
                            </div>
                            <div className="terminal-body">
                                <p><span className="prompt">$ </span><span className="command">echo $CONTACT_INFO</span></p>
                                <br />
                                <div className="contact-links">
                                    <a href="mailto:singh.shalini2603@gmail.com" className="contact-link">
                                        <FiMail />
                                        <span>singh.shalini2603@gmail.com</span>
                                    </a>
                                    <a href="tel:+917732889580" className="contact-link">
                                        <FiPhone />
                                        <span>+91-7732889580</span>
                                    </a>
                                    <a href="https://github.com/tanbiee" target="_blank" rel="noopener noreferrer" className="contact-link">
                                        <FiGithub />
                                        <span>github.com/tanbiee</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/shalinisinghh" target="_blank" rel="noopener noreferrer" className="contact-link">
                                        <FiLinkedin />
                                        <span>linkedin.com/in/shalinisinghh</span>
                                    </a>
                                </div>
                                <br />
                                <p><span className="prompt">$ </span><span className="cursor-line">_</span></p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass-card"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="form-title">
                            <span className="accent">&gt;</span> Send a message
                        </h3>

                        <div className="form-group">
                            <label htmlFor="name">
                                <span className="label-prefix">const</span> name <span className="label-equals">=</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder='"Your Name"'
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                <span className="label-prefix">const</span> email <span className="label-equals">=</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='"you@example.com"'
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">
                                <span className="label-prefix">const</span> message <span className="label-equals">=</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='"Hello, I would like to..."'
                                rows={5}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`neon-btn submit-btn ${status === 'sent' ? 'btn-success' : ''} ${status === 'error' ? 'btn-error' : ''}`}
                            disabled={status === 'sending'}
                        >
                            {getButtonIcon()}
                            {getButtonText()}
                        </button>

                        {status === 'sent' && (
                            <p className="form-status success">✓ Your message has been delivered to Shalini!</p>
                        )}
                        {status === 'error' && (
                            <p className="form-status error">Something went wrong. Try emailing directly instead.</p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
