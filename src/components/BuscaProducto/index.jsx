//componente para buscar productos
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';

function BuscaProducto() {
    const [busqueda, setBusqueda] = useState('');
    
    const handleChange = (e) => {
        setBusqueda(e.target.value);
    }
    
    return (
        <div className='cont-busca-producto'>
            <input
                type='text'
                placeholder='Buscar productos...'
                value={busqueda}
                onChange={handleChange}
                className='input-busca'
            />
            <SearchIcon sx={{ 'fontSize': '20px', 'cursor': 'pointer' }} />
        </div>
    )
}

export default BuscaProducto;