import React from 'react'
import BotonWhastapp from '../../components/BotonWhastApp';


function ComoMeLlega() {
    return (
        <div className='page'>
            <div className='cont-politicas-cambio'>
                <div className='titulo-politicas-cambio'>
                    <h2 className='titulo-politicas'>
                    ¿Cómo me llega?
                    </h2>
                </div>
                <div className='cont-texto-comoComprar'>
                    <p>
                        El proceso de entrega es sencillo y seguro. A continuación, te explicamos los pasos:
                    </p>
                    <p>
                        1. Puede ser por Correo Argentino, OCA o transporte a convenir.
                    </p>
                    <p>
                        2. Podés retirar por nuestro domicilio.
                    </p>
                </div>
                <BotonWhastapp />
            </div>
        </div>
    )
}

export default ComoMeLlega