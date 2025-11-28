export function AgregadoRapido() {
  return (
    <div className="mt-4 d-flex justify-content-center px-3">
      <div
        className="border rounded p-4 w-100"
        style={{ maxWidth: 906 }} // ≈ ancho de las 3 cards de Stats
      >
        <h4 className="mb-3">
          <i className="bi bi-cash text-primary ps-2 pe-2"></i>
          Agregar Gastos Rápidos
        </h4>

        <div className="row g-2 align-items-center mt-5">
          {/* Descripción */}
          <div className="col-12 col-md-5">
            <input
              type="text"
              className="rounded bg-light w-100 ps-4"
              placeholder="Descripcion (ej:almuerzo)"
            />
          </div>

          {/* Monto */}
          <div className="col-6 col-md-2">
            <input
              type="number"
              className="rounded bg-light w-100 ps-2"
              placeholder="Monto"
            />
          </div>

          {/* Categoría */}
          <div className="col-6 col-md-3">
            <select
              className="rounded bg-light w-100 ps-2"
              defaultValue=""
            >
              <option value="" disabled>
                Categoria
              </option>
              <option>Comida</option>
              <option>Transporte</option>
              <option>Vivienda</option>
              <option>Entrenamiento</option>
            </select>
          </div>

          {/* Botón */}
          <div className="col-12 col-md-2 d-grid">
            <button className="bg-dark text-white rounded ps-2 pe-2">
              <i className="bi bi-plus me-1"></i>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
