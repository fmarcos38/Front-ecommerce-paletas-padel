import React from 'react';
import { userData } from '../../localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos } from '../../redux/actions/actions';
import { getUsuarioById } from '../../redux/actions/actions';
import Carrusel from '../../components/CarruselTemporizador';
import ListaOfertas from '../../components/ListaOfertas';
import ListaProductos from '../../components/ListaProductos';
import imgPChica1 from '../../imagenes/img-pChica/ScreenShot001.jpg';
import imgPChica2 from '../../imagenes/img-pChica/ScreenShot002.jpg';
import imgPChica3 from '../../imagenes/img-pChica/ScreenShot003.jpg';
import imgPChica4 from '../../imagenes/img-pChica/ScreenShot004.jpg';
import './styles.css';


function Home() {

  const data = userData();//JSON.parse(localStorage.getItem('favoritos'));
  const arrImgsMostrar = [imgPChica1, imgPChica2, imgPChica3, imgPChica4];
  const productos = useSelector((state) => state.productos);
  const productosEnOferta = productos?.filter(prod => prod.enPromo);
  //asigno el array de imgs a mostrar según el tamaño de la pantalla
  //const arrImgsMostrar = window.innerWidth < 900 ? arrImgsChica : arrImgs;
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
        <Carrusel imagenes={arrImgsMostrar} />
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