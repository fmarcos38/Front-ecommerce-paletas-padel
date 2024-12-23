import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import './styles.css';

function Footbar() {
  return (
    <div className='cont-footbar'>
      <div className='cont-suscripcion'>
        <h2 className='h2-suscripcion'>¡Recibí las mejores ofertas!</h2>
        <div className='cont-input-suscripcion'>
          <input type='email' placeholder='Tu email' className='input-suscripcion'/>
          <button className='btn-suscripcion'>Suscribirme</button>
        </div>
        <InstagramIcon sx={{ 'fontSize': '30px', 'marginLeft': '10px' }} />
      </div>

      <div className='linea'></div>

      <div className='cont-info'>
        <div className='cont-col-1'>
          <h2 className='h2-info'>Marcas</h2>
          <p className='p-info'>Bull Padel</p>
          <p className='p-info'>Nox</p>
        </div>
        
        <div className='cont-col-2'>
          <h2 className='h2-info'>Información</h2>
          <p className='p-info'>¿Cómo comprar?</p>
          <p className='p-info'>¿Cómo pagar?</p>
          <p className='p-info'>¿Cómo me llega?</p>
        </div>

        <div className='cont-col-3'>
          <h2 className='h2-info'>Contacto</h2>
          <p className='p-info'>Teléfono: 123456789</p>
          <p className='p-info'>Email: pp@pp.com</p>
          <p className='p-info'>Dirección: adadada 888</p>
        </div>
      </div>
    </div>
  )
}

export default Footbar