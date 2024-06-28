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
  const estiloSemaforo = {
    width: "100px",
    backgroundColor: "gray",
    padding: "20px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div className="container text-center">
      <div className="d-flex justify-content-center" style={estiloSemaforo}>
      <div
        className="rounded-circle"
        style={{
          ...estilosLuz,
         backgroundColor: luzActiva === "rojo" ? "lightcoral" : "red",
        }}
        onClick={() => iluminar("rojo")}
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
          backgroundColor: luzActiva === "verde" ? "lightgreen" : "green",
        }}
        onClick={() => iluminar("verde")}
      ></div>
      </div>
    </div>
  );
};

export default Semaforo;