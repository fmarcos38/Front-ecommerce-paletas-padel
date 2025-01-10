import React, { useEffect} from 'react'
import { userData } from '../../localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritos } from '../../redux/actions/actions';
import ListaProductos from '../../components/ListaProductos';
import './styles.css';


function FavoritosPage() {

    const usuario = userData();
    const favoritos = useSelector(state => state.favoritos);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getFavoritos(usuario.user.id));        
    }, [dispatch, usuario.user.id]);

    return (
        <div className='cont-fav-page'>
            <h1>Tus Favoritos</h1>
            {
                favoritos.length === 0 ? 
                <p>No tienes productos en favoritos</p> :
                /* filtros y prods */
                    <div className='cont-filtros-prods'>
                        <div className='cont-filtros'>
                            filtros
                        </div>
                        <div className='cont-fav'>
                            <ListaProductos productos={favoritos} />
                        </div>
                    </div>
            }
        </div>
    )
}

export default FavoritosPage