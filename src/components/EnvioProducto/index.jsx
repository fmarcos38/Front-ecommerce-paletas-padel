import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import imgCorreoArg from '../../imagenes/delivery_correoargentino.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './styles.css';

function EnvioProducto() {
    return (
        <div className='cont-envio-producto'>
            <div className='como-te-entregamos-la-compra'>
                <div className='como-te-entregamos-la-compra-fila-1'>
                    <p className='numero1'>1</p>
                    <p className='p-texto'>¿COMO TE ENTREGAMOS LA COMPRA?</p>
                </div>
                <div className='como-te-entregamos-la-compra-fila-2'>
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                        <p>INGRESÁ TU CÓDIGO POSTAL</p>
                    </div>
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                        <button className='btn-calcular-envio'>Buscar código</button>
                    </div>
                </div>
                <div className='como-te-entregamos-la-compra-fila-3'>
                    <input type='text' className='input-codigo-postal' />
                </div>
            </div>

            <div className='cont-result-busqueda-codigo-postal'>
            <h3>Encontramos las siguientes opciones disponibles:</h3>
                <div className='cont-result-busqueda-codigo-postal-f1'>
                    <div className='cont-envio-producto-fila-4-f1-col-1'>
                        <LocalShippingIcon className='icono-transporte' />
                        <div className='cont-p-despacho-Y-tranporte'>
                            <p className='p-despacho'>Despacho a todo el país</p>
                            <p className='p-transporte'>Transporte a convenir</p>
                        </div>
                    </div>
                    
                    <div className='cont-envio-producto-fila-4-f1-col-2'>
                        <input type='radio' className='radio'/>
                    </div>
                </div>

                <div className='cont-result-busqueda-codigo-postal-f2'>
                    <div className='cont-envio-producto-fila-4-f1-col-1'>
                        <img src={imgCorreoArg} alt='' className='img-correo-arg' />
                        <div className='cont-p-despacho-Y-tranporte'>
                            <p className='p-despacho'>A Domicilio - Standar</p>
                            <p className='p-transporte'>Costo de envío ${}</p>
                            <p className='p-transporte'>A partir del despacho {} días hábiles</p>
                        </div>
                    </div>
                    
                    <div className='cont-envio-producto-fila-4-f1-col-2'>
                        <input type='radio' className='radio'/>
                    </div>
                </div>

                <div className='cont-result-busqueda-codigo-postal-f3'>
                    <div className='cont-envio-producto-fila-4-f1-col-1'>
                        <LocationOnIcon className='icono-transporte'/>
                        <div className='cont-p-despacho-Y-tranporte'>
                            <p className='p-despacho'>Retiro personalmente</p>
                            <p className='p-transporte'>Av Idpendencia 2121</p>
                            <p className='p-transporte' style={{color: 'green'}}>Gratis</p>
                        </div>
                    </div>

                    <div className='cont-envio-producto-fila-4-f1-col-2'>
                        <input type='radio' className='radio' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnvioProducto