import React, { useContext } from 'react'
import { AppContext } from '../../context';
import FormCreaProducto from '../../components/FormCreaProducto';
import Swal from 'sweetalert2';


function CreaProducto() { 

    const context = useContext(AppContext);

    const onSubmit = async(data) => {        
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));

        data.imagenes.forEach((imagen) => {
            formData.append('imagenes', imagen);
        });
        console.log('formData:', formData);
        try{
            const response = await fetch('http://localhost:3002/producto', {
                method: 'POST',
                body: formData,
            });
            if(response.ok){
                Swal.fire({
                    title: 'Producto creado con éxito',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#3f51b5',
                });
                //redirijo a la lista de propiedades
                window.location.href = '/admin/listaProdsAdmin';
                }else{
                    Swal.fire({
                        title: 'Error al crear el producto',
                        icon: 'error',
                        confirmButtonText: 'Aceptar',
                        confirmButtonColor: '#3f51b5',
                    });
                }
        }catch(error){
            console.error('Error al crear producto:', error);
        }
    }

    return context.dataUser &&
    (
        <div className='page'>
            <h1 className='title-crea-prod'>Crea un nuevo producto</h1>
            <FormCreaProducto onSubmit={onSubmit}/>
        </div>
    )
}

export default CreaProducto