import React from 'react'
import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import './styles.css'


function BotonFavorito({idProducto}) {

    const usuario = useSelector(state => state.dataUsuario); //datos del usuario
    const [favoritos, setFavoritos] = React.useState([]); //array de favoritos del usuario
    const dispatch = useDispatch();

    const handleOnClickFavorito = (idProducto) => {};

    //efecto para traer los favoritos del usuario
    React.useEffect(() => {
        if(usuario){
            setFavoritos(usuario?.favoritos);
        }        
    }, [dispatch, usuario]);

    return (
        <button
            onClick={() => handleOnClickFavorito(idProducto)}
            className='btn-fav'>
            <FavoriteIcon sx={favoritos?.includes(idProducto) ? {'color':'red'} : {'color':'black'}} />
        </button>
    )
}

export default BotonFavorito