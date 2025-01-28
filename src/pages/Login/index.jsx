import React from 'react';
import './styles.css';
import LoginClasico from '../../components/LoginClasico';
import LoginGoogle from '../../components/LoginGoogle';

function LoginPage() {
    return (
        <div className='cont-login-page page'>
            <div className='cont-login-clasico-page'>
                <LoginClasico />
            </div>
            
            <div className='cont-login-google-page'>
                <LoginGoogle />
            </div>
        </div>
    )
}

export default LoginPage