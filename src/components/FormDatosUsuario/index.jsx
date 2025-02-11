import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import './styles.css';



function FormDatosUsuario({ 
  nombre, apellido, email, password, dni, area, numTel, calle, 
  numero, piso, depto, codigoPostal, provincia, localidad, 
  comentarios, errors, onClickVerContraseña, handleChange, handleSubmit, registrarse }) {

  return (
    <form onSubmit={handleSubmit} className='cont-form-datos-usuario'>      
        {/* nomb - ape- dni */}
        <div className='cont-form-datos-usuario-nomb-ape-dni'>
          <div className='cont-nomb'>
            <label className='label'>Nombre</label>
            <input type="text" id="nombre" label="Nombre" value={nombre} onChange={handleChange} error={errors.nombre} className='input-form-usuario'/>
          </div>
          <div className='cont-ape'>
            <label className='label'>Apellido</label>
            <input type="text" id="apellido" label="Apellido" value={apellido} onChange={handleChange} error={errors.apellido} className='input-form-usuario'/>
          </div>
          <div className='cont-dni'>
            <label className='label'>DNI</label>
            <input type="number" id="dni" label="DNI" value={dni} onChange={handleChange} error={errors.dni} className='input-form-usuario'/>
          </div>
        </div>
        {/* email - pass */}
        {
          registrarse && (
            <div className='cont-form-datos-usuario-email-pass'>
              <div className='cont-email'>
                <label className='label'>Email</label>
                <input type="email" id="email" label="Email" value={email} onChange={handleChange} error={errors.email} className='input-form-usuario'/>
              </div>
              {/* pass */}
              <div className='cont-password'>
                <label className='label-input'>Contraseña</label>
                <div className='cont-pass-viewPass'>
                  <input type="password" id='password' value={password} onChange={handleChange} error={errors.password} className='input-form-pass' />
                  <button type='button' className='btn-viewPass' onClick={onClickVerContraseña}>
                    <VisibilityIcon />
                  </button>
                </div>
              </div>
          </div>
          )
        }
        {/* telefono - datos de factuarión */}
        <div className='cont-form-datos-usuario-tel-area'>
          <div className='cont-area'>
            <label className='label'>Area</label>
            <input type="number" id="area" label="Area" value={area} onChange={handleChange} error={errors.area} className='input-form-usuario'/>
          </div>
          <div className='cont-tel'>
            <label className='label'>Num teléfono</label>
            <input type="number" id="numTel" label="Número de teléfono" value={numTel} onChange={handleChange} error={errors.numTel} className='input-form-usuario'/>
          </div>
        </div>
        {/* calle-num-piso-depto */}
        <div className='cont-form-datos-usuario-calle-num-piso-depto'>
          <div className='cont-calle'>
            <label className='label'>Calle</label>
            <input type="text" id="calle" label="Calle" value={calle} onChange={handleChange} error={errors.calle} className='input-form-usuario'/>
          </div>
          <div className='cont-numero'>
            <label className='label'>Número</label>
            <input type="number" id="numero" label="Número" value={numero} onChange={handleChange} error={errors.numero} className='input-form-usuario'/>
          </div>
          <div className='cont-piso'>
            <label className='label'>Piso</label>
            <input type="number" id="piso" label="Piso" value={piso} onChange={handleChange} error={errors.piso} className='input-form-usuario'/>
          </div>
          <div className='cont-depto'>
            <label className='label'>Depto</label>
            <input type="text" id="depto" label="Depto" value={depto} onChange={handleChange} error={errors.depto} className='input-form-usuario'/>
          </div>
        </div>
        {/* provincia - localida - cod postal*/}
        <div className='cont-form-datos-usuario-prov-loc-cod-postal'>
          <div className='cont-cod-postal'>
            <label className='label'>Código postas</label>
            <input type="number" id="codigoPostal" label="Código Postal" value={codigoPostal} onChange={handleChange} error={errors.codigoPostal} className='input-form-usuario' />
          </div>
          <div className='cont-prov'>
            <label className='label'>Provincia</label>
            <input type="text" id="provincia" label="Provincia" value={provincia} onChange={handleChange} error={errors.provincia} className='input-form-usuario' />
          </div>
          <div className='cont-localidad'>
            <label className='label'>Localidad</label>
            <input type="text" id="localidad" label="Localidad" value={localidad} onChange={handleChange} error={errors.localidad} className='input-form-usuario' />
          </div>
        </div>
        {/* comentarios */}
        <div className='cont-textarea-contacto'>
          <label className='label'>Comentarios</label>
          <textarea id='comentarios' value={comentarios} onChange={handleChange} className="textarea-contacto" />
        </div>
      
      <button type='onSubmit' className='btn-continuar-compra'>
        {
          registrarse ? 'Registrarse' : 'Modificar datos de entrega'
        }
      </button>
    </form>
  )
}

export default FormDatosUsuario