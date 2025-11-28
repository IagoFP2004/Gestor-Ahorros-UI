import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Stats } from './components/Stats';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode >
        <h1 className='text-center text-gray-900'>Gestión de Ahorros</h1>
        <p className='text-center text-gray-600 mt-1'>Controla tus ingresos y gastos</p>
        <Stats />
    </StrictMode>
)