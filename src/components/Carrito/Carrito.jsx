import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext.jsx"
import Meta from 'react-document-meta'
import Swal from 'sweetalert2';

const Carrito = () => {
    const { carrito, eliminarCarrito, vaciarCarrito, actualizarCantidad } = useContext(CarritoContext)

    const subtotal = carrito.reduce((acc, producto) => {
        const cantidad = producto.cantidad || 1
        return acc + producto.price * cantidad
    }, 0)

    const envio = 0
    const total = subtotal + envio

    const manejarCantidad = (indice, operacion) => {
        const productoSeleccionado = carrito[indice]
        const cantidadActual = productoSeleccionado.cantidad
        const idProducto = carrito[indice].id

        const operaciones = {
            incrementar: 1,
            decrementar: -1
        }

        const nuevaCantidad = cantidadActual + operaciones[operacion]

        if (nuevaCantidad <= 0) {
            eliminarCarrito(idProducto)
        } else {
            actualizarCantidad(indice, nuevaCantidad)
        }
    }

    const simularCheckout = () =>{
        Swal.fire({
            title: "Checkout Simulado",
            text: "¡Gracias por tu compra!",
            icon: "succes",
            confirmButtonColor: '#32871bff',
            background: '#262837',
            color: '#fff'
        });

        vaciarCarrito()
    }

    const meta = {
        title: "Carrito | Mi tienda",
        description: "Carrito de compra donde se almacenan los productos seleccionados para la compra",
        meta: {
            charset: "utf-8",
            name: {
                keywords: "producto, camisetas, futbol, remeras, equipos, argentina, europa, tienda, ecommerce, carrito, comprar, pago"
            }
        }
    }

    return (
        <div className="min-h-screen bg-[#252836] text-gray-200 p-8 ml-0 sm:ml-28">
            <Meta {...meta}/>

            <h3 className="text-2xl font-semibold text-[#ec7c6a] mb-6 text-center sm:text-left">
                Carrito
            </h3>

            {carrito.length > 0 ? (
                <>
                    <div className="flex justify-center sm:justify-start">
                        <button
                            onClick={vaciarCarrito}
                            className="mb-6 bg-[#ec7c6a] hover:bg-[#d86b5a] text-white font-medium px-4 py-2 rounded-xl transition-colors"
                        >
                            Vaciar carrito
                        </button>
                    </div>

                    <div className="space-y-4">

                        {carrito.map((item, index) => (
                            <div key={index} className="bg-[#1F1D2B] p-4 rounded-xl shadow-md  flex flex-col sm:flex-row justify-between items-center gap-4 mx-auto sm:mx-0 w-full max-w-sm sm:max-w-none"
                            >
                                <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-16 h-16 object-contain bg-[#262837] p-2 rounded-lg"
                                    />

                                    <div className="text-center sm:text-left">
                                        <p className="font-semibold text-white">{item.title}</p>
                                        <p className="text-sm text-gray-400">Precio unitario: ${item.price}</p>
                                        <p className="text-sm text-gray-300 font-semibold">
                                            Subtotal: ${item.price * item.cantidad}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 justify-center sm:justify-start">

                                    <div className="flex items-center bg-[#262837] rounded-lg">
                                        <button
                                            onClick={() => manejarCantidad(index, "decrementar")}
                                            className="px-3 py-1 text-xl text-gray-300 hover:text-white"
                                        >
                                            –
                                        </button>

                                        <span className="px-3 font-semibold text-white">
                                            {item.cantidad}
                                        </span>

                                        <button
                                            onClick={() => manejarCantidad(index, "incrementar")}
                                            className="px-3 py-1 text-xl text-gray-300 hover:text-white"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => eliminarCarrito(item.id)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                                    >
                                        X
                                    </button>

                                </div>
                            </div>
                        ))}

                        <div className="bg-[#1F1D2B] p-5 rounded-xl shadow-md mt-8 
                        w-full max-w-sm sm:max-w-none mx-auto sm:mx-0">
                            <h3 className="text-xl font-semibold text-[#ec7c6a] mb-4 text-center sm:text-left">
                                Resumen de compra
                            </h3>

                            <div className="space-y-2 text-lg">
                                <p className="flex justify-between">
                                    <span className="text-gray-300">Subtotal</span>
                                    <span className="font-semibold">${subtotal}</span>
                                </p>

                                <p className="flex justify-between">
                                    <span className="text-gray-300">Envío</span>
                                    {envio === 0 ? (
                                        <span className="font-semibold text-green-300">¡Envío Gratis!</span>
                                    ) : (
                                        <span className="font-semibold text-green-300">${envio}</span>
                                    )}
                                </p>

                                <hr className="border-[#2e2f3b] my-3" />

                                <p className="flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span className="text-[#ec7c6a]">${total}</span>
                                </p>
                            </div>

                            <button
                                onClick={() => simularCheckout()}
                                className="mt-6 w-full bg-[#ec7c6a] hover:bg-[#d86b5a] 
                       text-white font-semibold py-3 rounded-xl transition-colors"
                            >
                                Confirmar compra
                            </button>
                        </div>
                    </div>

                </>
            ) : (
                <p className="text-gray-400 italic text-center sm:text-left">El carrito está vacío.</p>
            )}

        </div>
    )
}

export default Carrito