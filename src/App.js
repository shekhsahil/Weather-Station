import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import Cards from "./Components/Cards";
import About from "./Components/About";
import Graphs from "./Components/Graphs";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";
import soundPath from "./sound.mp3";

function App() {
  const initialTheme = localStorage.getItem("theme") || "light";
  const initialtext = localStorage.getItem("Dark 🌙") || "Dark 🌙";
  const initialvariant = localStorage.getItem("dark") || "dark";

  const [theme, setTheme] = useState(initialTheme);
  const [btntext, setbtntext] = useState(initialtext);
  const [variant, setvariant] = useState(initialvariant);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("Dark 🌙", btntext);
    localStorage.setItem("dark", variant);

    document.body.setAttribute("data-theme", theme);
  }, [theme, btntext, variant]);

  const toggle = () => {
    const sound = new Audio(soundPath);
    sound.play();
    navigator.vibrate(90);

    setTheme(theme === "light" ? "dark" : "light");
    setbtntext(theme === "light" ? "Light 💡" : "Dark 🌙");
    setvariant(theme === "light" ? "primary" : "dark");
  };

  return (
    <>
      <Navbar />
      <Alert />
      <center>
        <Button variant={variant} onClick={toggle} >
          {" "}
          {btntext + " Mode"}
        </Button>
        <br />
        <br />
        <About />
      </center>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="/Graphs" element={<Graphs />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
