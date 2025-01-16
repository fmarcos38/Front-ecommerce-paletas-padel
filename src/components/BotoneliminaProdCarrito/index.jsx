import React from 'react'
import { useDispatch } from 'react-redux';
import { eliminarDelCarrito, getCarrito } from '../../redux/actions/actions';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './styles.css';


function BotonEliminaProdCarrito(clienteId, productoId, ) {
    
    const dispatch = useDispatch();

    const onClickEliminarProdCarrito = () => {
        dispatch(eliminarDelCarrito(clienteId, productoId));
        dispatch(getCarrito(clienteId.clienteId));
    }

    return (
        <button className='btn-eliminar-prod-carrito' onClick={onClickEliminarProdCarrito}>
            <DeleteForeverIcon />
        </button>
    )
}

export default BotonEliminaProdCarrito