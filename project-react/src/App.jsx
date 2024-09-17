import { useState } from "react";
import yoMera from "./assets/yo mera.jpeg";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Componente (siempre inicia con mayúsculass)
function App() {
  const [count, setCount] = useState(0);
  const buttonStyle = {
    padding: 10,
    border: "1px solid white",
    borderRadius: 40,
    backgroundColor: "green",
  };
  const handleClick = () => {
    console.log("se hizo click en botón");
  };

  // Todo lo del return es JSX
  return (
    <>
      <h1 className="" style={{ color: "blueviolet", marginTop: 40 }}>
        Hola, bienvenidx a la clase 3
      </h1>
      <button style={buttonStyle} onClick={handleClick}>
        Press me
      </button>
      <img src={yoMera} style={{ with: 400, height: 400 }} alt="foto" />
      <hr />
      <div className="container">
        <span style={{ color: "violet" }}>Así va la cosa</span>
      </div>
    </>
  );
}

export default App;
