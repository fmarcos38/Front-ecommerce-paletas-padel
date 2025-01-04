import React from 'react';
import { useDispatch } from 'react-redux';
import { openCloseModal } from '../../redux/actions/actions';
import './styles.css';
import CarruselModal from '../CarruselModal';

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
                <CarruselModal imagenes={imagenes} />
            </div>
        </div>
    )
}

export default ModalImgGrande