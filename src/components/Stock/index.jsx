import React from 'react';
import './styles.css';

function Stock({stock}) {

    const [cantidad, setCantidad] = React.useState(stock);

    const handleOnClickMas = (e) => {
        if(cantidad < stock){
            setCantidad(cantidad + 1);
        }else if(cantidad === stock){
            setCantidad(stock);
        }else{
            setCantidad(0);
        }
    }
    const handleOnClickMenos = (e) => {
        if(cantidad > 0){
            setCantidad(cantidad - 1);
        }else{
            setCantidad(0);
        }
    }


    return (
        <div className='cont-stock'>
            <button onClick={handleOnClickMenos}>-</button>
            <p className='p-cantidad-stock'>{cantidad}</p>
            <button onClick={handleOnClickMas}>+</button>
        </div>
    )
}

export default Stock