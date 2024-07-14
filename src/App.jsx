import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Services />
        <About />
        <Skills />
        <Testimonials />
        <Gallery />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
