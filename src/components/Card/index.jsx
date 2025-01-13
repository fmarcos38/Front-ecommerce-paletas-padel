import React, { useEffect, useState } from 'react'
import { getFavoritos, eliminaFavorito, agregaFavorito,  } from '../../redux/actions/actions';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BotonFavorito from '../BotonFavorito';
import './styles.css';

function Card({id, nombre, precio, imagenes, agotado, enPromo, porcentajeDescuento}) {

    const usuario = useSelector(state => state.dataUsuario); 
    const favoritos = useSelector(state => state.favoritos);
    const [showDetail, setShowDetail] = React.useState(false); //estado para hover de la imgn - mostrando detalle
    const [esFavorito, setEsFavorito] = useState(false); //estado para saber si el producto es favorito
    const dispatch = useDispatch();

    // Manejar el cambio de estado de favorito
    const handleOnClickFavorito = async () => {
        try {
            if(esFavorito) { 
                dispatch(eliminaFavorito(usuario._id, id));
                setEsFavorito(!esFavorito);
                return;
            }else{
                dispatch(agregaFavorito(usuario._id, id));
                setEsFavorito(!esFavorito);
            }
        } catch (error) {
            console.error("Error al cambiar estado de favorito:", error);
        }
    };
    

    // Cargar favoritos al montar el componente
    useEffect(() => {
        const obtenerFavoritos = async () => {
            if (usuario?._id) {
                const usuarioId = usuario._id;
                try {
                    dispatch(getFavoritos(usuarioId)); 
                    setEsFavorito(favoritos.some(fav => fav.id === id));
                } catch (error) {
                    console.error("Error al obtener favoritos:", error);
                }
            }
        };
    
        obtenerFavoritos();
    }, [usuario, id, dispatch]);


    return (
        <div className='cont-card'>
            {/* btn favorito */}
            <div className='cont-btn-fav-card'>
                <BotonFavorito esFavorito={esFavorito} handleOnClickFavorito={handleOnClickFavorito} />
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
                <button className='btn-agrega-carrito'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Card