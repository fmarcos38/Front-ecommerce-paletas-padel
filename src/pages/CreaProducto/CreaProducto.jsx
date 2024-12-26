import React from 'react'
import FormCreaProducto from '../../components/FormCreaProducto';
import './styles.css';

function CreaProducto() {
    return (
        <div className='cont-crea-prod-page'>
            <h1>Crear Producto</h1>
            <FormCreaProducto />
        </div>
    )
}

export default CreaProducto