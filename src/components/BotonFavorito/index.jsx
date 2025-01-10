import React from 'react'
import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import './styles.css'


function BotonFavorito({id}) {

    const usuario = useSelector(state => state.dataUsuario); //datos del usuario
    const [favoritos, setFavoritos] = React.useState([]); //array de favoritos del usuario
    const dispatch = useDispatch();

    const handleOnClickFavorito = (id) => {
        if(usuario){
            //si el producto ya esta en favoritos, lo elimina
            if(favoritos.includes(id)){
                const newFavoritos = favoritos.filter(fav => fav !== id);
                setFavoritos(newFavoritos);
                dispatch({type: 'SET_FAVORITOS', payload: newFavoritos});
            }else{
                //si no esta en favoritos, lo agrega
                setFavoritos([...favoritos, id]);
                dispatch({type: 'SET_FAVORITOS', payload: [...favoritos, id]});
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
            onClick={() => handleOnClickFavorito(id)}
            className='btn-fav'>
            <FavoriteIcon sx={favoritos?.includes(id) ? {'color':'red'} : {'color':'black'}} />
        </button>
    )
}

export default BotonFavorito