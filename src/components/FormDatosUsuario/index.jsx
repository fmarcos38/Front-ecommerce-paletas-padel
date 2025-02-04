import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';

function FormDatosUsuario({
  nombre, apellido, dni, email, password, telefono, direccion,  
  onChangeNombre, onChangeApellido, onChangeDni, onChangeemail, onChangeContraseña,
  onChangeTelefono, onChangeDireccion, error, onClickVerContraseña
}) {

  return (
    <div className='form-registrarse'>
      <div className='cont-inputs'>
        <div className='cont-email'>
          <label className='label-input'>Nombre</label>
          <input
            type="text"
            name='nombre'
            value={nombre}
            onChange={(e) => { onChangeNombre(e) }}
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
            onChange={(e) => { onChangeApellido(e) }}
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
            onChange={(e) => { onChangeDni(e) }}
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
            onChange={(e) => { onChangeemail(e) }}
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
            onChange={(e) => { onChangeTelefono(e) }}
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
            onChange={(e) => { onChangeDireccion(e) }}
            className='input-direccion'
          />
          {error?.direccion && <p className='error'>{error.direccion}</p>}
        </div>
      </div>
    </div>
  )
}

export default FormDatosUsuario