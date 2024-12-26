import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import './styles.css'

function BotonFavorito() {
    return (
        <button className='btn-fav'>
            <FavoriteIcon className='icon-fav' />
        </button>
    )
}

export default BotonFavorito