import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from '../../imagenes/logo.jpg';
import BuscaProducto from '../BuscaProducto';
import './styles.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='fila-sup'>
        <div className='fila-sup-izq'></div>
        <div className='fila-sup-der'>
          <div className='direccion'>
            <LocationOnIcon sx={{'fontSize':'17px', 'marginRight':'2px'}}/>
            <p className='texto-fila-sup-der'>Av. Siempreviva 742</p>
          </div>
          <div className='whatsapp'>
            <WhatsAppIcon sx={{'fontSize':'17px', 'marginRight':'2px'}}/>
            <p className='texto-fila-sup-der'>123456789</p>
          </div>
          <div className='intagram'>
            <InstagramIcon sx={{'fontSize':'17px', 'marginRight':'2px'}}/>
            <p className='texto-fila-sup-der'>miinstagram</p>
          </div>
        </div>
      </div>

      <div className='fila-med'>
        <div className='col-1'>
          <img src={logo} alt='logo' className='logo-navbar'/>
        </div>

        <div className='col-2'>
          <BuscaProducto/>
        </div>

        <div className='col-3'>
          <div className='cont-registrate'>
            <NavLink to='/registrate' className='link-navbar'>Registrate</NavLink>
          </div>
          <div className='cont-login'>
            <NavLink to='/login' className='link-navbar'>Iniciar sesión</NavLink>
          </div>
          <div className='cont-carrito-fav'>
            <div className='cont-carrito'>
              <p className='items-carrito'>1</p>
              <ShoppingCartIcon sx={{ 'fontSize': '30px' }} />
            </div>
            <div className='cont-favoritos'>
              <p className='items-fav'>1</p>
              <FavoriteIcon sx={{ 'fontSize': '30px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar