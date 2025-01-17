import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logoMiCarrito from '../../imagenes/logo.jpg';
import WarningIcon from '@mui/icons-material/Warning';
import CardProdMiCarrito from '../CardProdMiCarrito' 
import ResumenCompra from '../ResumenCompra';
import './styles.css';


function MiCarrito() {

    const carrito = useSelector(state => state.carrito);

    //función busca si hay productos sin stock
    const hayProdSinStock = () => {
        let hay = false;
        carrito?.productos?.map(p => {
            if(p.stock === 0){
                hay = true;
            }
            return null;
        });
        return hay;
    }
    //funcion onClick vuelvo a la página anterior
    const handleClickVolver = () => {
        window.history.back();
    }
    
    return (
        <div className='cont-miCarrito'>
            {/* nav */}
            <div className='nav-miCarrito'>
                <NavLink to='/' className='nav-link-miCarrito'>
                    <img src={logoMiCarrito} alt='logo' className='logo-miCarrito'/>
                </NavLink>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p className='p-nav'>articulos</p>
                    <p className='p-nav'>deportivos</p>
                </div>
            </div>
            {/* titulo */}
            <div className='cont-titulo-miCarrito'>
                <p className='p-titulo-mi-carrito'>Mi Carrito</p>
            </div>
            {/* msj si hay prods SIN STOCK */}
            {
                hayProdSinStock() &&(
                    <div className='cont-msj-prod-sin-stock'>
                        <WarningIcon sx={{ fontSize: 40, color: 'red' }} />
                        <p className='p-msj-prod-sin-stock'>Hay productos sin stock en tu carrito, por favor quitalos !!</p>
                    </div>
                )
            }
            {/* muestro prods */}
            <div className='cont-miCarrito-fila-1'>
                <div className='cont-miCarrito-fila-1-col-1'>
                {
                    carrito?.productos?.map(p => (
                        <CardProdMiCarrito
                            key={p.id}
                            clienteId={carrito.usuario}
                            productoId={p.id}
                            nombre={p.nombre}
                            precio={p.precio}
                            imagenes={p.imagenes}
                            stock={p.stock}
                        />
                    ))
                }
                </div>

                {/* resumen de compra */}
                <div className='cont-miCarrito-fila-1-col-2-resumen'>
                    <ResumenCompra 
                        carrito={carrito}
                    />
                    {/* btns continuar y volver */}
                    <div className='cont-btns-continuar-volver'>
                        <button onClick={handleClickVolver} className='btn-volver-compra'>Seguir comprando</button>
                        <a href='/formaEnvio' className='btn-continuar-compra'>Continuar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiCarrito