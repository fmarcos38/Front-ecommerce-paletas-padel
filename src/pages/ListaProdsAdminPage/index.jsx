import React from 'react'
import ListaProductosAdmin from '../../components/ListaProductosAdmin';
import './styles.css';

function ListaProdsAdminPage() {
    return (
        <div className='cont-lista-prods-admin'>
            <h1 className='titulo-lista-prods-admin-page'>Lista de productos</h1>
            <ListaProductosAdmin />
        </div>
    )
}

export default ListaProdsAdminPage