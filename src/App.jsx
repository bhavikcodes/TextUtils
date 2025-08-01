import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'



function App() {
 
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({ msg: "", type: "" });
  const [themeColor, setThemeColor] = useState("");

  const handleThemeChange = (color) => {
    setThemeColor(`${color}`);
    if (color == "primary") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";

    } else if (color == "success") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b2d13ff";
      document.body.style.color = "white";

    } else if (color == "danger") {
      setMode("dark");
      document.body.style.backgroundColor = "#2c0c0cff";
      document.body.style.color = "white";

    }
  };

  
  const handleSwitch = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.color = "black"
      document.body.style.backgroundColor = "white"
      showAlert("Light mode Enabled", "success");
    }
  }

  const showAlert = (message, type) => {
    let newAlert = { msg: message, type: type };
    setAlert(newAlert);
    setTimeout(() => {
      setAlert({ msg: "", type: "" });
    }, 2000);
  }


  return (
    <>
      
        <Navbar mode={mode} handleSwitch={handleSwitch} themeColor={themeColor} handleThemeChange={handleThemeChange} alert={alert} />
        <Alert alertMessage={alert} />
        <div className="container-lg my-3" >
            <TextForm mode={mode} themeColor={themeColor} showAlert={showAlert} />
        </div>
    </>
  )
}

export default App
