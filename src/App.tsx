import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="w-svw font-display animate-fade-in">
        <div>
          <Navbar />
          <Home />
        </div>
        <About />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
