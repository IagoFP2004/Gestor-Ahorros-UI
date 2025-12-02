export function Resumen() {
    return (
        <>
            <div className="d-flex justify-content-center mt-4 px-3 px-md-0">
                <div className="border rounded p-3 w-100" style={{ maxWidth: 906 }}>
                    <h4 id="caja" className="mb-5">Resumen Actual</h4>
                    <div className="d-flex justify-content-between">
                        <p>Total de gastos:</p>
                        <p>$0</p>
                    </div>
                     <div className="d-flex justify-content-between">
                        <p>Salario:</p>
                        <p>$0</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <p>Disponible:</p>
                        <p className="text-success">$0</p>
                    </div>
                    <button className="w-100 rounded bg-dark text-white p-1">Guardar Mes Actual</button>
                </div>
            </div>
        </>
    );
}