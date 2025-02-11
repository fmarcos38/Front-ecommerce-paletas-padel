import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './styles.css';

function InputField({ type, id, label, value, onChange, error, onClickVerContraseña }) {
    return (
        <div className={`cont-input-field-${id}`}>
            <label className="label">{label}</label>
            <div className='cont-pass'>
                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={onChange}
                    className={`input-${id}`}
                />
                {error && <p className="error">{error}</p>}
                {
                    type === 'password' && (
                        <button
                            type='button'
                            className='btn-viewPass'
                            onClick={onClickVerContraseña}
                        >
                            <VisibilityIcon />
                        </button>
                    )
                }
            </div>
        </div>
    )
}

export default InputField