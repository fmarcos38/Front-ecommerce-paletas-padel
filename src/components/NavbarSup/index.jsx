import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import './styles.css';

function NavbarSup() {
    return (
        <div className='fila-sup'>
            <div className='fila-sup-izq'></div>
            <div className='fila-sup-der'>
                <div className='direccion'>
                    <LocationOnIcon sx={{ 'fontSize': '17px', 'marginRight': '2px' }} />
                    <p className='texto-fila-sup-der'>Av. Siempreviva 742</p>
                </div>
                <div className='whatsapp'>
                    <WhatsAppIcon sx={{ 'fontSize': '17px', 'marginRight': '2px' }} />
                    <p className='texto-fila-sup-der'>123456789</p>
                </div>
                <div className='intagram'>
                    <InstagramIcon sx={{ 'fontSize': '17px', 'marginRight': '2px' }} />
                    <p className='texto-fila-sup-der'>miinstagram</p>
                </div>
            </div>
        </div>
    )
}

export default NavbarSup