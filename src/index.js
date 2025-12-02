import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Stats } from './components/Stats';
import { AgregadoRapido } from './components/AgregadoRapido';
import { Categorias } from './components/Categorias';
import { Resumen } from './components/Resumen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode >
        <div>
            <h1 className='text-center text-gray-900'>Gestión de Ahorros</h1>
            <p className='text-center text-gray-600 mt-1'>Controla tus ingresos y gastos</p>
            <Stats />
            <AgregadoRapido />
            <Categorias />
            <Resumen />
        </div>
    </StrictMode>
)