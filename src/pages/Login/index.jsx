import React from 'react';
import './styles.css';
import LoginClasico from '../../components/LoginClasico';

function LoginPage() {
    return (
        <div className='cont-login-page page'>
            <div className='cont-login-clasico-page'>
                <LoginClasico />
            </div>
            
            Login con Google
        </div>
    )
}

export default LoginPage