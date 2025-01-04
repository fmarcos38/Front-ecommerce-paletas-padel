import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductosRangoPrecio } from '../../redux/actions/actions';
import { formatMoney } from '../../utils';
import ListaProductos from '../ListaProductos';
import CarruselDetalle from '../CarruselDetalle';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BotonFavorito from '../BotonFavorito';
import './styles.css';
import ModalImgGrande from '../ModalImgGrande';


function DetalleProd({producto}) {

    //me traigo productos en un rango de precio +- $30.000 al prod seleccionado
    const prodsPrecios = useSelector(state => state.productosRangoPrecio);
    const isModalOpen = useSelector(state => state.isModalOpen);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //efecto para traer productos en un rango de precio +- $30.000 al prod seleccionado
    useEffect(() => {
        if(producto) {
            const precioBase = producto.precio - 30000;
            const precioTope = producto.precio + 30000;
            dispatch(getProductosRangoPrecio(4, 0, precioBase, precioTope));//se puede variar la cant q trae con limit
        }
    }, [dispatch, producto]);
    
    return (
        <div className='cont-detalle-prod'>
            {/* prod y carrito */}
            <div className='cont-producto-Y-carrito'>
                {/* fila-1 */}
                <div className='cont-fila-1'>
                    <div className='img-prod-detalle'>
                        {
                            producto?.imagenes && <CarruselDetalle imagenes={producto.imagenes} />
                        }
                    </div>

                    <div className='cont-carrito-fila-1'>
                        <div className='cont-fav-prod-detalle'>
                            <BotonFavorito producto={producto} />
                        </div>
                        <div className='info-prod-detalle'>                            
                            <div className='cont-nombre-y-precio-prod-detalle'>
                                <h2 className='nombre-prod-detalle'>{producto?.nombre}</h2>
                                <p className='precio-prod-detalle'>${formatMoney(producto?.precio)}</p>
                            </div>

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
                </div>

                {/* fila-2 */}
                <div className='cont-fila-2'>
                    {/* descripción */}
                    <div className='desc-prod-detalle'>
                        <h2 className='titulo-descrip'>Descripcion del producto</h2>
                        {/* embeber código html en etiqta <p>*/}
                        <p 
                            dangerouslySetInnerHTML={{ __html: producto?.descripcion }}
                            style={{padding: '0 10px'}}
                        ></p>
                    </div>
                    {/* cont Medios de pago y Politicas */}
                    <div className='cont-medios-pago-politicas'>
                        {/* medios de pago */}
                        <div className='con-medios-de-pago'>
                            <h2>Medios de pago</h2>
                            <div>
                                <h4>Con tarjeta de crédito</h4>
                                <img src='https://res.cloudinary.com/dyoyk3bwj/image/upload/v1735673153/tarjetas_n9jsg7.png' alt='logo-mercado-pago' className='img-medios-de-pago'/>
                            </div>
                            <div>
                                <h4>Con tarjeta de débito</h4>
                                <img src='https://res.cloudinary.com/dyoyk3bwj/image/upload/v1735673153/tarjetas_n9jsg7.png' alt='logo-mercado-pago' className='img-medios-de-pago'/>
                            </div>
                            <div>
                                <h4>Transferencias</h4>
                                <img src='https://res.cloudinary.com/dyoyk3bwj/image/upload/v1735673153/tarjetas_n9jsg7.png' alt='logo-mercado-pago' className='img-medios-de-pago'/>
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

                {/* fila 3 */}
                <div className='cont-fila-3'>
                    <h2 className='titulo-otros-prods'>Otros productos que te pueden interesar</h2>
                    <div className='cont-prods-te-puede-interesar'>
                        <ListaProductos productos={prodsPrecios} />
                    </div>
                </div>

                {/* Modal imagen grande */}
                {
                    isModalOpen && 
                    <div className='cont-modal-img-grande'>
                        <ModalImgGrande imagenes={producto?.imagenes} />
                    </div>
                }
                
            </div>           
        </div>
    )
}

export default DetalleProd;