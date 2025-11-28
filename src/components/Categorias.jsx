import { useState } from "react";
import { LineaGastos } from "./LineaGastos";

export function Categorias() {
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [categoriasExtra, setCategoriasExtra] = useState([]);
  const agregar = () => {
    const nombreLimpio = nuevaCategoria.trim();
    if (!nombreLimpio) return;

    setCategoriasExtra((prev) => [
      ...prev,
      { nombre: nombreLimpio, color: "red" },
    ]);

    setNuevaCategoria("");
  };


  return (
    <>
      <div className="d-flex justify-content-center mt-4 px-3 px-md-0">
        <div className="border rounded p-3 w-100" style={{ maxWidth: 906 }}>
          <h4 id="caja" className="mb-5">Categorías de Gastos</h4>

          <LineaGastos nombre={"Comida"} color={"red"} />
          <LineaGastos nombre={"Transporte"} color={"green"} />
          <LineaGastos nombre={"Vivienda"} color={"violet"} />
          <LineaGastos nombre={"Entrenamiento"} color={"orange"} />

          {categoriasExtra.map((cat, index) => (
            <LineaGastos key={index} nombre={cat.nombre} color={cat.color} />
          ))}

          <hr />

          <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 mt-2">
            <input
              id="nuevaCategoria"
              type="text"
              className="bg-light rounded w-100"
              style={{ maxWidth: 750 }}
              placeholder="Nueva categoría"
              value={nuevaCategoria}
              onChange={(e) => setNuevaCategoria(e.target.value)}
            />
            <button onClick={agregar} className="bg-dark text-white rounded ps-2 pe-2">
              <i className="bi bi-plus me-1"></i>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}