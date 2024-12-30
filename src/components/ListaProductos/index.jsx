import React from 'react'
import Card from '../Card';
import './styles.css'


function ListaProductos({productos}) {

    return (
        <>
            {
                productos?.map(p => (
                    <Card key={p.id} nombre={p.nombre} precio={p.precio} imagenes={p.imagenes} />
                ))
            }
        </>
    )
}

export default ListaProductos