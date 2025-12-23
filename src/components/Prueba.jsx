import React, { useState, useEffect } from "react";

export function Prueba() {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch(
          "https://juego-impostor-api-node-r70onvie1-iagofp2004s-projects.vercel.app/api/words"
        );
        if (!response.ok) {
          throw new Error(`Error en la consulta: ${response.status}`);
        }
        const data = await response.json();
        setWords(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  return (
    <div className="border rounded p-4 max-w-md mx-auto mt-6 shadow-lg bg-white">
      <h1 className="text-xl font-bold mb-3 text-center">Prueba Componente</h1>

      {loading && (
        <p className="text-center text-blue-500 animate-pulse">Cargando datos...</p>
      )}

      {error && (
        <p className="text-center text-red-500 font-semibold">
          Error: {error.message}
        </p>
      )}

      {!loading && !error && words.length === 0 && (
        <p className="text-center text-gray-500">No se encontraron palabras.</p>
      )}

      {words.length > 0 && (
        <ul className="list-disc pl-5 mt-3">
          {words.map((item) => (
            <li key={item.id}>{item.word}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
