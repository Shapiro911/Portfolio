import { Navigation } from "../Navigation/Navigation"
import styles from "./Header.module.sass"
import logo from "../../assets/images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export const Header = () => {
    return (
        <header>
            <a href="/" className={styles.logo}>
                <img src={logo} alt="logo" />
            </a>
            <Navigation />
            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/man-tunh-bui-75ba6925a/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className={styles.contactIcon} icon={faFacebookF} />
                </a>
                <a href="https://www.linkedin.com/in/man-tunh-bui-75ba6925a/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className={styles.contactIcon} icon={faLinkedinIn} />
                </a>
                <a href="mailto:maxbui0911@gmail.com" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className={styles.contactIcon} icon={faEnvelope} />
                </a>
            </div>
        </header>
    )
}