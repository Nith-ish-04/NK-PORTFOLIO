const Projects = () => {
    return (
        <section id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-header">
                        <i className="fas fa-vote-yea"></i>
                        <h3>Voting Management System</h3>
                    </div>
                    <p className="project-description">
                        A comprehensive system for managing elections, including nominations, 
                        campaigns, voting, tabulation, and security. Designed to enhance 
                        election reliability, accessibility, and security.
                    </p>
                </div>
                <div className="project-card">
                    <div className="project-header">
                        <i className="fas fa-bolt"></i>
                        <h3>Electricity Bill Calculator</h3>
                    </div>
                    <p className="project-description">
                        A user-friendly tool providing accurate monthly cost estimates based 
                        on energy consumption. Focuses on transparent cost breakdowns and 
                        empowering users to manage expenses.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Projects;
