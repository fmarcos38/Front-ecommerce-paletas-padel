import React from 'react';
import './styles.css';

function FormCreaProducto({operacion, onsubmit}) {

    const [nombre, setNombre] = React.useState('');
    const [precio, setPrecio] = React.useState(null);
    const [imagenes, setImagenes] = React.useState([]);
    const [descripcion, setDescripcion] = React.useState('');
    const [vistaPrevia, setVistaPrevia] = React.useState([]);//vista previa
    const [errors, setErrors] = React.useState({});

    const handleChangeNombre = (e) => {
        setNombre(e.target.value);
    };
    const handleChangePrecio = (e) => {
        setPrecio(e.target.value);
    };
    const handleChangeImagen = (e) => {
        const filesArray = Array.from(e.target.files); //convierto e.target.files en un array
        setImagenes(filesArray);
        const files = Array.from(e.target.files);
        //para la vista previa
        const previews = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));
        setVistaPrevia(previews);
    };
    const handleChangeDescripcion = (e) => {
        setDescripcion(e.target.value);
    };
    //funcion validar datos
    const validarDatos = () => {
        let errores = {};
        if (!nombre) {
            errores.nombre = 'El nombre es obligatorio';
        }
        if (!precio) {
            errores.precio = 'El precio es obligatorio';
        }
        if (imagenes.length === 0) {
            errores.imagenes = 'La imagen es obligatoria';
        }
        //si hay errores
        if (Object.keys(errores).length > 0) {
            setErrors(errores);
            return false;
        }
        return true;
    };
    //igualmente a pesar de que recibo del padre la función onsubmit, la vuelvo a definir acá
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (validarDatos()) {
            onsubmit({nombre, precio, descripcion, imagenes});
        }
    }

    return (
        <form onSubmit={handleOnSubmit} className='form-crea-prod'>
            {/* imagen */}
            <div className='cont-imagen'>
                <label className='label-prod'>Imagen</label>
                <input 
                    type='file' 
                    name='imagen'
                    multiple
                    accept="image/*"
                    onChange={handleChangeImagen}
                    className='input-crea-prod'
                />
                {errors.imagenes && <p className='error'>{errors.imagenes}</p>}
                {/* vista previa */}
                <div className='cont-vista-previa'>
                    {
                        vistaPrevia?.map((img) => (
                            <img key={img.url} src={img.url} alt={img.file.name} className='img-vista-previa' />
                        ))
                    }
                </div>
            </div>
            <div className='cont-nombre'>
                <label className='label-prod'>Nombre producto</label>
                <input 
                    type='text' 
                    name='nombre'
                    value={nombre}
                    onChange={handleChangeNombre}
                    className='input-crea-prod'
                />
                {errors.nombre && <p className='error'>{errors.nombre}</p>}
            </div>
            {/* precio */}
            <div className='cont-precio'>
                <label className='label-prod'>Precio</label>
                <input 
                    type='text' 
                    name='precio'
                    value={precio}
                    onChange={handleChangePrecio}
                    className='input-crea-prod'
                />
                {errors.precio && <p className='error'>{errors.precio}</p>}
            </div>
            {/* descripción */}
            <div className='cont-descripcion'>
                <label className='label-prod'>Descripción</label>
                <textarea 
                    name='descripcion'
                    value={descripcion}
                    onChange={handleChangeDescripcion}
                    className='input-crea-descrip'
                />
            </div>
            {/* botón crear/modificar */}
            <button type='submit' className='btn-crea-prod'>
                {
                    operacion === 'editar' ? 'Editar Producto' : 'Crear Producto'
                }
            </button>
        </form>
    )
}

export default FormCreaProducto