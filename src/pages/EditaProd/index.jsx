import React, {useContext} from 'react'
import FormCreaProducto from '../../components/FormCreaProducto';
import { AppContext } from '../../context';
import Swal from 'sweetalert2';

function EditaProd() {
    const context = useContext(AppContext);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('data', JSON.stringify(data));

        // Agregar imágenes existentes como URLs
        data.imagenes.forEach((imagen) => {
            formData.append('imagenes', imagen);
        });
        console.log('data:', data);
        try {
            const response = await fetch(`http://localhost:3002/producto/edita/${data.id}`, {
                method: 'PUT',
                body: formData,
            });
            if (response.ok) {
                Swal.fire({
                    title: 'Producto modif con éxito',
                    icon: 'success',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#3f51b5',
                });
                //redirijo a la lista de propiedades
                //window.location.href = '/admin/listaPropsAdmin';
            } else {
                Swal.fire({
                    title: 'Error al modif la propiedad',
                    icon: 'error',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#3f51b5',
                });
            }
        } catch (error) {
            console.error('Error al crear producto:', error);
        }
    }

    return context.userLog && (
        <div className='cont-crea-prod-page'>
            <h1>Editar Producto</h1>
            <FormCreaProducto onSubmit={onSubmit} operacion={'editar'} />
        </div>
    )
}

export default EditaProd