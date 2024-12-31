import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import About from './components/About';
import Projects from './components/Projects';
import Dashboards from './components/Dashboards';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme === "dark" ? "dark" : ""}`}>
      
      <Header />
      <Hero />
      <About />
      <Projects />
      <Dashboards />
      <Footer />
    </main>
  );
}

export default App
