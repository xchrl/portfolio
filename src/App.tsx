import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="font-display animate-fade-in">
      <Toaster position="top-right" />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
