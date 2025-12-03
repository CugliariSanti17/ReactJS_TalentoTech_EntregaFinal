import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext.jsx"

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
    return (
        <div className='ml-28 min-h-screen bg-[#252836] text-gray-200 p-8'>

            <h3 className="text-2xl font-semibold text-[#ec7c6a] mb-6">
                Carrito
            </h3>

            {carrito.length > 0 ? (
                <>
                    <button
                        onClick={vaciarCarrito}
                        className="mb-6 bg-[#ec7c6a] hover:bg-[#d86b5a] text-white font-medium px-4 py-2 rounded-xl transition-colors"
                    >
                        Vaciar carrito
                    </button>

                    <div className="space-y-4">

                        {carrito.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#1F1D2B] p-4 rounded-xl shadow-md flex justify-between items-center"
                            >
                                {/* INFO IZQUIERDA */}
                                <div className="flex items-center gap-4">

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-16 h-16 object-contain bg-[#262837] p-2 rounded-lg"
                                    />

                                    <div>
                                        <p className="font-semibold text-white">{item.title}</p>
                                        <p className="text-sm text-gray-400">
                                            Precio unitario: ${item.price}
                                        </p>
                                        <p className="text-sm text-gray-300 font-semibold">
                                            Subtotal: ${item.price * item.cantidad}
                                        </p>
                                    </div>
                                </div>

                                {/* CONTROLES DERECHA */}
                                <div className="flex items-center gap-4">

                                    {/* BOTONES DE CANTIDAD */}
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

                                    {/* ELIMINAR */}
                                    <button
                                        onClick={() => eliminarCarrito(index)}
                                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                                    >
                                        X
                                    </button>

                                </div>

                            </div>
                        ))}

                        {/* RESUMEN DE COMPRA */}
                        <div className="bg-[#1F1D2B] p-5 rounded-xl shadow-md mt-8">
                            <h3 className="text-xl font-semibold text-[#ec7c6a] mb-4">
                                Resumen de compra
                            </h3>

                            <div className="space-y-2 text-lg">
                                <p className="flex justify-between">
                                    <span className="text-gray-300">Subtotal</span>
                                    <span className="font-semibold">
                                        ${subtotal}
                                    </span>
                                </p>

                                <p className="flex justify-between">
                                    <span className="text-gray-300">Envío</span>
                                    {envio === 0 ? (
                                        <span className="font-semibold text-green-300">
                                            ¡Envío Gratis!
                                        </span>
                                    ) : (
                                            <span className="font-semibold text-green-300">
                                                ${envio}
                                            </span>
                                        )}
                                </p>

                                <hr className="border-[#2e2f3b] my-3" />

                                <p className="flex justify-between text-xl font-bold">
                                    <span>Total</span>
                                    <span className="text-[#ec7c6a]">
                                        ${total}
                                    </span>
                                </p>
                            </div>

                            <button
                                onClick={() => alert("Checkout simulado")}
                                className="mt-6 w-full bg-[#ec7c6a] hover:bg-[#d86b5a] 
                            text-white font-semibold py-3 rounded-xl transition-colors"
                            >
                                Confirmar compra
                            </button>
                        </div>
                    </div>

                </>
            ) : (
                <p className="text-gray-400 italic">El carrito está vacío.</p>
            )}

        </div>
    )
}

export default Carrito