import styles from "./Navigation.module.sass"
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <div className={styles.nav}>
            <NavLink to="/" className={({ isActive }) => { return isActive ? `${styles.active} ${styles.navLink}` : styles.navLink }}>Projects</NavLink>
            <NavLink to="/about" className={({ isActive }) => { return isActive ? `${styles.active} ${styles.navLink}` : styles.navLink }}>About me</NavLink>
            <NavLink to="/contact" className={({ isActive }) => { return isActive ? `${styles.active} ${styles.navLink}` : styles.navLink }}>Contact</NavLink>
        </div >
    )
}