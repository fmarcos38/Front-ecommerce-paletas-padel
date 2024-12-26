import React from 'react'
import FormCreaProducto from '../../components/FormCreaProducto'

function EditaProd() {
    return (
        <div className='cont-crea-prod-page'>
            <h1>Editar Producto</h1>
            <FormCreaProducto operacion={'editar'} />
        </div>
    )
}

export default EditaProd