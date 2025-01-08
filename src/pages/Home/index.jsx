import React from 'react';
import { userData } from '../../localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos } from '../../redux/actions/actions';
import { getUsuarioById } from '../../redux/actions/actions';
import Carrusel from '../../components/CarruselTemporizador';
import ListaProductos from '../../components/ListaProductos';
import bolsoMasPaleta from '../../imagenes/bolso-mas-paleta.jpg';
import paletasNox from '../../imagenes/paletas-nox.jpg';
import bullNox from '../../imagenes/bull-nox.jpg';
import './styles.css';
import ListaOfertas from '../../components/ListaOfertas';

function Home() {

  const data = userData();//JSON.parse(localStorage.getItem('favoritos'));
  const productos = useSelector((state) => state.productos);
  const productosEnOferta = productos?.filter(prod => prod.enPromo);
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

  //efecto para traer los datos del usuario SI hay usuario logueado
  React.useEffect(() => {
    if (data) {
      dispatch(getUsuarioById(data.user.id));
    }
  }, [data, dispatch]);


  return (
    <div className='cont-home'>
      <div className='cont-msj-envio'>
        <h1 className='msj-envio'>ENVIOS A TODO EL PAÍS</h1>
      </div>
      
      {/* carrusel */}
      <div className='cont-carrusel-home'>
        <Carrusel imagenes={arrImgs} />
      </div>
      
      {/* titulo ofertas y Lista prods en oferta*/}
      <div className='cont-ofertas-home'>
        <h2 className='titulo-ofertas'>APROVECHA NUESTRAS OFERTAS</h2>
        <div className='cont-lista-ofertas'>
          <ListaOfertas productos={productosEnOferta}/>
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