import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modificaContraseña } from '../../redux/actions/actions';
import { userData } from '../../localStorage';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Swal from 'sweetalert2';
import './styles.css';

function FormActualizarContraseña() {

    const dataUsuario = userData();
    const modifContraseña = useSelector(state => state.modifContraseña); //datos del usuario
    const [password, setPassword] = useState(''); 
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    //valida errores
    const validate = () => {
        let validationErrors = {};       
        
        if (!password) {
            validationErrors.password = 'La contraseña es obligatoria';
        } else if (password.length < 6) {
            validationErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }
        setErrors(validationErrors);
        return Object.keys(validationErrors).length > 0 ? true : false;
    };
    //funcion para ver la contraseña
    const onClickVerContraseña = () => {
        const inputContraseña = document.getElementById('password');
        if(inputContraseña.type === 'password') { //le cambio el tipo de input
            inputContraseña.type = 'text';
        }else {
            inputContraseña.type = 'password';
        }
    }
    // Función para manejar la tecla Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevenir el comportamiento predeterminado
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        
        if (validate === true) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa los campos correctamente',
            });
        } else {
            dispatch(modificaContraseña(dataUsuario.user.id, password));
        }
    };

    //efecto para disparar msj de error q viene del back
    useEffect(() => {
        if(modifContraseña?.msg === 'success'){
            Swal.fire({
                text: 'Contraseña modificada correctamente',
                icon: 'success'
            });
            setPassword('');
        }
        if(modifContraseña?.msg === 'Contraseña incorrecta'){
            Swal.fire({
                text: 'Contraseña incorrecta',
                icon: 'error'
            });
        }
    },[dispatch, modifContraseña?.msg]);


    return (
        <div className="login-container form-actualizar-contraseña">
            <h2 className="login-title">Modificar contraseña</h2>
            <form onSubmit={handleLogin} onKeyDown={handleKeyDown} className="login-form">
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <div className='cont-inputPass-Y-btnVer'>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={errors.password ? 'input-error' : 'input-pass'}
                        />
                        <button
                            type='button'
                            className='btn-viewPass-login'
                            onClick={() => { onClickVerContraseña() }}
                        >
                            <VisibilityIcon />
                        </button>
                    </div>
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                <button type="submit" className="login-button btn-actContraseña">Modificar contraseña</button>
            </form>
        </div>
    );
}

export default FormActualizarContraseña;