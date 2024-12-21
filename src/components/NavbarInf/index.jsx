import React from 'react'
import { AppContext } from '../../context';
import { NavLink } from 'react-router-dom';
import './styles.css';

function NavbarInf() {

    const [muestraMenuAdmin, setMuestraMenuAdmin] = React.useState(false); //menu admin
    const context = React.useContext(AppContext); //contexto

    //función para posar sobre el menú admin y mostrarlo
    const handleMouseEnterAdmin = () => {
        setMuestraMenuAdmin(true);
    };
    //función para sacar el mouse del menú admin y ocultarlo
    const handleMouseLeaveAdmin = () => {
        setMuestraMenuAdmin(false);
    };

    return (
        <div className='fila-inf'>
            <ul className='ul-nav-inf'>
                <li>Productos</li>
                {/* menú Admin */}
                {
                    context.dataUser.admin && (
                        <li
                            className='navbar-item-admin'
                            onMouseEnter={handleMouseEnterAdmin}
                            onMouseLeave={handleMouseLeaveAdmin}
                        >
                            Admin
                            {/* menú admin */}
                            {
                                muestraMenuAdmin && (
                                    <ul className='dropdown-menu'>
                                        <li className='dropdown-item'>
                                            <NavLink to='/admin/creaPropiedad' className='link-navbar'>Crea Producto</NavLink>
                                        </li>
                                        <li className='dropdown-item'>
                                            <NavLink to='/admin/listaProductoAdmin' className='link-navbar'>Lista Propiedades</NavLink>
                                        </li>
                                    </ul>
                                )
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default NavbarInf