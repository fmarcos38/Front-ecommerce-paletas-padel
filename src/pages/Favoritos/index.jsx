import React, { useEffect, useState} from 'react'
import { userData } from '../../localStorage';

function FavoritosPage() {

    const usuario = userData();
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        if(usuario){
            setFavoritos(usuario.favoritos);
        }
    }, [usuario]);

    return (
        <div>Tus Favoritos</div>
        
    )
}

export default FavoritosPage