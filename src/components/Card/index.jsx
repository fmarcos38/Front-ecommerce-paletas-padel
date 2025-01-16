import React from 'react';
import { NavLink } from 'react-router-dom';
import { userData } from '../../localStorage';
import BotonFavorito from '../BotonFavorito';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { agregarAlCarrito } from '../../redux/actions/actions';
import Swal from 'sweetalert2';

function Card({id, nombre, precio, imagenes, agotado, enPromo, porcentajeDescuento}) {

    const dataUsuario = useSelector(state => state.dataUsuario);
    const [showDetail, setShowDetail] = React.useState(false); //estado para hover de la imgn - mostrando detalle
    const dispatch = useDispatch();

    const onClickAgregarAlCarrito = () => {
        if(dataUsuario._id){
            const cantidad = 1;
            const clienteId = dataUsuario._id;
            dispatch(agregarAlCarrito(clienteId, id, cantidad));
        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Debes estar logueado para agregar productos al carrito',
            });
        }
    };

    return (
        <div className='cont-card'>
            {/* btn favorito */}
            <div className='cont-btn-fav-card'>
                <BotonFavorito id={id} />
            </div>
            {/* carrusel de imagenes */}
            <NavLink to={`/detalleProd/${id}`} className='navLink-car'>
                <div
                    onMouseEnter={() => setShowDetail(true)}
                    onMouseLeave={() => setShowDetail(false)}
                >
                    {/* imagen */}
                    <div className='cont-carrusel-card'>
                        <img src={imagenes[0]} alt={nombre} className='img-card' />
                    </div>

                    {/* msj detalle si hay hover */}
                    <div className={`detail ${showDetail ? 'show' : ''}`}>
                        <p className='palabra-abre-detalle'>Detalle</p>
                    </div>
                </div>
            </NavLink>
            {
                agotado && <p className='prod-agotado'>Agotado</p>
            }
            {/* data */}
            <div className='cont-info-card'>
                <p className='nombre-pala'>{nombre}</p>
                <div className='cont-precio-desc'>
                    <p className='precio-pala'>${precio}</p>
                    {enPromo && <p className='descuento-pala'>Desc. -{porcentajeDescuento}%</p>}
                </div>
                <button 
                    className='btn-agrega-carrito' 
                    onClick={() => {onClickAgregarAlCarrito()}}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Card