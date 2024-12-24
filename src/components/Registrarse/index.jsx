import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './styles.css';

function Registrarse() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setemail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [error, setError] = useState(null);

    const onChangeNombre = (e) => {
        setNombre(e.target.value);
    }
    const onChangeApellido = (e) => {
        setApellido(e.target.value);
    }
    const onChangeemail = (e) => {
        setemail(e.target.value);
    }
    const onChangeContraseña = (e) => {
        setContraseña(e.target.value);
    }
    const onChangeTelefono = (e) => {
        setTelefono(e.target.value);
    }
    const onChangeDireccion = (e) => {
        setDireccion(e.target.value);
    }
    //funcion para ver la contraseña
    const onClickVerContraseña = () => {
        const inputContraseña = document.querySelector('.input-contraseña');
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
        if(!email) {
            newError.email = 'El campo email es obligatorio';
        }else if (!/\S+@\S+\.\S+/.test(email)) {
            newError.email = 'El email no es válido';
        }
        if(!contraseña) {
            newError.contraseña = 'El campo contraseña es obligatorio';
        }
        if(!telefono) {
            newError.telefono = 'El campo telefono es obligatorio';
        }
        if(!direccion) {
            newError.direccion = 'El campo direccion es obligatorio';
        }
        //actualizo el estado local de errors
        setError(newError);

        //si el objeto newError esta vacio, retorna true
        if(Object.keys(newError).length) return true;
        return false;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }


    return (
        <div className='cont-registrarse'>
            <form onSubmit={handleSubmit} className='form-registrarse'>
                <div className='cont-inputs'>
                    <div className='cont-nombre'>
                        <label className='label-input'>Nombre</label>
                        <input 
                            type="text" 
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
                            value={apellido} 
                            onChange={(e) => {onChangeApellido(e)}} 
                            className='input-apellido'
                        />
                        {error?.apellido && <p className='error'>{error.apellido}</p>}
                    </div>
                </div>

                <div className='cont-inputs'>
                    <div className='cont-email'>
                        <label className='label-input'>email</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => {onChangeemail(e)}}
                            className='input-email'
                        />
                        {error?.email && <p className='error'>{error.email}</p>}
                    </div>
                    <div className='cont-contraseña'>
                        <label className='label-input'>Contraseña</label>
                        <div className='cont-pass-viewPass'>
                        <input 
                            type="password"
                            value={contraseña}
                            onChange={(e) => {onChangeContraseña(e)}}
                            className='input-contraseña'
                        />
                        <button
                            type='button'
                            className='btn-viewPass'
                            onClick={() => {onClickVerContraseña()}}
                        >
                            <VisibilityIcon />
                        </button>
                        </div>
                        {error?.contraseña && <p className='error'>{error.contraseña}</p>}
                    </div>
                </div>

                <div className='cont-inputs'>
                    <div className='cont-telefono'>
                        <label className='label-input'>Telefono</label>
                        <input 
                            type="number"
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
                            value={direccion}
                            onChange={(e) => {onChangeDireccion(e)}}
                            className='input-direccion'
                        />
                        {error?.direccion && <p className='error'>{error.direccion}</p>}
                    </div>
                </div>

                <div className='cont-btn-registrarse'>
                    <button type="submit" className='btn-registrarse'>Registrarse</button>
                </div>
            </form>
        </div>
    )
}

export default Registrarse