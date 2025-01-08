import React from 'react'
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from '../../imagenes/logo.jpg';
import BuscaProducto from '../BuscaProducto';
import LogoutIcon from '@mui/icons-material/Logout';
import './styles.css';

function NavbarMed({usuario, isOpen, menuRef, menuItemsRef, toggleMenu, handleLogOut, contCarrito=0, contFav=0}) {
    
    return (
        <div className='fila-med'>
            {/* menu hambur y desplegable P.Chica */}
            <div className='col-1'>
                {/* menu hambur P.Chica */}
                <div
                    className={`menu-icon ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    ref={menuRef}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* desplegable P.Chica */}
                <div className="menu-desplegable">
                    {
                        isOpen && (
                            <ul className='ul-lista-pChica'>
                                {/* opc ADMIN */}
                                {
                                    usuario.dataUser.admin && (
                                        <>
                                            <li className='items-pChica'>
                                                <NavLink
                                                    to='/admin/creaProd'
                                                    className='link-navbar'
                                                    ref={el => menuItemsRef.current[0] = el}
                                                >
                                                    Crea Producto
                                                </NavLink>
                                            </li>
                                            <li className='items-pChica'>
                                                <NavLink
                                                    to='/admin/listaProdsAdmin'
                                                    className='link-navbar'
                                                    ref={el => menuItemsRef.current[1] = el}
                                                >
                                                    Lista Propiedades
                                                </NavLink>
                                            </li>
                                        </>
                                    )
                                }
                                <li className='items-pChica'>
                                    <NavLink
                                        to='/productos'
                                        className='link-navbar'
                                        ref={el => menuItemsRef.current[2] = el}
                                    >
                                        Productos
                                    </NavLink>
                                </li>
                                {/* login/logout */}
                                {
                                    usuario.dataUser.nombre ? (
                                        <li className='items-pChica'>
                                            <button
                                                onClick={() => { handleLogOut() }}
                                                style={{ border: 'none', backgroundColor: 'transparent' }}
                                            >
                                                <LogoutIcon sx={{ 'fontSize': '18px', 'color': 'white' }} />
                                            </button>
                                        </li>
                                    ) : (
                                        <li className='items-pChica'>
                                            <NavLink
                                                to='/login'
                                                className='link-navbar'
                                                ref={el => menuItemsRef.current[3] = el}
                                            >
                                                Login
                                            </NavLink>
                                        </li>
                                    )
                                }
                                <li className='items-pChica'>
                                    <NavLink
                                        to='/registrarse'
                                        className='link-navbar'
                                        ref={el => menuItemsRef.current[4] = el}
                                    >
                                        Registrarse
                                    </NavLink>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </div>
            {/* logo */}
            <div className='col-2'>
                <NavLink to='/'>
                    <img src={logo} alt='logo' className='logo-navbar' />
                </NavLink>
            </div>
            {/* busca prod */}
            <div className='col-3'>
                <BuscaProducto />
            </div>
            {/* regist, log, carrito, fav */}
            <div className='col-4'>
                <div className='cont-registrate'>
                    {
                        usuario?.nombre ? 
                        <p>Hola {usuario.nombre}</p> :
                        <NavLink to='/registrarse' className='link-navbar'>Registrate</NavLink>
                    }
                </div>
                <div className='cont-login'>
                    {
                        usuario?.nombre ? 
                        <button
                            onClick={() => { handleLogOut() }}
                            style={{ border: 'none', backgroundColor: 'transparent' }}
                        >
                            <LogoutIcon sx={{ 'fontSize': '30px' }} />
                        </button> :
                        <NavLink to='/login' className='link-navbar'>Iniciar sesión</NavLink>
                    }
                </div>
                <div className='cont-carrito-fav'>
                    <div className='cont-carrito'>
                        <p className='items-carrito'>{contCarrito}</p>
                        <ShoppingCartIcon sx={{ 'fontSize': '30px' }} />
                    </div>
                    <div className='cont-favoritos'>
                        <p className='items-fav'>{contFav}</p>
                        <FavoriteIcon sx={{ 'fontSize': '30px' }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavbarMed