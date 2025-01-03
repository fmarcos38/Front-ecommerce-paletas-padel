import React from 'react'
import { NavLink } from 'react-router-dom';
import BotonEliminaProp from '../BotonEliminaProd';
import EditIcon from '@mui/icons-material/Edit';
import './styles.css';

function ListaProductosAdmin({productos}) {

    return (
        <div className='cont-lista-paletas'>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>                        
                        <th>Eliminar</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos?.map(p => (
                            <tr key={p.id}>
                                <td><img src={p.imagenes[0]} alt={p.nombre} className='img-tabla-prod'/></td>
                                <td>{p.nombre}</td>
                                <td>{p.precio}</td>                                
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