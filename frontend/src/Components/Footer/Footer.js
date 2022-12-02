import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className="footer-content-wrapper">
                <p>Made with ❤️ by Dani</p>
                <div className="socials-container">
                    <a href="https://github.com/daniportela" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/daniel-portela/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="mailto:daniel.portela96@hotmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
            </div>
        </footer>
    );
};