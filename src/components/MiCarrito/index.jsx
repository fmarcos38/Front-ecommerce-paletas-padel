import React from 'react';
import logoMiCarrito from '../../imagenes/logo.jpg';
import './styles.css'; 
import EnvioProducto from '../EnvioProducto';

function MiCarrito() {
    return (
        <div className='cont-miCarrito'>
            <div className='nav-miCarrito'>
                <img src={logoMiCarrito} alt='logo' className='logo-miCarrito'/>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p className='p-nav'>articulos</p>
                    <p className='p-nav'>deportivos</p>
                </div>
            </div>
            
            <div className='cont-miCarrito-fila-2'>
                <div className='cont-miCarrito-fila-2-col-1'>
                    <EnvioProducto />
                </div>
                <div className='cont-miCarrito-fila-2-col-2'>
                    
                </div>
            </div>
        </div>
    )
}

export default MiCarrito