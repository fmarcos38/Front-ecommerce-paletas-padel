import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from '../../imagenes/logo.jpg';
import BuscaProducto from '../BuscaProducto';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppContext } from '../../context';
import './styles.css';

function NavbarMed({usuario, isOpen, menuRef, menuItemsRef, toggleMenu, handleLogOut, itemsCarrito=0, itemsFavoritos=0}) {

    const context = useContext(AppContext);
    const [muestraMenuAdmin, setMuestraMenuAdmin] = React.useState(false); //menu admin
    const handleOnClickCarrito = () => {
        context.onClickCarrito();
    }
    //función para posar sobre el menú admin y mostrarlo
    const handleMouseEnterAdmin = () => {
        setMuestraMenuAdmin(true);
    };
    //función para sacar el mouse del menú admin y ocultarlo
    const handleMouseLeaveAdmin = () => {
        setMuestraMenuAdmin(false);
    };

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
                                    usuario?.isAdmin && (
                                        <>
                                            <li className='items-pChica'>
                                                <NavLink
                                                    to='/admin/creaProd'
                                                    className='link-navbar'
                                                    /* ref={el => menuItemsRef.current[0] = el} */
                                                >
                                                    Crea producto
                                                </NavLink>
                                            </li>
                                            <li className='items-pChica'>
                                                <NavLink
                                                    to='/admin/listaProdsAdmin'
                                                    className='link-navbar'
                                                    /* ref={el => menuItemsRef.current[1] = el} */
                                                >
                                                    Lista productos
                                                </NavLink>
                                            </li>
                                        </>
                                    )
                                }
                                {/* productos */}
                                <li className='items-pChica'>
                                    <NavLink
                                        to='/muestraPaletas'
                                        className='link-navbar'
                                        /* ref={el => menuItemsRef.current[2] = el} */
                                    >
                                        Paletas
                                    </NavLink>
                                </li>
                                <li className='items-pChica'>
                                    <NavLink
                                        to='/muestraPelotas'
                                        className='link-navbar'
                                        /* ref={el => menuItemsRef.current[3] = el} */
                                    >
                                        Pelotas
                                    </NavLink>
                                </li>
                                <li className='items-pChica'>
                                    <NavLink
                                        to='/muestraBolzos'
                                        className='link-navbar'
                                        /* ref={el => menuItemsRef.current[4] = el} */
                                    >
                                        Bolzos
                                    </NavLink>
                                </li>
                                <li className='items-pChica'>
                                    <NavLink
                                        to='/muestraZapatillas'
                                        className='link-navbar'
                                        /* ref={el => menuItemsRef.current[5] = el} */
                                    >
                                        Zapatillas
                                    </NavLink>
                                </li>
                                {
                                    usuario?.isAdmin === false && (
                                        <>
                                            {/* favoritos */}
                                            <li className='items-pChica'>
                                                <NavLink
                                                    to='/favoritos'
                                                    className='link-navbar'
                                                    /* ref={el => menuItemsRef.current[6] = el} */
                                                >
                                                    Tus Favoritos
                                                </NavLink>
                                            </li>
                                        </>
                                    )
                                }
                                {/* login/logout */}
                                {
                                    usuario?.nombre ? (
                                        <li className='items-pChica'>
                                            <button
                                                onClick={() => { handleLogOut() }}
                                                style={{ border: 'none', backgroundColor: 'transparent' }}
                                                /* ref={el => menuItemsRef.current[7] = el} */
                                            >
                                                <LogoutIcon sx={{ 'fontSize': '18px', 'color': 'white' }} />
                                            </button>
                                        </li>
                                    ) : (
                                            <>
                                                <li className='items-pChica'>
                                                    <NavLink
                                                        to='/login'
                                                        className='link-navbar'
                                                        /* ref={el => menuItemsRef.current[8] = el} */
                                                    >
                                                        Login
                                                    </NavLink>
                                                </li>
                                                {/* registrarse */}
                                                <li className='items-pChica'>
                                                    <NavLink
                                                        to='/registrarse'
                                                        className='link-navbar'
                                                        /* ref={el => menuItemsRef.current[9] = el} */
                                                    >
                                                        Registrarse
                                                    </NavLink>
                                                </li>
                                            </>
                                    )
                                }
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
                            <ul className='ul-nav-med'>
                                <li 
                                    className='navbar-item-admin'
                                    onMouseEnter={handleMouseEnterAdmin}
                                    onMouseLeave={handleMouseLeaveAdmin}
                                >
                                    <p className='nombreUsuario'>{usuario.nombre}</p>
                                    {/* menú admin */}
                                    {
                                        muestraMenuAdmin && (
                                            <ul className='dropdown-menu-usuario'>
                                                <li className='dropdown-item-admin'>
                                                    <NavLink to='/actualizarContraseña' className='link-navbar-usuario'>Cambiar contraseña</NavLink>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </li>
                            </ul>
                        :
                        <NavLink to='/registrarse' className='link-navbar'>Registrate</NavLink>
                    }
                </div>
                <div className='cont-login'>
                    {
                        usuario?.nombre ? 
                        <button
                            onClick={() => { handleLogOut() }}
                            style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer' }}
                        >
                            <LogoutIcon sx={{ 'fontSize': '30px' }} />
                        </button> :
                        <NavLink to='/login' className='link-navbar'>Iniciar sesión</NavLink>
                    }
                </div>
                <div className='cont-carrito-fav'>
                    <div className='cont-carrito'>
                        <p className='items-carrito'>{itemsCarrito}</p>
                        <button type='button' onClick={handleOnClickCarrito} className='btn-carrito'>
                            <ShoppingCartIcon sx={{ 'fontSize': '30px' }} />
                        </button>
                    </div>
                    <div className='cont-favoritos'>
                        <p className='items-fav'>{itemsFavoritos}</p>
                        <NavLink to='/favoritos' className='link-navbar-inf'>
                            <FavoriteIcon sx={{ 'fontSize': '30px' }} />
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NavbarMed