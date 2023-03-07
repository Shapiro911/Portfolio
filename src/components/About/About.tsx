import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import styles from "./About.module.sass"
import skillsJson from "../../assets/json/skills.json"

export const About = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <img alt="foto" className={styles.foto} src={""} />
                <div className={styles.about}>
                    <h1 className={styles.title}>Hey There, I am Max</h1>
                    <h4 className={styles.prof}>Fullstack developer</h4>
                    <p className={styles.description}>I am a Junior Fullstack Developer and an Asian-Ukrainian refugee, who is looking for an opportunity to continue growing as an engineer and get practical experience, while studying.</p>
                    <h4 className={styles.skills}>Skills:</h4>
                    <ul className={styles.skillList}>
                        {skillsJson?.skills?.map((skill) => {
                            return <li className={styles.skill}>{skill}</li>
                        })}
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    )
}