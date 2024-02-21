import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <main className=" w-screen min-h-screen bg-primary flex flex-col">
      <div>
        <Navbar />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
