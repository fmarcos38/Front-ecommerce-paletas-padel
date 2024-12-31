import React from 'react'
import CarruselDetalle from '../CarruselDetalle';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './styles.css';


function DetalleProd({producto}) {
    
    return (
        <div className='cont-detalle-prod'>
            {/* prod y carrito */}
            <div className='cont-producto-Y-carrito'>
                {/* col-1 */}
                <div className='cont-producto-Y-carrito-col-1'>
                    <div className='img-prod-detalle'>
                        {producto?.imagenes && <CarruselDetalle imagenes={producto.imagenes} />}
                    </div>
                    <div className='desc-prod-detalle'>
                        <h2>Descripcion del producto</h2>
                        {/* embeber código html en etiqta <p>*/}
                        <p 
                            dangerouslySetInnerHTML={{ __html: producto?.descripcion }}
                            style={{padding: '0 10px'}}
                        ></p>
                    </div>
                </div>

                {/* col-2 */}
                <div className='cont-col-2'>
                    <div className='cont-producto-Y-carrito-col-2'>
                        <div className='info-prod-detalle'>
                            <h2 className='nombre-prod-detalle'>{producto?.nombre}</h2>
                            <p className='precio-prod-detalle'>Precio: ${producto?.precio}</p>
                            <div className='cont-retira-prod-detalle'>
                                <StoreIcon />
                                <p className='retira-prod-detalle'>Retira gratis por nuestro domicilio</p>
                            </div>
                            <div className='cont-envio-prod-detalle'>
                                <LocalShippingIcon />
                                <p className='envio-prod-detalle'>Envio a todo el pais</p>
                            </div>
                            <div className='cont-medios-pago-prod-detalle'>
                                <CreditCardIcon />
                                <p className='medios-pago-prod-detalle'>Medios de pago</p>
                            </div>
                            {/* componente cant a comprar y stock disp */}
                            <p className='stock-prod-detalle'>Stock: </p>
                        </div>
                        <div className='btns-prod-detalle'>
                            <button className='btn-comprar-detalle'>Comprar</button>
                            <button className='btn-agrega-carrito-detalle'>Agregar al carrito</button>
                        </div>
                    </div>
                    {/* medios de pagos */}
                    <div className='con-medios-de-pago'>
                        <h2>Medios de pago</h2>
                        <div>
                            <h4>Con tarjeta de crédito</h4>
                            <img src='https://res.cloudinary.com/dyoyk3bwj/image/upload/v1735673153/tarjetas_n9jsg7.png' alt='logo-mercado-pago' />
                        </div>
                        <div>
                            <h4>Con tarjeta de débito</h4>
                            <img src='https://res.cloudinary.com/dyoyk3bwj/image/upload/v1735673153/tarjetas_n9jsg7.png' alt='logo-mercado-pago' />
                        </div>
                        <div>
                            <h4>Transferencias</h4>
                            <img src='https://res.cloudinary.com/dyoyk3bwj/image/upload/v1735673153/tarjetas_n9jsg7.png' alt='logo-mercado-pago' />
                        </div>
                    </div>
                    {/* politicas de cambio/devolucion */}
                    <div className='cont-politicas-cambio-devolucion'>
                        <a href='/policasDeCambio' className='link-politicas'>
                            Políticas de Garantías, Cambios y Devoluciones
                        </a>
                    </div>
                </div>
            </div>
            {/* te puede interesar */}
            <div className='cont-te-puede-interesar'>
                TE puede interesar
            </div>
        </div>
    )
}

export default DetalleProd