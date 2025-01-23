import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { agregarAlCarrito } from '../../redux/actions/actions';
import BotonFavorito from '../BotonFavorito';
import Swal from 'sweetalert2';
import './styles.css';

function Card({id, nombre, precio, imagenes, agotado, enPromo, porcentajeDescuento}) {

    const dataUsuario = useSelector(state => state.dataUsuario);
    const [showDetail, setShowDetail] = React.useState(false); //estado para hover de la imgn - mostrando detalle
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
        <div className='cont-card'>
            {/* btn favorito */}
            <div className='cont-btn-fav-card'>
                <BotonFavorito id={id} />
            </div>
            {/* descuento */}
            {enPromo && <p className='descuento-pala'>-{porcentajeDescuento}%</p>}
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
                    {
                        enPromo ?
                        (
                            <>
                                <p className='precio-pala-tachado'>${precio}</p>
                                <p className='precio-pala-promo'>${precio - (precio * porcentajeDescuento / 100)}</p>
                            </>
                        ) :
                        (
                            <p className='precio-pala'>${precio}</p>
                        )
                    }
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