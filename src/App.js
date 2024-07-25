import Home from "./pages/home"
import About from "./pages/about"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { Link } from "react-scroll"

const App = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        // <BrowserRouter>
        // <nav>
        //     <Link to={"/"}></Link>
        //     <Link to={"/about"}></Link>
        // </nav>
        //     <Router>
        //         <Routes>
        //             <Route path="/" element={<Home />} />
        //             <Route path="/about" element={<About />} />
        //         </Routes>
        //     </Router>
        // </BrowserRouter>
        <div>
            <Home />
            <nav>
                <Link to={"/"}></Link>
                <Link to={"/about"}></Link>
            </nav>
        </div>

    )
}

export default App
