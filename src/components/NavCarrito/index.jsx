import React from 'react';
import { NavLink } from 'react-router-dom';
import logoMiCarrito from '../../imagenes/logo.jpg';

function NavCarrito() {
    return (
        <div className='nav-miCarrito'>
            <NavLink to='/' className='nav-link-miCarrito'>
                <img src={logoMiCarrito} alt='logo' className='logo-miCarrito' />
            </NavLink>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p className='p-nav'>articulos</p>
                <p className='p-nav'>deportivos</p>
            </div>
        </div>
    )
}

export default NavCarrito