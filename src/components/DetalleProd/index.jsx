import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getProductoById } from '../../redux/actions/actions';

function DetalleProd() {

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductoById(id));
    }, [dispatch, id]);

    
    return (
        <div>DetalleProd</div>
    )
}

export default DetalleProd