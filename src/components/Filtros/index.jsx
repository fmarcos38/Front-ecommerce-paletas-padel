import React, { useContext } from 'react';
import { AppContext } from '../../context';
import FiltroRangoPrecio from '../FiltroRangoPrecio';
import './styles.css';

function Filtros() {

    const [precioMin, setPrecioMin] = React.useState(1000);
    const [precioMax, setPrecioMax] = React.useState(1000000);
    const context = useContext(AppContext);


    return (
        <div className='cont-filtros'>
            {/* titulo */}
            <div className='cont-titulo-filtros'>
                <h2 className='titulo-filtro'>Filtros</h2>
            </div>
            {/* por marca */}
            <div className='cont-filtro-marca'>
                <h2 className='titulo-filtro'>Marca</h2>
                {
                    context.marcas.map((marca) => (
                        <div key={marca} className='cont-check-Y-label-marca'>
                            <input type="checkbox" id={marca} name={marca} value={marca} className='check-marca'/>
                            <label htmlFor={marca} className='label-check-marca'>{marca}</label>
                        </div>
                    ))
                }
            </div>
            {/* por categoría */}
            <div className='cont-filtro-categoria'>
                <h2 className='titulo-filtro'>Categoría</h2>
                {
                    context.categorias.map((categoria) => (
                        <div key={categoria} className='cont-check-Y-label-categoria'>
                            <input type="checkbox" id={categoria} name={categoria} value={categoria} className='check-categoria'/>
                            <label htmlFor={categoria} className='label-check-categoria'>{categoria}</label>
                        </div>
                    ))
                }
            </div>
            {/* por rango precio */}
            <div className='cont-filtro-rango-precio'>
                <h2 className='titulo-filtro'>Rango de precio</h2>
                <FiltroRangoPrecio 
                    precioMin={precioMin} 
                    setPrecioMin={setPrecioMin} 
                    precioMax={precioMax} 
                    setPrecioMax={setPrecioMax} 
                    setCurrentPage={null}
                />
            </div>

        </div>
    )
}

export default Filtros