import React from 'react'
import BotonWhastapp from '../../components/BotonWhastApp';

function ComoPagarPage() {
    return (
        <div className='page'>
            <div className='cont-politicas-cambio'>
                <div className='titulo-politicas-cambio'>
                    <h2 className='titulo-politicas'>
                        ¿Cómo pagar?
                    </h2>
                </div>
                <div className='cont-texto-comoComprar'>
                    <p>
                        Pagar con MercadoPago en un eCommerce es un proceso rápido y seguro. A continuación, te explicamos cómo hacerlo paso a paso:
                    </p>
                    <p>
                        1. Selecciona tus productos
                        Añade los productos que deseas comprar al carrito y procede al proceso de pago.
                    </p>
                    <p>
                        2. Elige MercadoPago como método de pago
                        En la sección de pagos, selecciona MercadoPago como la opción preferida.
                    </p>
                    <p>
                        3. Inicia sesión en MercadoPago
                        Si ya tienes una cuenta, inicia sesión con tu correo y contraseña. Si no, puedes registrarte en pocos minutos.
                    </p>
                    <p>
                        4. Selecciona tu forma de pago dentro de MercadoPago
                        MercadoPago ofrece varias opciones para pagar:

                        Tarjeta de crédito o débito: Puedes pagar en un solo pago o en cuotas si el comercio lo permite.
                        Dinero en cuenta de MercadoPago: Si tienes saldo disponible, puedes usarlo para completar la compra.
                        Transferencia bancaria (MercadoPago con dinero en cuenta): Permite pagar desde tu cuenta bancaria vinculada.
                        Efectivo en puntos de pago: Genera un código para pagar en efectivo en Rapipago, Pago Fácil u otros puntos habilitados.
                    </p>
                    5. Confirma el pago
                    Revisa los detalles de la compra y confirma el pago. Si utilizas tarjeta, MercadoPago puede solicitar un código de seguridad enviado a tu celular o correo.
                    <p>
                        6. Recibe la confirmación
                        Si el pago se procesa con éxito, recibirás un email de confirmación tanto de MercadoPago como del eCommerce. También puedes ver el estado del pago en tu cuenta de MercadoPago.
                    </p>
                    <p>
                        7. El comercio procesa tu pedido
                        Una vez aprobado el pago, la tienda comenzará con el envío o la entrega del producto según lo acordado.

                        Pagar con MercadoPago es seguro, ya que protege tus datos y ofrece garantías en caso de inconvenientes con la compra. 🚀
                    </p>
                </div>
                <BotonWhastapp />
            </div>
        </div>
    )
}

export default ComoPagarPage