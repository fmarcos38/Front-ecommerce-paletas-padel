import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registrarse } from '../../redux/actions/actions';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LoginGoogle from '../LoginGoogle';
import Swal from 'sweetalert2';
import './styles.css';


function Registrarse({operacion}) {

    const usuario = useSelector(state => state.dataUsuario);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [email, setemail] = useState('');
    const [password, setContraseña] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    //función quito los errores
    const quitarError = (e) => {
        const newError = { ...error };
        delete newError[e.target.name];
        setError(newError);
    }

    const onChangeNombre = (e) => {
        setNombre(e.target.value);
        quitarError(e);
    }
    const onChangeApellido = (e) => {
        setApellido(e.target.value);
        quitarError(e);
    }
    const onChangeDni = (e) => {
        setDni(e.target.value);
        quitarError(e);
    }
    const onChangeemail = (e) => {
        setemail(e.target.value);
        quitarError(e);
    }
    const onChangeContraseña = (e) => {
        setContraseña(e.target.value);
        quitarError(e);
    }
    const onChangeTelefono = (e) => {
        setTelefono(e.target.value);
        quitarError(e);
    }
    const onChangeDireccion = (e) => {
        setDireccion(e.target.value);
        quitarError(e);
    }
    //funcion para ver la password
    const onClickVerContraseña = () => {
        const inputContraseña = document.querySelector('.input-password');
        if(inputContraseña.type === 'password') { //le cambio el tipo de input
            inputContraseña.type = 'text';
        }else {
            inputContraseña.type = 'password';
        }
    }
    //valida errores
    const validar = () => {
        const newError = {};

        if(!nombre) {
            newError.nombre = 'El campo nombre es obligatorio';
        }
        if(!apellido) {
            newError.apellido = 'El campo apellido es obligatorio';
        }
        if(!dni) {
            newError.dni = 'El campo dni es obligatorio';
        }
        if(!email) {
            newError.email = 'El campo email es obligatorio';
        }else if (!/\S+@\S+\.\S+/.test(email)) {
            newError.email = 'El email no es válido';
        }
        if(!password) {
            newError.password = 'El campo password es obligatorio';
        }
        if(!telefono) {
            newError.telefono = 'El campo telefono es obligatorio';
        }
        if(!direccion) {
            newError.direccion = 'El campo direccion es obligatorio';
        }
        //actualizo el estado local de errors
        setError(newError);

        //si el objeto newError esta vacio, retorna false
        if(Object.keys(newError).length) return true;
        return false;
    }
    //limpio los campos
    const limpiarCampos = () => {
        setNombre('');
        setApellido('');
        setDni('');
        setemail('');
        setContraseña('');
        setTelefono('');
        setDireccion('');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validar()) {
            const data = {
                nombre,
                apellido,
                dni,
                email,
                password,
                telefono,
                direccion,
                isAdmin: false
            };
            dispatch(registrarse(data))
                .then((response) => {
                    if (response?.msg === 'success') {
                        Swal.fire({
                            icon: 'success',
                            title: 'Registrado correctamente',
                            timer: 1500,
                        });
                        limpiarCampos();
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: response?.data?.msg || 'Error desconocido',
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error del servidor:", error.response?.data || error.message);
                    Swal.fire({
                        icon: 'error',
                        title: error.response?.data?.msg || 'Error al conectar con el servidor',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                });
        }
    }

    //efecto si la operacion es modificar
    React.useEffect(() => {
        if (operacion === 'modificar') {
            setNombre(usuario.nombre);
            setApellido(usuario.apellido);
            setDni(usuario.dni);
            setemail(usuario.email);
            setContraseña(usuario.password);
            setTelefono(usuario.telefono);
            setDireccion(usuario.direccion);
        }
    }, [operacion, usuario]);
    
    return (
        <div className='cont-registrarse'>
            <form onSubmit={handleSubmit} className='form-registrarse'>
                <div className='cont-inputs'>
                    <div className='cont-email'>
                        <label className='label-input'>Nombre</label>
                        <input 
                            type="text"
                            name='nombre'
                            value={nombre} 
                            onChange={(e) => {onChangeNombre(e)}} 
                            className='input-nombre'
                        />
                        {error?.nombre && <p className='error'>{error.nombre}</p>}
                    </div>
                    <div className='cont-apellido'>
                        <label className='label-input'>Apellido</label>
                        <input 
                            type="text"
                            name='apellido' 
                            value={apellido} 
                            onChange={(e) => {onChangeApellido(e)}} 
                            className='input-apellido'
                        />
                        {error?.apellido && <p className='error'>{error.apellido}</p>}
                    </div>
                    <div className='cont-password'>
                        <label className='label-input'>DNI</label>
                        <input 
                            type="number" 
                            name='dni'
                            value={dni} 
                            onChange={(e) => {onChangeDni(e)}} 
                            className='input-apellido'
                        />
                        {error?.dni && <p className='error'>{error.dni}</p>}
                    </div>
                </div>

                <div className='cont-inputs'>
                    <div className='cont-email'>
                        <label className='label-input'>email</label>
                        <input 
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => {onChangeemail(e)}}
                            className='input-email'
                        />
                        {error?.email && <p className='error'>{error.email}</p>}
                    </div>
                    <div className='cont-password'>
                        <label className='label-input'>Contraseña</label>
                        <div className='cont-pass-viewPass'>
                            <input
                                type="password"
                                name='password'
                                value={password}
                                onChange={(e) => { onChangeContraseña(e) }}
                                className='input-password'
                            />
                            <button
                                type='button'
                                className='btn-viewPass'
                                onClick={() => { onClickVerContraseña() }}
                            >
                                <VisibilityIcon />
                            </button>
                        </div>
                        {error?.password && <p className='error'>{error.password}</p>}
                    </div>
                </div>

                <div className='cont-inputs'>
                    <div className='cont-telefono'>
                        <label className='label-input'>Telefono</label>
                        <input 
                            type="number"
                            name='telefono'
                            value={telefono}
                            onChange={(e) => {onChangeTelefono(e)}}
                            className='input-telefono'
                        />
                        {error?.telefono && <p className='error'>{error.telefono}</p>}
                    </div>
                    <div className='cont-direccion'>
                        <label className='label-input'>Dirección</label>
                        <input 
                            type="text"
                            name='direccion' 
                            value={direccion}
                            onChange={(e) => {onChangeDireccion(e)}}
                            className='input-direccion'
                        />
                        {error?.direccion && <p className='error'>{error.direccion}</p>}
                    </div>
                </div>

                <div className='cont-btn-registrarse'>
                    <button type="submit" className='btn-registrarse'>Registrarse</button>
                    <LoginGoogle />
                </div>
            </form>
        </div>
    )
}

export default Registrarse