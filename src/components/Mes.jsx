export function Mes() {
    return (
        <div className="border rounded p-3">
            <div className="d-flex justify-content-between">
                <h5>Diciembre 2025</h5>
                <i class="bi bi-trash text-danger"></i>
            </div>
            <div className="row mt-4 text-center">
                <div className="col-6 col-md-3">
                    <p>Salario:</p>
                    <p>$0</p>
                </div>

                <div className="col-6 col-md-3">
                    <p>Gastos:</p>
                    <p>$0</p>
                </div>

                <div className="col-6 col-md-3">
                    <p>Ahorros</p>
                    <p>$0</p>
                </div>

                <div className="col-6 col-md-3">
                    <p>Restante</p>
                    <p className="text-success">$0</p>
                </div>
            </div>

        </div>
    );
}