import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Home from "./sections/Home";

function App() {
  return (
    <div>
      <div className="w-svw font-display animate-fade-in">
        <Navbar />
        <Home />
      </div>
      <About />
    </div>
  );
}

export default App;
