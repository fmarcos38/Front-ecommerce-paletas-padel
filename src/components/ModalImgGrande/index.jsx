import React from 'react';
import { useDispatch } from 'react-redux';
import { openCloseModal } from '../../redux/actions/actions';

function ModalImgGrande({imagenes}) {
    
    const dispatch = useDispatch();
    //función para abrir y cerrar el modal
    const onClickModal = () => {
        dispatch(openCloseModal());
    }

    return (
        <div className='cont-modal-img-grande'>
            <button className='btn-cerrar-modal' onClick={onClickModal}>X</button>
            <div className='cont-img-grande'>
                HOLA
            </div>
        </div>
    )
}

export default ModalImgGrande