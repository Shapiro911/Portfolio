import { EMAIL, PHONE } from "../../utils/const"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import styles from "./Contact.module.sass"

export const Contact = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1>Contact info</h1>
                <p className={styles.text}>Email: {EMAIL}</p>
                <p className={styles.text}>Phone number: {PHONE}</p>
            </main>
            <Footer />
        </>
    )
}