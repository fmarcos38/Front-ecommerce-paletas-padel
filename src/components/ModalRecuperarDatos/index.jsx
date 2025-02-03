import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { getUsuarioByDNI } from '../../redux/actions/actions';
import { AppContext } from '../../context';
import Swal from 'sweetalert2';
import './styles.css';

function ModalRecuperaDatos() {
    const [dni, setDni] = React.useState('');
    const [errors, setErrors] = React.useState({});
    const dispatch = useDispatch();
    const context = useContext(AppContext);

    const validate = () => {
        let validationErrors = {};
        if (!dni) {
            validationErrors.dni = 'El DNI es obligatorio';
        }
        setErrors(validationErrors);
        return Object.keys(validationErrors).length > 0 ? true : false;
    }

    const onChangeDni = (e) => {
        setDni(e.target.value);
        //quito error
        if (errors.dni) {
            setErrors({});
        }
    }

    const handleRecuperaDatos = (e) => {
        e.preventDefault();
        if (validate()) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa los campos correctamente',
            });
        } else {
            dispatch(getUsuarioByDNI(dni))
            window.location.href = '/modificarDatos';
        }
    }

    return (
        <form onSubmit={handleRecuperaDatos} className='form-modalRecupera'>
            <button type='button' onClick={() => { context.setRecuperaDatosModal(false) }} className="modalRecuperaDatos__close">X</button>
            <h2>Recupera tus datos</h2>
            <div className="modalRecuperaDatos__input">
                <label>Ingresa tu DNI</label>
                <input
                    type="number"
                    name='dni'
                    value={dni}
                    onChange={onChangeDni}
                    className='modalRecuperaDatos__inputDNI'
                />
            </div>
            <button type='onSubmit' className='modalRecuperaDatos__btn'>Enviar</button>
        </form>
    )
}

export default ModalRecuperaDatos