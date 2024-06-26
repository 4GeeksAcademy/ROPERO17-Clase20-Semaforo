import React, { useState } from "react";

const Semaforo = () => {
  // Definir el estado para manejar la luz activa
  const [luzActiva, setLuzActiva] = useState(null);

  // Función para manejar el clic en una luz
  const iluminar = (luz) => {
    setLuzActiva(luz);
  };

  // Estilos comunes para las luces
  const estilosLuz = {
    width: "60px",
    height: "60px",
    margin: "10px auto",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div className="container text-center">
      <div
        className="rounded-circle"
        style={{
          ...estilosLuz,
         backgroundColor: luzActiva === "verde" ? "lightgreen" : "green",
        }}
        onClick={() => iluminar("verde")}
      ></div>
      <div
        className="rounded-circle"
        style={{
          ...estilosLuz,
          backgroundColor: luzActiva === "amarillo" ? "lightyellow" : "yellow",
        }}
        onClick={() => iluminar("amarillo")}
      ></div>
      <div
        className="rounded-circle"
        style={{
          ...estilosLuz,
          backgroundColor: luzActiva === "rojo" ? "lightcoral" : "red",
        }}
        onClick={() => iluminar("rojo")}
      ></div>
    </div>
  );
};

export default Semaforo;