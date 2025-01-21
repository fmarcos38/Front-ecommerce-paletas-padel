import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCarrito } from '../../redux/actions/actions';
import { userData } from '../../localStorage';
import imgMercadoPago from '../../imagenes/payment_mercadopago.png';
import ResumenCompra from '../ResumenCompra';
import CheckIcon from '@mui/icons-material/Check';
import NavCarrito from '../NavCarrito';


function ComoPagar() {

    const cliente= userData();
    const carrito = useSelector(state => state.carrito);
    const dispatch = useDispatch();

    //funcion onClick vuelvo a la página anterior
    const handleClickVolver = () => {
        window.history.back();
    }

    useEffect(() => {
        if(cliente){
            dispatch(getCarrito(cliente.user.id));
        }
    }, [cliente, dispatch]);


    return (
        <div className='cont-miCarrito'>
            <NavCarrito />
            <div className='cont-envio-producto'>
                <div className='cont-envio-producto-col-1'>
                    <div className='como-te-entregamos-la-compra'>
                        {/* forma de envio - con check - */}
                        <div className='como-te-entregamos-la-compra-fila-1'>
                            <p className='numero1'>
                                <CheckIcon sx={{ color: 'green' }} />
                            </p>
                            <p className='p-texto'>¿COMO TE ENTREGAMOS LA COMPRA?</p>
                        </div>
                    </div>

                    {/* ver de sicronizar con MERCADO PAGO */}
                    <div className='cont-result-busqueda-codigo-postal'>
                        <h3 className='titulo-result-busqueda'>¿COMO QUERES PAGAR?</h3>
                        <p style={{ margin: '0' }}>Seleccioná el medio</p>
                        <div className='cont-result-busqueda-codigo-postal-f1'>
                            <div className='cont-envio-producto-fila-4-f1-col-1'>
                                <img src={imgMercadoPago} alt='not found' className='img-correo-arg' />
                                <div className='cont-p-despacho-Y-tranporte'>
                                    <p className='p-despacho'>Mercadopago</p>
                                    <p className='p-transporte'>Tarjeta de crédito</p>
                                </div>
                            </div>

                            <div className='cont-envio-producto-fila-4-f1-col-2'>
                                <input type='radio' className='radio' />
                            </div>
                        </div>

                        <div className='cont-result-busqueda-codigo-postal-f2'>
                            <div className='cont-envio-producto-fila-4-f1-col-1'>
                                <img src={imgMercadoPago} alt='' className='img-correo-arg' />
                                <div className='cont-p-despacho-Y-tranporte'>
                                    <p className='p-despacho'>Mercadopago</p>
                                    <p className='p-transporte'>Tarjeta de débito</p>
                                </div>
                            </div>

                            <div className='cont-envio-producto-fila-4-f1-col-2'>
                                <input type='radio' className='radio' />
                            </div>
                        </div>

                        <div className='cont-result-busqueda-codigo-postal-f3'>
                            <div className='cont-envio-producto-fila-4-f1-col-1'>
                                <img src={imgMercadoPago} alt='' className='img-correo-arg' />
                                <div className='cont-p-despacho-Y-tranporte'>
                                    <p className='p-despacho'>Mercadopago</p>
                                    <p className='p-transporte'>Efectivo(Pago facil - Rapipago)</p>
                                </div>
                            </div>

                            <div className='cont-envio-producto-fila-4-f1-col-2'>
                                <input type='radio' className='radio' />
                            </div>
                        </div>

                        <div className='cont-result-busqueda-codigo-postal-f3'>
                            <div className='cont-envio-producto-fila-4-f1-col-1'>
                                <img src={imgMercadoPago} alt='' className='img-correo-arg' />
                                <div className='cont-p-despacho-Y-tranporte'>
                                    <p className='p-despacho'>Mercadopago</p>
                                    <p className='p-transporte'>Dinero en cuenta</p>
                                </div>
                            </div>

                            <div className='cont-envio-producto-fila-4-f1-col-2'>
                                <input type='radio' className='radio' />
                            </div>
                        </div>

                        <div className='cont-result-busqueda-codigo-postal-f3'>
                            <div className='cont-envio-producto-fila-4-f1-col-1'>
                                <img src={imgMercadoPago} alt='' className='img-correo-arg' />
                                <div className='cont-p-despacho-Y-tranporte'>
                                    <p className='p-despacho'>Efectivo</p>
                                    <p className='p-transporte'>Se abona al retirar. Descuento del 10% OFF</p>
                                </div>
                            </div>

                            <div className='cont-envio-producto-fila-4-f1-col-2'>
                                <input type='radio' className='radio' />
                            </div>
                        </div>

                        <div className='cont-result-busqueda-codigo-postal-f3'>
                            <div className='cont-envio-producto-fila-4-f1-col-1'>
                                <img src={imgMercadoPago} alt='' className='img-correo-arg' />
                                <div className='cont-p-despacho-Y-tranporte'>
                                    <p className='p-despacho'>Transferencia/Depósito</p>
                                    <p className='p-transporte'>Descuento 10% OFF</p>
                                </div>
                            </div>

                            <div className='cont-envio-producto-fila-4-f1-col-2'>
                                <input type='radio' className='radio' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cont-envio-producto-col-2'>
                    <ResumenCompra carrito={carrito} />
                    {/* btns continuar y volver */}
                    <div className='cont-btns-continuar-volver'>
                        <button onClick={handleClickVolver} className='btn-volver-compra'>Seguir comprando</button>
                        <a href='/infoContacto' className='btn-continuar-compra'>Continuar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComoPagar