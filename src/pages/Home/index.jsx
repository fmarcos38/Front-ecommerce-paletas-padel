import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos } from '../../redux/actions/actions';
import Carrusel from '../../components/CarruselTemporizador';
import ListaProductos from '../../components/ListaProductos';
import bolsoMasPaleta from '../../imagenes/bolso-mas-paleta.jpg';
import paletasNox from '../../imagenes/paletas-nox.jpg';
import bullNox from '../../imagenes/bull-nox.jpg';
import './styles.css';

function Home() {

  const productos = useSelector((state) => state.productos);
  //array de imgs para la publicidad
      const arrImgs = [
          bolsoMasPaleta,
          paletasNox,
          bullNox
      ];
  const dispatch = useDispatch();

  //efecto para traer los productos
  React.useEffect(() => {
    dispatch(getProductos());
  }, [dispatch]);


  return (
    <div className='cont-home'>
      <div className='cont-msj-envio'>
        <h1 className='msj-envio'>ENVIOS A TODO EL PAÍS</h1>
      </div>
      
      {/* carrusel */}
      <div className='cont-carrusel-home'>
        <Carrusel imagenes={arrImgs} />
      </div>
      
      {/* titulo ofertas */}
      <div className='cont-ofertas-home'>
        <h2 className='titulo-ofertas'>OFERTAS</h2>
        <div className='cont-carrusel-home'>
          <Carrusel imagenes={arrImgs} />
        </div>
      </div>
      
      {/* filtros y lista prods */}
      <div className='lista-paletas'>
        <h2>Productos</h2>
        <div className='cont-filtros-lista-prods'>
          {/* filtros */}
          <div className='cont-filtros-home'>FILTROS</div>
          {/* lista productos */}
          <div className='cont-lista-paletas-home'>
            <h3 className='titulo-lista-paletas'>Palas / Paletas</h3>
            <div className='cont-lista-productos'>
              <ListaProductos productos={productos} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home