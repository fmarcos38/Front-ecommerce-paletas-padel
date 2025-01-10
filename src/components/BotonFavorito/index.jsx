import React from 'react'
import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { agregaFavorito, eliminaFavorito, getFavoritos } from '../../redux/actions/actions';
import './styles.css'


function BotonFavorito({idProd}) {

    const usuario = useSelector(state => state.dataUsuario); //datos del usuario
    const [favoritos, setFavoritos] = React.useState([]); //array de favoritos del usuario
    const dispatch = useDispatch();

    const handleOnClickFavorito = () => {
        const id = usuario?._id;
        if(usuario){
            //si el producto ya esta en favoritos, lo elimina
            if(favoritos.includes(idProd)){
                dispatch(eliminaFavorito(id, idProd));
                dispatch(getFavoritos(id));
            }else{
                //si no esta en favoritos, lo agrega
                dispatch(agregaFavorito(id, idProd));
                dispatch(getFavoritos(id));
            }
        }else{
            alert('Debes iniciar sesión para agregar productos a favoritos');
        }
    };

    //efecto para traer los favoritos del usuario
    React.useEffect(() => {
        if(usuario){
            setFavoritos(usuario?.favoritos);
        }        
    }, [dispatch, usuario]);

    return (
        <button
            onClick={handleOnClickFavorito}
            className='btn-fav'>
            <FavoriteIcon sx={favoritos?.includes(idProd) ? {'color':'red'} : {'color':'black'}} />
        </button>
    )
}

export default BotonFavorito