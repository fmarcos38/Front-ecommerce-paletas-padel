import React, { useEffect, useState } from 'react';
import Card from '../Card'; // Asegúrate de importar el componente Card
import './styles.css';

function ListaOfertas({ productos }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [productsPerPage, setProductsPerPage] = useState(4);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? productos.length - productsPerPage : prevIndex - productsPerPage));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + productsPerPage >= productos.length ? 0 : prevIndex + productsPerPage));
    };

    useEffect(() => {
        const updateProductsPerPage = () => {
            const width = window.innerWidth;
            if (width < 700) {
                setProductsPerPage(1);
            } else if (width < 1122) {
                setProductsPerPage(2);
            } else {
                setProductsPerPage(4);
            }
        };

        updateProductsPerPage(); // Inicializa el valor al cargar el componente
        window.addEventListener('resize', updateProductsPerPage); // Actualiza el valor al cambiar el tamaño de la ventana

        return () => {
            window.removeEventListener('resize', updateProductsPerPage); // Limpia el evento al desmontar el componente
        };
    }, []);

    useEffect(() => {
        setVisibleProducts(productos.slice(currentIndex, currentIndex + productsPerPage));
    }, [currentIndex, productsPerPage, productos]);
    

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