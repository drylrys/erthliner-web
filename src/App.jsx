import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Advocacy from "./pages/Advocacy";
import Employee from "./pages/Employee";
import Faq from "./pages/Faq";
import Service from "./pages/Service";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-people" element={<Employee />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
