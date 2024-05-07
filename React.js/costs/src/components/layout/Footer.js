import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2024
            </p>
            <div className={styles.authorship}>
                <p>Reproduzido de:</p>
                <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/@MatheusBattisti'><span className={styles.font}>Hora de codar</span></a>
                <p>por:</p>
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/dornelesfernando'><span className={styles.creator}>Dorneles, Fernando</span></a>
            </div>
        </footer>
    )
}

export default Footer;