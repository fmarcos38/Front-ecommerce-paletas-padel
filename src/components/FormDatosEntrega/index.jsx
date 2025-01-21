import React from 'react';
import './styles.css'

function FormDatosEntrega({
    calle, numero, piso, departamento, provicia, localidad, codigoPostal, errors, 
    handleChangeCalle, handleChangeNumero, handleChangePiso, handleChangeDepartamento, 
    handleChangeProvincia, handleChangeLocalidad, handleChangeCodigoPostal
}) {


    return (
        <div>
            {/* calle-num-piso-depto */}
            <div className='cont-contacto-calle-num-piso-depto'>
                <div className='cont-input-contacto-calle'>
                    <label className='label'>Calle</label>
                    <input
                        type='text'
                        id='calle'
                        value={calle}
                        onChange={handleChangeCalle}
                        className="input-calle-contacto"
                    />
                    {errors.calle && <p className='error'>{errors.calle}</p>}
                </div>
                <div className='cont-input-contacto-numero'>
                    <label className='label'>Número</label>
                    <input
                        type='number'
                        id='numero'
                        value={numero}
                        onChange={handleChangeNumero}
                        className="input-numero-contacto"
                    />
                    {errors.numero && <p className='error'>{errors.numero}</p>}
                </div>
                <div className='cont-input-contacto-piso'>
                    <label className='label'>Piso</label>
                    <input
                        type='number'
                        id='piso'
                        value={piso}
                        onChange={handleChangePiso}
                        className="input-piso-contacto"
                    />
                </div>
                <div className='cont-input-contacto-depto'>
                    <label className='label'>Depto</label>
                    <input
                        type='text'
                        id='departamento'
                        value={departamento}
                        onChange={handleChangeDepartamento}
                        className="input-depto-contacto"
                    />
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
                        className="input-prov-contacto"
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
                        className="input-localidad-contacto"
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
                        className="input-cod-postal-contacto"
                    />
                    {errors.codigoPostal && <p className='error'>{errors.codigoPostal}</p>}
                </div>
            </div>
        </div>
    )
}

export default FormDatosEntrega