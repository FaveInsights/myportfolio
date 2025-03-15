
import Footer from "./components/Footer";
import { useContext } from "react";
import { Route, Routes} from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import Home from "./pages/Home";
import EdnaDashboard from "./pages/EdnaDashboard";
import CallCenterDashboard from "./pages/CallCenterDashboard";
import TelecomDashboard from "./pages/TelecomDashboard";
import Smedia from "./pages/Smedia";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme === "dark" ? "dark" : ""}`}>
     
      <Routes>
        <Route path="/" element={<Home />}></Route>
         <Route path="/edna" element={<EdnaDashboard />}></Route> 
        <Route path="callcenter" element={<CallCenterDashboard />}></Route>
        <Route path="telecom" element={<TelecomDashboard />}></Route> 
        <Route path="smedia" element={<Smedia />}></Route>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
