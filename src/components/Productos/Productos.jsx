import { useContext, useEffect, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext.jsx'
import Loader from '../Loader/Loader.jsx'
import { Link } from 'react-router-dom'
import { ProductosContext } from '../../context/ProductosContext.jsx'

const Productos = () => {

    const { productos, getAllProducts, error } = useContext(ProductosContext)
    const { agregarCarrito } = useContext(CarritoContext)

    const [nombreBusqueda, setNombreBusqueda] = useState("")
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos')

    const categorias = ["Todas", "Selecciones", "Europa", "Sudamerica", "Futbol argentino", "Brasileirao", "Serie A", "La liga", "Ligue one"]

    const productosFiltrados = productos.filter((p) => {
        return p.title.toLowerCase().includes(nombreBusqueda.toLowerCase())
    })

    const productosAMostrar = nombreBusqueda.trim() === '' ? productos : productosFiltrados


    useEffect(() => {
        getAllProducts()
    }, [])

    if (error) return <p>{error}</p>

    if (productos.length === 0) return <Loader />

    return (
        <div className="px-4">
            {/* Centramos solo en mobile */}
            <h1 className='text-3xl font-bold text-[#ec7c6a] mb-8 text-center sm:text-left'>
                Productos
            </h1>

            {/* Input centrado en mobile */}
            <div className="mb-8 flex justify-center sm:justify-start">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={nombreBusqueda}
                    onChange={(e) => setNombreBusqueda(e.target.value)}
                    className="w-full max-w-md bg-[#1F1D2B] text-gray-200 placeholder-gray-500 border border-[#262837] 
                           focus:border-[#ec7c6a] outline-none rounded-xl px-4 py-2 transition-all duration-200 shadow-md mx-auto"
                />
            </div>

            {/* Dropdown centrado en mobile */}
            <div className="mb-8 flex justify-center sm:justify-start">
                <select
                    className="w-full max-w-md bg-[#1F1D2B] text-gray-200 border border-[#262837] rounded-xl px-4 py-2 
                           outline-none focus:border-[#ec7c6a] transition-all mx-auto"
                    value={categoriaSeleccionada}
                    onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                >
                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            {/* Productos — centrado en mobile, grilla igual en desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center sm:place-items-stretch">
                {productosAMostrar.map((producto) => {
                    return (
                        <div
                            key={producto.id}
                            className='bg-[#1F1D2B] rounded-2xl p-4 shadow-lg hover:shadow-[#ec7c6a]/40 
                                   transition-all duration-300 w-full max-w-sm sm:max-w-full'
                        >
                            <div className='text-center'>
                                <div className="w-full h-48 bg-[#262837] rounded-xl overflow-hidden flex items-center justify-center mb-4">
                                    <img src={producto.image} alt={producto.title} className='w-full h-full object-cover' />
                                </div>
                                <h2 className='font-semibold text-lg mb-2'>{producto.title}</h2>
                                <p className='text-gray-400 text-sm mb-2 line-clamp-2'>{producto.description}</p>
                                <p className='text-[#ec7c6a] font-bold mb-4'>${producto.price}</p>

                                <Link
                                    to={`/producto/${producto.id}`}
                                    className='inline-block bg-[#ec7c6a] hover:bg-[#d86b5a] text-white 
                                           font-semibold py-2 px-4 rounded-xl transition-colors duration-200'
                                >
                                    Ver más detalles
                                </Link>

                                <button
                                    className="mt-4 w-full bg-[#ec7c6a] hover:bg-[#d86b5a] text-white font-semibold py-2 rounded-xl transition-colors"
                                    onClick={() => agregarCarrito(producto)}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Productos