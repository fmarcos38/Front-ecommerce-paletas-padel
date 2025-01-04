import React, {useEffect} from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Estilos de Quill
import './styles.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductoById } from '../../redux/actions/actions';

function FormCreaProducto({operacion, onSubmit}) {

    const cat = ['Paletas', 'Bolsos', 'Zapatillas'];  //tipo de categorías
    const {id} = useParams();
    const [nombre, setNombre] = React.useState('');
    const [precio, setPrecio] = React.useState(null);
    const [imagenes, setImagenes] = React.useState([]);
    const [descripcion, setDescripcion] = React.useState('');
    const [vistaPrevia, setVistaPrevia] = React.useState([]); //vista previa
    const [categoria, setCategoria] = React.useState('');
    const [stock, setStock] = React.useState(null);
    const [errors, setErrors] = React.useState({});
    const quillRef = React.useRef(null);
    const prod = useSelector((state) => state.producto);
    const dispatch = useDispatch();

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
    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
    };
    const handleChangeStock = (e) => {
        setStock(e.target.value);
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
        if(!categoria){
            errores.categoria = 'La categoría es obligatoria';
        }
        if(!stock){
            errores.stock = 'El stock es obligatorio';
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
            const data = {
                nombre,
                precio,
                descripcion,
                imagenes,
                categoria,
                stock
            };
            onSubmit(data);
        }
    }
    //useEffect para inicializar el editor de texto
    useEffect(() => {
        if (quillRef.current && !quillRef.current.__quillInstance) {
            const quillInstance = new Quill(quillRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline'], // Formatos básicos
                        [{ 'size': ['small', false, 'large', 'huge'] }], // Tamaño de texto
                        [{ 'align': [] }], // Alineación
                        ['link', 'image'], // Agregar links e imágenes
                    ],
                },
            });

            quillInstance.on('text-change', () => {
                setDescripcion(quillInstance.root.innerHTML);
            });

            quillRef.current.__quillInstance = quillInstance;
        }
    }, []);

    //efecto para iniciar los inputs en caso de editar
    useEffect(()=>{
        if(operacion === 'editar'){
            dispatch(getProductoById(id));
            if(prod){
                setNombre(prod.nombre);
                setPrecio(prod.precio);
                setDescripcion(prod.descripcion);
                setCategoria(prod.categoria);
                setStock(prod.stock);
                setVistaPrevia(prod.imagenes?.map((img) => ({url: img})));
            }
        }
    }, [operacion, dispatch, id, prod]);


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
                            <img key={img.url} src={img.url} alt={img.file} className='img-vista-previa' />
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
            {/* precio - categoría - stock*/}
            <div className='cont-precio-cat-stock'>
                <div className='cont-precio-cat'>
                    <label className='label-prod'>Precio</label>
                    <input
                        type='text'
                        name='precio'
                        value={precio}
                        onChange={handleChangePrecio}
                        className='input-crea-precio'
                    />
                    {errors.precio && <p className='error'>{errors.precio}</p>}
                </div>
                <div className='cont-precio-cat'>
                    <label className='label-prod'>Categoría</label>
                    <select
                        name='categoria'
                        value={categoria}
                        onChange={handleChangeCategoria}
                        className='input-crea-cat'
                    >
                        <option value=''></option>
                        {
                            cat.map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))
                        }
                    </select>
                    {errors.categoria && <p className='error'>{errors.categoria}</p>}
                </div>
                <div className='cont-precio-cat'>
                    <label className='label-prod'>Stock</label>
                    <input
                        type='number'
                        min='1'
                        name='stock'
                        value={stock}
                        onChange={handleChangeStock}
                        className='input-crea-stock'
                    />
                    {errors.stock && <p className='error'>{errors.stock}</p>}
                </div>
            </div>
            {/* descripción */}
            <div className='cont-descripcion'>
                <label className='label-prod'>Descripción</label>
                {/* cont para texto editable */}
                <div ref={quillRef} className="input-crea-descrip"></div>
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