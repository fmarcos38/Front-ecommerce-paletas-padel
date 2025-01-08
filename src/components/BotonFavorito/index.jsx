import React from 'react'
import { useSelector } from 'react-redux';
import { userData } from '../../localStorage';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { getUsuarioById } from '../../redux/actions/actions';
import './styles.css'


function BotonFavorito({idProducto}) {

    const usuario = useSelector(state => state.dataUsuario); //datos del usuario
    const [favoritos, setFavoritos] = React.useState([]); //array de favoritos del usuario
    const dispatch = useDispatch();

    const handleOnClickFavorito = (idProducto) => {
        
    };

    //efecto para traer los favoritos del usuario
    React.useEffect(() => {
        const data = userData();//JSON.parse(localStorage.getItem('favoritos'));
        if(data){
            dispatch(getUsuarioById(data.user.id));
            if(usuario){
                setFavoritos(usuario?.favoritos);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return (
        <button
            onClick={() => handleOnClickFavorito(idProducto)}
            className='btn-fav'>
            <FavoriteIcon sx={favoritos?.includes(idProducto) ? {'color':'red'} : {'color':'black'}} />
        </button>
    )
}

export default BotonFavorito