import React from 'react';
import Carrusel from '../../components/Carrusel';
import './styles.css';
import ListaProductos from '../../components/ListaProductos';

function Home() {
  return (
    <div className='cont-home'>
      <div className='cont-msj-envio'>
        <h1 className='msj-envio'>ENVIOS A TODO EL PAÍS</h1>
      </div>

      <div className='cont-carrusel-home'>
        <Carrusel />      
      </div>

      <div className='lista-paletas'>
        <h1 className='titulo-lista-paletas'>Palas / Paletas</h1>
        <ListaProductos />
      </div>
    </div>
  )
}

export default Home