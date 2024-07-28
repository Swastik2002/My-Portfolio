import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
// import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Enabled Dark Mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Disabled Dark Mode", "success");
    }
  };

  return (
    <>
      <Navbar title={"Swastik"} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Home mode={mode} /> 
      {/* <About  mode={mode} />  */}
      <Contact  mode={mode} />
    </>
  );
}

export default App;
