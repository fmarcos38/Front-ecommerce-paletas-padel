import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from '../../context';
import { getProductos } from '../../redux/actions/actions';
import ListaProductosAdmin from '../../components/ListaProductosAdmin';
import './styles.css';


function ListaProdsAdminPage() {

    const context = useContext(AppContext);
    const productos = useSelector(state => state.productos);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProductos());
    },[dispatch, productos]);

    return context.dataUser &&
    (
        <div className='cont-lista-prods-admin'>
            <h1 className='titulo-lista-prods-admin-page'>Lista de productos</h1>
            <ListaProductosAdmin productos={productos}/>
        </div>
    )
}

export default ListaProdsAdminPage