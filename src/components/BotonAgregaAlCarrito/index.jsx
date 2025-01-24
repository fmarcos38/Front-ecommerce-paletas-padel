import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { agregarAlCarrito } from '../../redux/actions/actions';
import Swal from 'sweetalert2';
import './styles.css';

function BotonAgregaalCarrito({id}) {

    const dataUsuario = useSelector(state => state.dataUsuario);
    const dispatch = useDispatch();

    const onClickAgregarAlCarrito = () => {
        if(!dataUsuario?._id){
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Debes estar logueado para agregar productos al carrito',
            });
            //redirijo a login
            setTimeout(() => {
                window.location.href = '/login';
            }, 2000);
        }else{
            const cantidad = 1;
            const clienteId = dataUsuario._id;
            dispatch(agregarAlCarrito(clienteId, id, cantidad));
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <button 
                    className='btn-agrega-carrito' 
                    onClick={() => {onClickAgregarAlCarrito()}}
                >
                    Agregar al carrito
                </button>
    )
}

export default BotonAgregaalCarrito