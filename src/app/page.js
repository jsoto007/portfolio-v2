import Haeder from "./haeder"
import About from "./about"
import NavBar from "./navBar"
import Projects from "./projects"
import Footer from "./footer"



export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto ">
      <NavBar />
      <Haeder />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}
