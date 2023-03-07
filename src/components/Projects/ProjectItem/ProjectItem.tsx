import { Project } from "../../../interfaces/Portfolio.interface"
import { useState } from "react";
import { Waypoint } from "react-waypoint"
import styles from "./ProjectItem.module.sass"
import Title from "react-vanilla-tilt"

export const ProjectItem = ({ project, side }: { project: Project, side: string }) => {
    const [transition, setTransition] = useState<boolean>(false);

    return (
        <Waypoint onEnter={() => setTransition(true)}>
            {side === "projectRight" ?
                <a href={project.link} className={`${styles.project} ${transition ? styles[side] : ""}`} target="_blank" rel="noreferrer">
                    <Title options={{ glare: true }} className={styles.tilt}>
                        <div className={styles.projectInfo}>
                            <h2 className={styles.name}>{project.name}</h2>
                            <p className={styles.description}>{project.description}</p>
                        </div>
                        <img alt="project" src={require("../../../assets/images/" + project.image)} className={styles.image} />
                    </Title>
                </a>
                :
                <a href={project.link} className={`${styles.project} ${transition ? styles[side] : ""}`} target="_blank" rel="noreferrer">
                    <Title className={styles.tilt}>
                        <img alt="project" src={require("../../../assets/images/" + project.image)} className={styles.image} />
                        <div className={styles.projectInfo}>
                            <h2 className={styles.name}>{project.name}</h2>
                            <p className={styles.description}>{project.description}</p>
                        </div>
                    </Title>
                </a>
            }
        </Waypoint>
    )
}