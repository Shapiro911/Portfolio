import { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Project } from "../../interfaces/Portfolio.interface"
import styles from "./Projects.module.sass"
import projectsJson from "../../assets/json/projects.json"
import { ProjectItem } from "./ProjectItem/ProjectItem"

export const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(projectsJson);
    }, [])

    return (
        <>
            <Header />
            <main className={styles.main}>
                {projects?.map((project, index) => {
                    return (
                        <div key={project.name}>
                            {index % 2 === 0 ?
                                <ProjectItem project={project} side="projectRight" />
                                :
                                <ProjectItem project={project} side="projectLeft" />
                            }
                        </div>
                    )
                })}
            </main>
            <Footer />
        </>
    )
}