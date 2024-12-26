import React from 'react'
import Card from '../Card';
import './styles.css'

const listaP = [
    {
        id: 1,
        nombre: 'Pala1',
        precio: 10000,
        img: 'https://www.padelnuestro.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/1000-1.jpg'
    },
    {
        id: 2,
        nombre: 'Pala2',
        precio: 20000,
        img: 'https://www.padelnuestro.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/1000-1.jpg'
    }
];
function ListaProductos() {

    return (
        <div className='cont-lista-paletas'>
            {
                listaP?.map(p => (
                    <Card key={p.id} nombre={p.nombre} precio={p.precio} img={p.img} />
                ))
            }
        </div>
    )
}

export default ListaProductos