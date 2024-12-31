import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductoById, resetProducto } from '../../redux/actions/actions';
import DetalleProd from '../../components/DetalleProd'

function DetalleProdPage() {

    const {id} = useParams();
    const producto = useSelector(state => state.producto);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductoById(id));

        return () => {
            dispatch(resetProducto());
        }
    }, [dispatch, id]);

    return (
        <div className='cont-detalle-page'>
            <DetalleProd producto={producto}/>
        </div>
    )
}

export default DetalleProdPage