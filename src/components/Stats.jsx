export function Stats() {
    return (
        <>
            <div className="d-flex justify-content-center pt-3 gap-5 flex-wrap">
                <div
                    className="bg.card d-inline-flex flex-column rounded border p-4"
                    style={{ width: "270px" }} // 👈 ancho pequeño
                >
                    <div className="d-flex align-items-center gap-2 mb-1">
                        <div className="bg-success bg-gradient rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="currentColor"
                                className="bi bi-wallet text-white"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
                            </svg>
                        </div>
                        <p className="mb-0 text-dark fw-semibold">Ahorros</p>
                    </div>

                    <p className="mb-0 mt-1 text-dark fw-bold">5000$</p>
                </div>
                <div
                    className="bg.card d-inline-flex flex-column rounded border p-4"
                    style={{ width: "270px" }} // 👈 ancho pequeño
                >
                    <div className="d-flex align-items-center gap-2 mb-1">
                        <div className="bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </div>
                        <p className="mb-0 text-dark fw-semibold">Salario</p>
                    </div>

                    <p className="mb-0 mt-1 text-dark fw-bold">1200$</p>
                </div>
                <div
                    className="bg.card d-inline-flex flex-column rounded border p-4"
                    style={{ width: "270px" }} // 👈 ancho pequeño
                >
                    <div className="d-flex align-items-center gap-2 mb-1">
                        <div className="bg-warning bg-gradient rounded-circle p-2 d-flex align-items-center justify-content-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                fill="currentColor"
                                className="bi bi-wallet text-white"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1" />
                            </svg>
                        </div>
                        <p className="mb-0 text-dark fw-semibold">Disponible</p>
                    </div>

                    <p className="mb-0 mt-1 text-dark fw-bold">500$</p>
                </div>
            </div>
        </>
    );
}
