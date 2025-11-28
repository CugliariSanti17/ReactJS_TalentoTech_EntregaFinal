import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext.jsx"

const Carrito = () => {
    const { carrito, eliminarCarrito, vaciarCarrito } = useContext(CarritoContext)

    return (
    <div className='ml-28 min-h-screen bg-[#252836] text-gray-200 p-8'>
        <h3 className="text-2xl font-semibold text-[#ec7c6a] mb-4">Carrito</h3>

        {carrito.length > 0 ? (
            <>
                <button 
                    onClick={() => vaciarCarrito()} 
                    className="mb-4 bg-[#ec7c6a] hover:bg-[#d86b5a] text-white font-medium px-4 py-2 rounded-xl"
                >
                    Vaciar carrito
                </button>

                <div className="space-y-4">
                    {carrito.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1F1D2B] flex justify-between items-center p-4 rounded-xl shadow-md"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-14 h-14 object-contain bg-[#262837] p-2 rounded-lg"
                                />
                                <div>
                                    <p className="font-semibold text-white">{item.title}</p>
                                    <p className="text-sm text-gray-400">${item.price}</p>
                                </div>
                            </div>

                            <button
                                onClick={() => eliminarCarrito(item.id)}
                                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm transition-colors"
                            >
                                X
                            </button>
                        </div>
                    ))}

                    <div className="bg-[#1F1D2B] p-4 rounded-xl shadow-md mt-6">
                        <h3 className="text-xl font-semibold mb-2 text-[#ec7c6a]">
                            Resumen de compra
                        </h3>

                        <p className="text-lg font-medium">
                            Total: 
                            <span className="text-[#ec7c6a] ml-2">
                                $ {carrito.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                            </span>
                        </p>

                        <button
                            onClick={() => alert('Checkout simulado')}
                            className="mt-4 w-full bg-[#ec7c6a] hover:bg-[#d86b5a] text-white font-medium px-4 py-2 rounded-xl transition-colors"
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