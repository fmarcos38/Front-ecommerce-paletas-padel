import React from 'react';
import { useSelector } from 'react-redux';
import logoMiCarrito from '../../imagenes/logo.jpg';
import WarningIcon from '@mui/icons-material/Warning';
import CardProdMiCarrito from '../CardProdMiCarrito';
import './styles.css'; 
import EnvioProducto from '../EnvioProducto';
import CardProdCarrito from '../CardProdCarrito';

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

    return (
        <div className='cont-miCarrito'>
            {/* nav */}
            <div className='nav-miCarrito'>
                <img src={logoMiCarrito} alt='logo' className='logo-miCarrito'/>
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
                hayProdSinStock() && (
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
                <div className='cont-miCarrito-fila-1-col-2'>
                    <div className='cont-titulo-resumen-compra'>
                        <p className='p-titulo-resumen-compra'>RESUMEN DE COMPRA</p>
                    </div>
                    <div className='cont-total-resumen-compra'>
                        <p>Total: ${}</p>
                    </div>
                </div>
            </div>

            {/* <div className='cont-miCarrito-fila-2'>
                <div className='cont-miCarrito-fila-2-col-1'>
                    <EnvioProducto />
                </div>
                <div className='cont-miCarrito-fila-2-col-2'>
                    
                </div>
            </div> */}
        </div>
    )
}

export default MiCarrito