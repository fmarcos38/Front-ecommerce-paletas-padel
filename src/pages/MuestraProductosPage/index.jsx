import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductos } from '../../redux/actions/actions';
import { useParams } from 'react-router-dom';
import Filtros from '../../components/Filtros';
import ListaProductos from '../../components/ListaProductos';
import Paginacion from '../../components/Paginacion';
import './styles.css';

function MuestraProductosPage() {

    const { busqueda } = useParams();  
    let palabra=busqueda;
    const productos = useSelector(state => state.productos);
    const dispatch = useDispatch();
    const [marca, setMarca] = React.useState('');
    const [categoria, setCategoria] = React.useState('');
    const [enPromo, setPromo] = React.useState(false);
    const [precioMin, setPrecioMin] = React.useState(1000);
    const [precioMax, setPrecioMax] = React.useState(1000000);
    const totalProductos = useSelector((state) => state.totProds);
    //paginación
    const [paginaActual, setPaginaActual] = React.useState(1);
    const prooductosPorPagina = 12;
    const limit = prooductosPorPagina;
    const offset = (paginaActual - 1) * prooductosPorPagina;

    useEffect(() => {
        dispatch(getProductos(limit, offset, categoria, marca, enPromo, palabra, precioMin, precioMax));
    }, [busqueda, categoria, dispatch, enPromo, limit, marca, offset, palabra, precioMax, precioMin]);


    return (
        <div className='page'>
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
                            enPromo={enPromo}
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
        </div>
    )
}

export default MuestraProductosPage