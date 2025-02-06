import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCarrito, getUsuarioById, modificaUsuario } from '../../redux/actions/actions';
import { userData } from '../../localStorage';
import ResumenCompra from '../ResumenCompra';
import CheckIcon from '@mui/icons-material/Check';
import NavCarrito from '../NavCarrito';
import './styles.css';


function InformacionContacto() {

    const clienteLog= userData();
    const cliente = useSelector(state => state.dataUsuario);
    const carrito = useSelector(state => state.carrito);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [area, setArea] = useState('');
    const [numTel, setNumTel] = useState('');
    const [calle, setCalle] = useState('');
    const [numero, setNumero] = useState('');
    const [piso, setPiso] = useState('');
    const [depto, setDepto] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [comentarios, setComentarios] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    //funcion onClick vuelvo a la página anterior
    const handleClickVolver = () => {
        window.history.back();
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setErrors((prev) => ({ ...prev, [id]: null }));
        switch (id) {
            case 'nombre':
                setNombre(value);
                break;
            case 'apellido':
                setApellido(value);
                break;
            case 'dni':
                setDni(value);
                break;
            case 'area':
                setArea(value);
                break;
            case 'numTel':
                setNumTel(value);
                break;
            case 'calle':
                setCalle(value);
                break;
            case 'numero':
                setNumero(value);
                break;
            case 'piso':
                setPiso(value);
                break;
            case 'departamento':
                setDepto(value);
                break;
            case 'codigoPostal':
                setCodigoPostal(value);
                break;
            case 'provincia':
                setProvincia(value);
                break;
            case 'localidad':
                setLocalidad(value);
                break;
            case 'comentarios':
                setComentarios(value);
                break;
            default:
                break;
        }
    };

    const validar = () => {
        const campos = {
            nombre,
            apellido,
            dni,
            area,
            numTel,
            calle,
            numero,
            piso,
            depto,
            codigoPostal,
            provincia,
            localidad,
        };

        const nuevosErrores = Object.entries(campos).reduce((acc, [key, value]) => {
            if (!value || value.trim() === '') {
                acc[key] = `El campo ${key} es requerido.`;
            }
            return acc;
        }, {});

        setErrors(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validar()) {
            const data = ({
                nombre,
                apellido,
                dni,
                telefono: { area, numero: numTel },
                direccion: {
                    calle,
                    numero,
                    piso,
                    depto,
                    codigoPostal,
                    provincia,
                    localidad,
                },
                comentarios,
            });
            dispatch(modificaUsuario(cliente.id, data));
        }
    };

    const InputField = ({ id, label, type = 'text', value, onChange, error }) => (
        <div className={`cont-input-contacto-${id}`}>
            <label className="label">{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                className={`input-${id}`}
            />
            {error && <p className="error">{error}</p>}
        </div>
    );

    //me traigo el carrito
    useEffect(() => {
        if(clienteLog){
            dispatch(getUsuarioById(clienteLog.id));
            dispatch(getCarrito(clienteLog.id));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    useEffect(() => {
        if (cliente?.nombre) {
            setNombre(cliente.nombre || '');
            setApellido(cliente.apellido || '');
            setDni(cliente.dni || '');
            setArea(cliente.telefono?.area || '');
            setNumTel(cliente.telefono?.numero || '');
            setCalle(cliente.direccion?.calle || '');
            setNumero(cliente.direccion?.numero || '');
            setPiso(cliente.direccion?.piso || '');
            setDepto(cliente.direccion?.depto || '');
            setCodigoPostal(cliente.direccion?.codigoPostal || '');
            setProvincia(cliente.direccion?.provincia || '');
            setLocalidad(cliente.direccion?.localidad || '');
            setComentarios(cliente.comentarios || '');
        }
    }, [cliente]);

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
                    <form onSubmit={handleSubmit} className='cont-result-busqueda-codigo-postal'>
                        <h3 className='titulo-result-busqueda'>INFORMACIÓN DE CONTACTO</h3>
                        <div className='cont-titulo-y-inputs'>
                            <div className='cont-contacto-nomb-ape-dni'>
                                <InputField id="nombre" label="Nombre" value={nombre} onChange={handleChange} error={errors.nombre} />
                                <InputField id="apellido" label="Apellido" value={apellido} onChange={handleChange} error={errors.apellido} />
                                <InputField id="dni" label="DNI" value={dni} onChange={handleChange} error={errors.dni} />
                            </div>
                            {/* telefono - datos de factuarión */}
                            <div className='cont-contacto-nomb-ape-dni'>
                                <InputField id="area" label="Área" value={area} onChange={handleChange} error={errors.area} />
                                <InputField id="numTel" label="Teléfono" value={numTel} onChange={handleChange} error={errors.numTel} />                                 
                            </div>                            
                            {/* calle-num-piso-depto */}
                            <div className='cont-contacto-nomb-ape-dni'>
                                <InputField id="calle" label="Calle" value={calle} onChange={handleChange} error={errors.calle} classNameInput='calle'/>
                                <InputField id="numero" label="Num" value={numero} onChange={handleChange} error={errors.numero} className='piso'/>
                                <InputField id="piso" label="Piso" value={piso} onChange={handleChange} error={errors.piso} className='piso'/>
                                <InputField id="depto" label="Depto" value={depto} onChange={handleChange} error={errors.depto} className='piso'/>
                            </div>
                            {/* provincia - localida - cod postal*/}
                            <div className='cont-contacto-nomb-ape-dni'>
                                <InputField id="codigoPostal" label="Código Postal" value={codigoPostal} onChange={handleChange} error={errors.codigoPostal} />
                                <InputField id="provincia" label="Provincia" value={provincia} onChange={handleChange} error={errors.provincia} />
                                <InputField id="localidad" label="Localidad" value={localidad} onChange={handleChange} error={errors.localidad} />
                            </div>
                            {/* comentarios */}
                            <div className='cont-textarea-contacto'>
                                <label className='label'>Comentarios</label>
                                <textarea
                                    id='comentarios'
                                    value={comentarios}
                                    onChange={handleChange}
                                    className="textarea-contacto"
                                />
                            </div>
                        </div>
                        <button type='onSubmit' className='btn-continuar-compra'>Modificar datos de entrega</button>
                    </form>
                </div>

                <div className='cont-envio-producto-col-2'>
                    <ResumenCompra carrito={carrito} />
                    {/* btns continuar y volver */}
                    <div className='cont-btns-continuar-volver'>
                        <button type='button' onClick={handleClickVolver} className='btn-volver-compra'>Seguir comprando</button>
                        <a href='/checkout' className='btn-continuar-compra'>Continuar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformacionContacto