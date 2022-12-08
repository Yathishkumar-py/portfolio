import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/ NavBar";
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
import Projects from "./components/Projects"
import MySkills from "./components/MySkills"
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<MySkills />} />
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}


export default App;
