import React from 'react'
import BotonWhastapp from '../../components/BotonWhastApp';
import './styles.css';

function ComoComprar() {
    return (
        <div className='page'>
            <div className='cont-politicas-cambio'>
                <div className='titulo-politicas-cambio'>
                    <h2 className='titulo-politicas'>
                    ¿Cómo comprar?
                    </h2>
                </div>
                <div className='cont-texto-comoComprar'>
                    <p>
                        Comprar es un proceso sencillo y seguro. A continuación, te explicamos los pasos:
                    </p>
                    <p>
                        1. Explora el catálogo
                        Accede al sitio web del eCommerce y navega por las diferentes categorías o utiliza el buscador para encontrar el producto que deseas comprar.
                    </p>
                    <p>
                        2. Selecciona el producto
                        Haz clic en el producto para ver más detalles, como precio, descripción, características y disponibilidad. Si es el que buscas, selecciona la cantidad deseada y agrégalo al carrito de compras.
                    </p>
                    <p>
                        3. Revisa tu carrito
                        Accede al carrito de compras para verificar los productos añadidos, modificar cantidades o eliminar artículos si es necesario. Aquí también puedes ver el total a pagar y aplicar cupones de descuento si tienes alguno.
                    </p>
                    <p>
                        4. Inicia sesión o regístrate
                        Al proceder con la compra, es posible que el eCommerce te solicite iniciar sesión con tu cuenta o registrarte si eres un nuevo usuario. Esto permite guardar tus datos de envío y pago para futuras compras.
                    </p>
                        5. Selecciona la forma de pago y envío
                        Elige el método de pago que prefieras, como tarjeta de crédito/débito, transferencia bancaria o pago contra entrega. Luego, selecciona la opción de envío que más te convenga, considerando costos y tiempos de entrega.
                    <p>
                        6. Confirma tu compra
                        Antes de finalizar, revisa toda la información y asegúrate de que sea correcta. Si todo está bien, confirma la compra.
                    </p>
                    <p>
                        7. Recibe la confirmación
                        Una vez realizada la compra, recibirás un correo electrónico con los detalles de tu pedido y un número de seguimiento si el eCommerce ofrece esta opción.
                    </p>
                    <p>
                        8. Recibe tu pedido
                        Dependiendo del método de envío seleccionado, recibirás tu compra en el plazo indicado. Si hay algún problema con el pedido, la tienda suele ofrecer opciones de cambios o devoluciones.
                    </p>
                    <p>
                        Siguiendo estos pasos, tu experiencia de compra en un eCommerce será fácil, rápida y segura. 🚀
                    </p>
                </div>
                <BotonWhastapp />
            </div>
        </div>
    )
}

export default ComoComprar