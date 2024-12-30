import React from 'react'
import { useDispatch } from 'react-redux';

import Swal from 'sweetalert2';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './estilos.css';
import { deleteProducto, getProductos } from '../../redux/actions/actions';


function BotonEliminaProp({_id}) {
    
    const dispatch = useDispatch();
    
    const handleOnClick = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, elimina!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProducto(_id));
                //actualizo la lista de props
                dispatch(getProductos());
                Swal.fire(
                    'Eliminado!',
                    'El prod ha sido eliminado.',
                    'success'
                );
            }
            //window.location.reload();
        });
    };

    return (
        <button className='boton-elimina-prop' onClick={handleOnClick}>
            <DeleteForeverIcon />
        </button>
    )
}

export default BotonEliminaProp