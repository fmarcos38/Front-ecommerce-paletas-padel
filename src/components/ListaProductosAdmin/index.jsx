import React from 'react'
import { NavLink } from 'react-router-dom';
import Card from '../Card';
import BotonEliminaProp from '../BotonEliminaProd';
import EditIcon from '@mui/icons-material/Edit';
import './styles.css';

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
function ListaProductosAdmin() {

    return (
        <div className='cont-lista-paletas'>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Eliminar</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaP?.map(p => (
                            <tr key={p.id}>
                                <td>{p.nombre}</td>
                                <td>{p.precio}</td>
                                <td><img src={p.img} alt={p.nombre} className='img-tabla-prod'/></td>
                                <td>
                                    <BotonEliminaProp _id={p.id} />
                                </td>
                                <td>
                                    <NavLink to={`/admin/editaProd/${p.id}`}>
                                        <button>
                                            <EditIcon />
                                        </button>
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListaProductosAdmin