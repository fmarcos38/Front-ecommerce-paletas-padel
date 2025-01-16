import React from 'react'
import { useDispatch } from 'react-redux';
import { eliminarDelCarrito, getCarrito } from '../../redux/actions/actions';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Stock from '../Stock';
//import BotonEliminaProdCarrito from '../BotoneliminaProdCarrito';
import './styles.css';

function CardProdCarrito({clienteId, productoId, nombre, precio, imagenes, stock}) {
    
    const dispatch = useDispatch();

    const onClickEliminarProdCarrito = () => {
        dispatch(eliminarDelCarrito(clienteId, productoId));
    }


    return (
        <div className='cont-card-prod-carrito'>
            <div className='cont-img-card-prod-carrito'>
                <img src={imagenes[0]} alt={nombre} className='img-card-prod-carrito' />
            </div>
            <div className='cont-info-card-prod-carrito'>
                <p className='nombre-pala-prod-carrito'>{nombre}</p>
                <p className='precio-pala-prod-carrito'>${precio}</p>
                <div style={{ width: '20%', height: '20px', display: 'flex', justifyContent:'start', alignItems: 'center'}}>
                    <Stock stock={stock} />
                </div>
                <p className='stock-pala-prod-carrito'>Stock: {stock}</p>
            </div>
            <div>
                <button className='btn-eliminar-prod-carrito' onClick={onClickEliminarProdCarrito}>
                    <DeleteForeverIcon />
                </button>
                {/* <BotonEliminaProdCarrito clienteId={clienteId} productoId={productoId} /> */}
            </div>
        </div>
    )
}

export default CardProdCarrito