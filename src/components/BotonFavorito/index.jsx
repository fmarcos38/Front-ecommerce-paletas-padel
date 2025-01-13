import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './styles.css';

function BotonFavorito({ esFavorito, handleOnClickFavorito }) {
    return (
        <button
            onClick={handleOnClickFavorito}
            className='btn-fav'>
            <FavoriteIcon 
                style={{ color: esFavorito ? 'red' : 'black' }} 
            />
        </button>
    );
}

export default BotonFavorito;
