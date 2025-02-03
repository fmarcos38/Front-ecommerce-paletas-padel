import React, { useContext } from 'react';
import { AppContext } from '../../context';
import LoginClasico from '../../components/LoginClasico';
import LoginGoogle from '../../components/LoginGoogle';
import ModalRecuperaDatos from '../../components/ModalRecuperarDatos';
import './styles.css';

function LoginPage() {
    const context = useContext(AppContext);

    return (
        <div className='cont-login-page page'>
            <div className='cont-login-clasico-page'>
                <LoginClasico />
            </div>
            
            <div className='cont-login-google-page'>
                <LoginGoogle />
            </div>

            {/* modal recuperar datos */}
            <div className={context.recuperaDatosModal ? 'modalRecuperaDatos' : 'modalRecuperaDatos hidden'}>
                <ModalRecuperaDatos />
            </div>
        </div>
    )
}

export default LoginPage