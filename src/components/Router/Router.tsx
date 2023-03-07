import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About } from "../About/About"
import { Contact } from "../Contact/Contact"
import { Projects } from "../Projects/Projects"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}