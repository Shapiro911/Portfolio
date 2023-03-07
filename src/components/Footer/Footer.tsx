import { EMAIL } from "../../utils/const"
import styles from "./Footer.module.sass"

export const Footer = () => {
    return (
        <footer>
            <p className={styles.info}>Max Bui ©{new Date().getFullYear()} | <a className={styles.email} href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">{EMAIL}</a></p>
        </footer>
    )
}