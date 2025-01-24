const Contact = () => {
    return (
        <section id="contact">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <h3>Email</h3>
                        <a href="mailto:nithishkumar.s2023ai-ds@sece.ac.in">
                            nithishkumar.s2023ai-ds@sece.ac.in
                        </a>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <h3>Phone</h3>
                        <a href="tel:8122789229">8122789229</a>
                    </div>
                    <div className="contact-item">
                        <i className="fab fa-github"></i>
                        <h3>GitHub</h3>
                        <a href="https://github.com/Nith-ish-04" target="_blank">
                            github.com/Nith-ish-04
                        </a>
                    </div>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
