import React from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import bolsoMasPaleta from '../../imagenes/bolso-mas-paleta.jpg';
import paletasNox from '../../imagenes/paletas-nox.jpg';
import bullNox from '../../imagenes/bull-nox.jpg';
import './styles.css';

function Carrusel() {

    //array de imgs
    const arrImgs = [
        bolsoMasPaleta,
        paletasNox,
        bullNox
    ];
    //estado para guardar el index de la imagen actual
    const [index, setIndex] = React.useState(0);

    //función atrás	
    const onClickAtras = () => {
        if(index === 0) return;
        setIndex(index - 1);
    };
    //funcion adelante
    const onClickAdelante = () => {
        if(index === arrImgs.length - 1){
            setIndex(0);
        }else{
            setIndex(index + 1);
        }
    }

    //efecto para pasar las imágenes automáticamente
    React.useEffect(() => {
        const interval = setInterval(() => {
            if(index === arrImgs.length - 1){
                setIndex(0);
            }else{
                setIndex(index + 1);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [arrImgs.length, index]);


    return (
        <div className='cont-carrusel'>
            {/* botón atrás */}
            <button onClick={onClickAtras} className='btn-atras'>
                <ArrowCircleLeftIcon />
            </button>
            {/* imágenes */}
            <div className='cont-imgs'>
                <img src={arrImgs[index]} alt='' className='img-carrusel' />
            </div>
            {/* botón sgt */}
            <button onClick={onClickAdelante} className='btn-sgt'>
                <ArrowCircleRightIcon />
            </button>
        </div>
    )
}

export default Carrusel