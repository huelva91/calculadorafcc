import React from "react";
import "../estilos/BotonClear.css"

const BotonClear = (props) => (

    <div className="boton-clear">
        {props.children}
    </div>
);
export default BotonClear;