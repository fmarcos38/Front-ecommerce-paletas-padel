import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import NavbarInf from '../NavbarInf';
import './styles.css';
import NavbarMed from '../NavbarMed';
import NavbarSup from '../NavbarSup';

function Navbar() {

  const [isOpen, setIsOpen] = React.useState(false); //menu hamburguesa  
  const menuRef = React.useRef(null); //referencia menu hamburguesa
  const menuItemsRef = React.useRef([]); //referencia items menu hamburguesa  

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
            
        }
        //redirijo a home
        window.location.href = '/';
    });        
};
  
  //cierra el menú hamburguesa si se hace click fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
        // Verificar si el clic o toque es fuera del menú
        if (
            menuRef.current && !menuRef.current.contains(event.target) && 
            !menuItemsRef.current.some(item => item.contains(event.target))
        ) {
            setIsOpen(false); // Cierra el menú si no es clic en el menú
        }
    }

    // Escuchar el evento pointerdown (compatible con mouse y táctil)
    document.addEventListener('pointerdown', handleClickOutside);
    return () => {
        // Limpiar el evento cuando el componente se desmonta
        document.removeEventListener('pointerdown', handleClickOutside);
    };
}, []);

  return (
    <div className='navbar'>
      {/* nav sup */}
      <NavbarSup />
      {/* nav med */}
      <NavbarMed 
        isOpen={isOpen}
        menuRef={menuRef} 
        menuItemsRef={menuItemsRef} 
        toggleMenu={toggleMenu} 
        handleLogOut={handleLogOut}
      />
      {/* nav inf */}
      <NavbarInf/>
    </div>
  )
}

export default Navbar