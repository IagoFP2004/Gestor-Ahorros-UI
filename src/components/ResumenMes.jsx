import { Mes } from "./Mes";

export function ResumenMes() {
    return (
        <>
            <div className="d-flex justify-content-center mt-4 px-3 px-md-0 mb-5">
                <div className="border rounded p-3 w-100" style={{ maxWidth: 906 }}>
                    <h4>Resumen Mes a Mes</h4>
                    <Mes />
                </div>
            </div>
        </>
    );
}