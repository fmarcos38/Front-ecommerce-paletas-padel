import React, { useContext, useEffect } from 'react';
import { userData } from '../../localStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos, getProductosEnOferta } from '../../redux/actions/actions';
import { getUsuarioById } from '../../redux/actions/actions';
import Carrusel from '../../components/CarruselTemporizador';
import ListaOfertas from '../../components/ListaOfertas';
import ListaProductos from '../../components/ListaProductos';
import imgPChica1 from '../../imagenes/img-pChica/ScreenShot001.jpg';
import imgPChica2 from '../../imagenes/img-pChica/ScreenShot002.jpg';
import imgPChica3 from '../../imagenes/img-pChica/ScreenShot003.jpg';
import imgPChica4 from '../../imagenes/img-pChica/ScreenShot004.jpg';
import Filtros from '../../components/Filtros';
import Paginacion from '../../components/Paginacion';
import './styles.css';
import { AppContext } from '../../context';
import CarritoCompras from '../../components/CarritoCompras';


function Home() {

  const data = userData();
  const [marca, setMarca] = React.useState('');
  const [categoria, setCategoria] = React.useState('');
  const [promo, setPromo] = React.useState(false);
  const [precioMin, setPrecioMin] = React.useState(1000);
  const [precioMax, setPrecioMax] = React.useState(1000000);
  const arrImgsMostrar = [imgPChica1, imgPChica2, imgPChica3, imgPChica4]; //array de imagenes a mostrar en el carrusel
  const productos = useSelector((state) => state.productos);
  const totalProductos = useSelector((state) => state.totProds);
  const productosEnOferta = useSelector(state => state.enPromo); //productos en oferta
  const dispatch = useDispatch();
  const context = useContext(AppContext);
  //paginación
  const [paginaActual, setPaginaActual] = React.useState(1);
  const prooductosPorPagina = 4;
  const limit = prooductosPorPagina;
  const offset = (paginaActual - 1) * prooductosPorPagina;


  //efecto para iniciar la pagina desde la parte SUPERIOR
  useEffect(() => {
    // Desplaza la página hacia la parte superior cuando el componente se monta
    window.scrollTo(0, 0);
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

  //efecto para traer los productos en oferta
  useEffect(() => {
    dispatch(getProductosEnOferta());
  }, [dispatch]);

  //efecto para traer los productos
  useEffect(() => {
    dispatch(getProductos(limit, offset, categoria, marca, promo, precioMin, precioMax));
  }, [categoria, dispatch, limit, marca, offset, precioMax, precioMin, promo]);

  //efecto para traer los datos del usuario SI hay usuario logueado
  useEffect(() => {
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
      <div className='lista-productos-home'>
        <div className='cont-titulo-lista-prods'>
          <h2>Productos</h2>
        </div>
        <div className='cont-filtros-lista-prods'>
          {/* filtros */}
          <div className='cont-filtros-home'>
            <Filtros
              marca={marca}
              setMarca={setMarca}
              categoria={categoria}
              setCategoria={setCategoria}
              promo={promo}
              setPromo={setPromo}
              precioMin={precioMin}
              setPrecioMin={setPrecioMin}
              precioMax={precioMax}
              setPrecioMax={setPrecioMax}
              setPaginaActual={setPaginaActual}
            />
          </div>
          {/* lista productos */}
          <div className='cont-lista-productos-home'>
            <ListaProductos productos={productos} />
            {/* paginación */}
            <Paginacion              
              paginaActual={paginaActual}
              onChangePagina={setPaginaActual}
              totalProductos={totalProductos}
              prooductosPorPagina={prooductosPorPagina}
            />
          </div>
        </div>
      </div>

      {/* Carrito de Comrpas - modal */}
      <div className={context.carritoModal === true ? 'modal-carrito-compras-open left-slide' : ''}>
          <CarritoCompras />
        </div>
    </div>
  )
}

export default Home