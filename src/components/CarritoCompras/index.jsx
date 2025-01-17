import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context';
import { useSelector } from 'react-redux';
import { formatMoney } from '../../utils/index';
import CardProdCarrito from '../CardProdCarrito';
import './styles.css';
import { NavLink } from 'react-router-dom';

function CarritoCompras() { 

    const carrito = useSelector(state => state.carrito);
    const [carritoCliente, setCarritoCliente] = React.useState(null);
    const context = useContext(AppContext);

    const handleClickCerrarCarrito = () => {
        context.onClickCarrito();
    }
    //función suma total del carrito
    const sumaTotalCarrito = () => {
        let tot = 0;
        carritoCliente?.productos?.map(p => {
            return tot += p.precio;
        });
        return tot;
    }

    //actualizar carrito en tiempo real
    useEffect(() => {
        setCarritoCliente(carrito);
    }, [carrito]);

    return (
        <div className='carrito-compras'>
            <div className='cont-btn-cerrar-Y-titulo'>
                <h2 className='titulo-carrito'>Carrito de Compras</h2>
                <button className='btn-cerrar-carrito' onClick={handleClickCerrarCarrito}>X</button>
            </div>
            {/* lista prods del carrito */}
            <div className='cont-prods-carrito'>
                {
                    carritoCliente ?
                    carritoCliente.productos?.map(p => (
                        <CardProdCarrito 
                            key={p.id}
                            clienteId={carrito.usuario}
                            productoId={p.id}
                            nombre={p.nombre}
                            precio={p.precio}
                            imagenes={p.imagenes}
                            stock={p.stock}
                        />
                    )) : (
                        <p>No hay productos en tu Carrito !!</p>
                    )
                }
            </div>
            <div className='cont-total-carrito'>
                <p>${formatMoney(sumaTotalCarrito())}</p>
            </div>
            <div className='cont-btn-ir-carrito'>
                <NavLink to='/miCarrito' className='navLink-carrito'>
                    <button className='btn-ir-carrito'>Ir al Carrito</button>
                </NavLink>
                <button 
                    className='btn-ir-seguir-comprando'
                    onClick={handleClickCerrarCarrito}
                >
                    Seguir comprando
                </button>
            </div>
        </div>
    )
}

export default CarritoCompras