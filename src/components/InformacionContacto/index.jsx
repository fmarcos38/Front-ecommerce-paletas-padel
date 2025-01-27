import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCarrito, getUsuarioById, modificaUsuario } from '../../redux/actions/actions';
import { userData } from '../../localStorage';
import { NavLink } from 'react-router-dom';
import ResumenCompra from '../ResumenCompra';
import CheckIcon from '@mui/icons-material/Check';
import NavCarrito from '../NavCarrito';
import './styles.css';


function InformacionContacto() {

    const cliente= userData();
    const carrito = useSelector(state => state.carrito);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [telefono, setTelefono] = useState('');
    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');
    const [piso, setPiso] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [provicia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    //funcion onClick vuelvo a la página anterior
    const handleClickVolver = () => {
        window.history.back();
    }

    //función validar inputs
    const validar = () => {
        let errors = {};
        if (!nombre.trim()) {
            errors.nombre = 'El nombre es requerido';
        }
        if (!apellido.trim()) {
            errors.apellido = 'El apellido es requerido';
        }
        if (!dni.trim()) {
            errors.dni = 'El DNI es requerido';
        }
        if (!telefono.trim()) {
            errors.telefono = 'El teléfono es requerido';
        }
        if (!calle.trim()) {
            errors.calle = 'La calle es requerida';
        }
        if (!numero.trim()) {
            errors.numero = 'El número es requerido';
        }
        if (!codigoPostal.trim()) {
            errors.codigoPostal = 'El código postal es requerido';
        }
        if (!provicia.trim()) {
            errors.provicia = 'La provincia es requerida';
        }
        if (!localidad.trim()) {
            errors.localidad = 'La localidad es requerida';
        }
        setErrors(errors);
        if (Object.keys(errors).length > 0) return false;
        return true;
    }
    
    //funciónes onChange
    const handleChangeNombre = (e) => {
        setNombre(e.target.value);
    }
    const handleChangeApellido = (e) => {
        setApellido(e.target.value);
    }
    const handleChangeDni = (e) => {
        setDni(e.target.value);
    }
    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value);
    }
    const handleChangeCalle = (e) => {
        setCalle(e.target.value);
    }
    const handleChangeNumero = (e) => {
        setNumero(e.target.value);
    }
    const handleChangePiso = (e) => {
        setPiso(e.target.value);
    }
    const handleChangeDepartamento = (e) => {
        setDepartamento(e.target.value);
    }
    const handleChangeCodigoPostal = (e) => {
        setCodigoPostal(e.target.value);
    }
    const handleChangeProvincia = (e) => {
        setProvincia(e.target.value);
    }
    const handleChangeLocalidad = (e) => {
        setLocalidad(e.target.value);
    }
    const handleChangeComentarios = (e) => {
        setComentarios(e.target.value);
    }
    const hadleOnSubmit = (e) => {
        e.preventDefault();
        const data = {
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            telefono: telefono,
            direccion: {
                calle: calle,
                numero: numero,
                piso: piso,
                depto: departamento,
                codigoPostal: codigoPostal,
                provincia: provicia,
                localidad: localidad
            },
            comentarios: comentarios
        };

        if (validar()) {
            dispatch(modificaUsuario(cliente.user.id, data));
        }
    }
    //me traigo el carrito
    useEffect(() => {
        if(cliente){
            dispatch(getUsuarioById(cliente.user.id));
            dispatch(getCarrito(cliente.user.id));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    //efecto para llenar los inputs con los datos del usuario
    useEffect(() => {
        if(cliente){
            setNombre(cliente.user.nombre);
            setApellido(cliente.user.apellido);
            setDni(cliente.user.dni);
            setTelefono(cliente.user.telefono);
            setCalle(cliente.user.direccion.calle);
            setNumero(cliente.user.direccion.numero);
            setPiso(cliente.user.direccion.piso);
            setDepartamento(cliente.user.direccion.depto);
            setCodigoPostal(cliente.user.direccion.codigoPostal);
            setProvincia(cliente.user.direccion.provincia);
            setLocalidad(cliente.user.direccion.localidad);
            setComentarios(cliente.user.comentarios);
        }
    }, []);

    return (
        <div className='cont-miCarrito'>
            <NavCarrito />
            <div className='cont-envio-producto'>
                <div className='cont-envio-producto-col-1'>
                    <div className='como-te-entregamos-la-compra'>
                        <div className='como-te-entregamos-la-compra-fila-1'>
                            <p className='numero1'>
                                <CheckIcon style={{ fontSize: 20, color: 'green' }} />
                            </p>
                            <p className='p-texto'>¿COMO TE ENTREGAMOS LA COMPRA?</p>
                        </div>
                        {/* <div className='como-te-entregamos-la-compra-fila-1'>
                            <p className='numero1'>
                                <CheckIcon style={{ fontSize: 20, color: 'green' }} />
                            </p>
                            <p className='p-texto'>¿COMO QUERES PAGAR?</p>
                        </div> */}
                    </div>

                    {/* ver de sicronizar con correo argentino */}
                    <form onSubmit={hadleOnSubmit} className='cont-result-busqueda-codigo-postal'>
                        <h3 className='titulo-result-busqueda'>INFORMACIÓN DE CONTACTO</h3>
                        <div className='cont-titulo-y-inputs'>
                            {/* <p className='p-despacho'>Datos del titular</p> */}
                            <div className='cont-contacto-nomb-ape-dni'>
                                {/* nombre */}
                                <div className='cont-input-contacto-nombre'>
                                    <label className='label-contacto'>Nombre</label>
                                    <input
                                        type='text'
                                        id='nombre'
                                        value={nombre}
                                        onChange={handleChangeNombre}
                                        className="input-nombre-contacto"
                                    />
                                    {errors.nombre && <p className='error'>{errors.nombre}</p>}
                                </div>
                                {/* apellido */}
                                <div className='cont-input-contacto-apellido'>
                                    <label className='label'>Apellido</label>
                                    <input
                                        type='text'
                                        id='apellido'
                                        value={apellido}
                                        onChange={handleChangeApellido}
                                        className="input-nombre-contacto"
                                    />
                                    {errors.apellido && <p className='error'>{errors.apellido}</p>}
                                </div>
                            </div>
                            {/* telefono - datos de factuarión */}
                            <div className='cont-contacto-nomb-ape-dni'>
                                {/* dni */}
                                <div className='cont-input-contacto-dni'>
                                    <label className='label'>DNI</label>
                                    <input
                                        type='text'
                                        id='dni'
                                        value={dni}
                                        onChange={handleChangeDni}
                                        className="input-nombre-contacto"
                                    />
                                    {errors.dni && <p className='error'>{errors.dni}</p>}
                                </div>
                                <div className='cont-input-contacto-tel'>
                                    <label className='label'>Telefono</label>
                                    <input
                                        type='number'
                                        id='telefono'
                                        value={telefono}
                                        onChange={handleChangeTelefono}
                                        className="input-nombre-contacto"
                                    />
                                    {errors.telefono && <p className='error'>{errors.telefono}</p>}
                                </div>                                
                            </div>                            
                            {/* calle-num-piso-depto */}
                            <div className='cont-contacto-calle-num-piso-depto'>
                                <div className='cont-input-contacto-calle'>
                                    <label className='label'>Calle</label>
                                    <input
                                        type='text'
                                        id='calle'
                                        value={calle}
                                        onChange={handleChangeCalle}
                                        className="input-nombre-contacto"
                                    />
                                    {errors.calle && <p className='error'>{errors.calle}</p>}
                                </div>
                                <div className='cont-input-num-piso-depto'>
                                    {/* num */}
                                    <div className='cont-input-contacto-numero'>
                                        <label className='label'>Num</label>
                                        <input
                                            type='number'
                                            id='numero'
                                            value={numero}
                                            onChange={handleChangeNumero}
                                            className="input-nombre-contacto"
                                        />
                                        {errors.numero && <p className='error'>{errors.numero}</p>}
                                    </div>
                                    {/* piso */}
                                    <div className='cont-input-contacto-piso'>
                                        <label className='label'>Piso</label>
                                        <input
                                            type='number'
                                            id='piso'
                                            value={piso}
                                            onChange={handleChangePiso}
                                            className="input-nombre-contacto"
                                        />
                                    </div>
                                    {/* depto */}
                                    <div className='cont-input-contacto-depto'>
                                        <label className='label'>Depto</label>
                                        <input
                                            type='text'
                                            id='departamento'
                                            value={departamento}
                                            onChange={handleChangeDepartamento}
                                            className="input-nombre-contacto"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* provincia - localida - cod postal*/}
                            <div className='cont-contacto-provincia-localidad'>
                                <div className='cont-input-contacto-prov'>
                                    <label className='label'>Provincia</label>
                                    <input
                                        type='text'
                                        id='provicia'
                                        value={provicia}
                                        onChange={handleChangeProvincia}
                                        className="input-nombre-contacto"
                                    />
                                    {errors.provicia && <p className='error'>{errors.provicia}</p>}
                                </div>
                                <div className='cont-input-contacto-localidad'>
                                    <label className='label'>Localidad</label>
                                    <input
                                        type='text'
                                        id='localidad'
                                        value={localidad}
                                        onChange={handleChangeLocalidad}
                                        className="input-nombre-contacto"
                                    />
                                    {errors.localidad && <p className='error'>{errors.localidad}</p>}
                                </div>
                                <div className='cont-input-contacto-cod-postal'>
                                    <label className='label'>Código postal</label>
                                    <input
                                        type='number'
                                        id='codigoPostal'
                                        value={codigoPostal}
                                        onChange={handleChangeCodigoPostal}
                                        className="input-nombre-contacto"
                                    />
                                    {errors.codigoPostal && <p className='error'>{errors.codigoPostal}</p>}
                                </div>
                            </div>                            
                            {/* comentarios */}
                            <div className='cont-textarea-contacto'>
                                <label className='label'>Comentarios</label>
                                <textarea
                                    id='comentarios'
                                    value={comentarios}
                                    onChange={handleChangeComentarios}
                                    className="textarea-contacto"
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div className='cont-envio-producto-col-2'>
                    <ResumenCompra carrito={carrito} />
                    {/* btns continuar y volver */}
                    <div className='cont-btns-continuar-volver'>
                        <button type='button' onClick={handleClickVolver} className='btn-volver-compra'>Seguir comprando</button>
                        <NavLink to={'/checkout'} className='nav-btn-continuar' >
                            <button type='onSubmit' className='btn-continuar-compra'>Continuar</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformacionContacto