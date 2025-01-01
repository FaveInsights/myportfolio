import Header from "./components/Header";
import Footer from "./components/Footer";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import Home from "./pages/Home";
import EdnaDashboard from "./pages/EdnaDashboard";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme === "dark" ? "dark" : ""}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/edna" element={<EdnaDashboard />}></Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
