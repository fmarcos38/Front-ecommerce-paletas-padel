import React, { useEffect } from 'react';
import { logOut} from '../../localStorage';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import NavbarInf from '../NavbarInf';
import NavbarMed from '../NavbarMed';
import NavbarSup from '../NavbarSup';
import './styles.css';


function Navbar() {

  const usuario = useSelector(state => state.dataUsuario);
  const [isOpen, setIsOpen] = React.useState(false); //menu hamburguesa  
  //const menuRef = React.useRef(null); //referencia menu hamburguesa
  //const menuItemsRef = React.useRef([]); //referencia items menu hamburguesa
  const carrito = useSelector(state => state.carrito); //carrito para obtener cantidad de productos
  const favoritos = useSelector(state => state.favoritos); //favoritos para obtener cantidad de productos  
  
  //funcion para abrir y cerrar menu hamburguesa
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }  
  //logout
  const handleLogOut = () => {
    Swal.fire({
        title: "Salir?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!"
    }).then((result) => {
        if (result.isConfirmed) {
          logOut();
        }
        //redirijo a home
        window.location.href = '/';
    });        
  };
  
  

  
  return (
    <div className='navbar'>
      {/* nav sup */}
      <NavbarSup />
      {/* nav med */}
      <NavbarMed 
        usuario={usuario}
        isOpen={isOpen}
        /* menuRef={menuRef} 
        menuItemsRef={menuItemsRef} */ 
        toggleMenu={toggleMenu} 
        handleLogOut={handleLogOut}
        itemsCarrito={carrito.productos?.length}
        itemsFavoritos={favoritos?.length}
      />
      {/* nav inf */}
      <NavbarInf usuario={usuario}/>
    </div>
  )
}

export default Navbar