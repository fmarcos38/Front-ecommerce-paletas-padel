import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarrito, getUsuarioById } from '../../redux/actions/actions';
import { userData } from '../../localStorage';
import WarningIcon from '@mui/icons-material/Warning';
import CardProdMiCarrito from '../CardProdMiCarrito' 
import ResumenCompra from '../ResumenCompra';
import NavCarrito from '../NavCarrito';
import './styles.css';

function MiCarrito() {

    const cliente = userData();
    const carrito = useSelector(state => state.carrito);
    const dispatch = useDispatch();


    //función busca si hay productos sin stock
    const hayProdSinStock = () => {
        let hay = false;
        carrito?.productos?.map(p => {
            if(p.stock === 0){
                hay = true;
            }
            return null;
        });
        return hay;
    }
    //funcion onClick vuelvo a la página anterior
    const handleClickVolver = () => {
        window.history.back();
    }

    useEffect(() => {
            if (cliente.user.id) {
                dispatch(getUsuarioById(cliente.user.id));
                dispatch(getCarrito(cliente.user.id));
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [dispatch]);

    return (
        <div className='cont-miCarrito'>
            {/* nav */}
            <NavCarrito />
            {/* titulo */}
            <div className='cont-titulo-miCarrito'>
                <p className='p-titulo-mi-carrito'>Mi Carrito</p>
            </div>
            {/* msj si hay prods SIN STOCK */}
            {
                hayProdSinStock() &&(
                    <div className='cont-msj-prod-sin-stock'>
                        <WarningIcon sx={{ fontSize: 40, color: 'red' }} />
                        <p className='p-msj-prod-sin-stock'>Hay productos sin stock en tu carrito, por favor quitalos !!</p>
                    </div>
                )
            }
            {/* muestro prods */}
            <div className='cont-miCarrito-fila-1'>
                <div className='cont-miCarrito-fila-1-col-1'>
                {
                    carrito?.productos?.map(p => (
                        <CardProdMiCarrito
                            key={p.id}
                            clienteId={carrito.usuario}
                            productoId={p.id}
                            nombre={p.nombre}
                            precio={p.precio}
                            imagenes={p.imagenes}
                            stock={p.stock}
                        />
                    ))
                }
                </div>

                {/* resumen de compra */}
                <div className='cont-miCarrito-fila-1-col-2-resumen'>
                    <ResumenCompra 
                        carrito={carrito}
                    />
                    {/* btns continuar y volver */}
                    <div className='cont-btns-continuar-volver'>
                        <button onClick={handleClickVolver} className='btn-volver-compra'>Seguir comprando</button>
                        <a href='/formaEnvio' className='btn-continuar-compra'>Continuar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiCarrito