import React, { useContext } from 'react'
import { AppContext } from '../../context';
import FormCreaProducto from '../../components/FormCreaProducto';
import Swal from 'sweetalert2';
import './styles.css';


function CreaProducto() { console.log('CreaProducto renderizado');


    const context = useContext(AppContext);

    const onSubmit = async(data) => {
        
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));

        data.imagenes.forEach((imagen) => {
            formData.append('imagenes', imagen);
        });
        
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
                window.location.href = '/admin/listaPropsAdmin';
                }else{
                    Swal.fire({
                        title: 'Error al crear la propiedad',
                        icon: 'error',
                        confirmButtonText: 'Aceptar',
                        confirmButtonColor: '#3f51b5',
                    });
                }
        }catch(error){
            console.error('Error al crear producto:', error);
        }
    }


    return context.userLog &&
    (
        <div className='cont-crea-prod-page'>
            <h1 className='title-crea-prod'>Crea un nuevo producto</h1>
            <FormCreaProducto onSubmit={onSubmit}/>
        </div>
    )
}

export default CreaProducto