import React, { useState } from 'react';
import Card from '../Card'; // Asegúrate de importar el componente Card
import './styles.css';

function ListaOfertas({ productos }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? productos.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === productos.length - 1 ? 0 : prevIndex + 1));
    };

    const visibleProducts = productos.slice(currentIndex, currentIndex + 3);

    return (
        <div className="lista-ofertas-container">
            <button className="arrow-button" onClick={handlePrevClick}>←</button>
            <div className="lista-ofertas">
                {visibleProducts.map((producto, index) => (
                    <Card 
                        key={index}
                        id={producto.id} 
                        nombre={producto.nombre}
                        precio={producto.precio} 
                        imagenes={producto.imagenes} 
                        agotado={producto.agotado} 
                        enPromo={producto.enPromo} 
                        porcentajeDescuento={producto.porcentajeDescuento}
                    />
                ))}
            </div>
            <button className="arrow-button" onClick={handleNextClick}>→</button>
        </div>
    );
}

export default ListaOfertas;