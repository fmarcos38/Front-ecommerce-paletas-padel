import React from 'react'
import Card from '../Card';
import './styles.css'


function ListaProductos({productos,usuario, favoritos}) {

    return (
        <>
            {
                productos?.map(p => (
                    <Card key={p.id} 
                        id={p.id}
                        nombre={p.nombre} 
                        precio={p.precio} 
                        imagenes={p.imagenes}
                        agotado={p.agotado}
                        enPromo={p.enPromo}
                        porcentajeDescuento={p.porcentajeDescuento}
                        /* categoriaProducto={p.categoriaProducto} */
                        /*categoriaMarca={p.categoriaMarca} */
                    />
                ))
            }
        </>
    )
}

export default ListaProductos