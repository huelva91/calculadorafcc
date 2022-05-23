import "./App.css";
import fccLogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("No hay nada que calcular");
    }
  };

  return (
    <div className="App">
      <div className="ffc-logo-contenedor">
        <img className="ffc-logo" src={fccLogo} alt="Logo de FFC" />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClicks={agregarInput}>1</Boton>
          <Boton manejarClicks={agregarInput}>2</Boton>
          <Boton manejarClicks={agregarInput}>3</Boton>
          <Boton manejarClicks={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClicks={agregarInput}>4</Boton>
          <Boton manejarClicks={agregarInput}>5</Boton>
          <Boton manejarClicks={agregarInput}>6</Boton>
          <Boton manejarClicks={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClicks={agregarInput}>7</Boton>
          <Boton manejarClicks={agregarInput}>8</Boton>
          <Boton manejarClicks={agregarInput}>9</Boton>
          <Boton manejarClicks={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClicks={calcularResultado}>=</Boton>
          <Boton manejarClicks={agregarInput}>0</Boton>
          <Boton manejarClicks={agregarInput}>.</Boton>
          <Boton manejarClicks={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
