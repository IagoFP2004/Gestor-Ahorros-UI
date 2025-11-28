export function LineaGastos({ nombre, color }) {
  return (
    <div className="d-flex justify-content-between flex-column flex-md-row py-2">
      {/* Izquierda */}
      <div>
        <div className="d-flex align-items-center">
          <div
            className="p-1 rounded"
            style={{ backgroundColor: color, height: 40 }}
          ></div>
          <span className="ps-1">{nombre}</span>
        </div>
        <p className="mt-2 mb-0">$0</p>
      </div>

      {/* Derecha */}
      <div className="mt-2 mt-md-0 d-flex flex-wrap align-items-center justify-content-md-end">
        <input
          type="number"
          className="rounded w-50 ps-3 mb-2 mb-md-0"
          placeholder="0"
        />
        <button className="bg-dark text-white rounded me-3 ms-3 ps-4 pe-4 mb-2 mb-md-0">
          Asignar
        </button>
        <i className="bi bi-trash3 text-danger mb-2 mb-md-0"></i>
      </div>
    </div>
  );
}
