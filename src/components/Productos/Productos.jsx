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
        <div className="pb-24 md:pb-0">
            {/* pb-24 = espacio inferior para que no quede debajo del navbar mobile */}

            <h1 className="text-2xl md:text-3xl font-bold text-[#ec7c6a] mb-6 md:mb-8 mt-2">
                Productos
            </h1>

            {/* INPUT BUSQUEDA */}
            <div className="mb-6 md:mb-8 px-2">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={nombreBusqueda}
                    onChange={(e) => setNombreBusqueda(e.target.value)}
                    className="w-full bg-[#1F1D2B] text-gray-200 placeholder-gray-500 
                  border border-[#262837] focus:border-[#ec7c6a] 
                  outline-none rounded-xl px-3 py-2 
                  shadow-sm md:shadow-md"
                />
            </div>

            {/* SELECT CATEGORIAS */}
            <div className="mb-6 md:mb-8 px-2">
                <select
                    className="w-full bg-[#1F1D2B] text-gray-200 border border-[#262837] 
                   rounded-xl px-3 py-2 outline-none focus:border-[#ec7c6a]"
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

            {/* GRID MEJORADO MOBILE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-2">
                {productosAMostrar.map((producto) => (
                    <div
                        key={producto.id}
                        className="bg-[#1F1D2B] rounded-xl p-3 md:p-4 shadow-md 
                     hover:shadow-[#ec7c6a]/40 transition-all duration-300"
                    >
                        <div className="text-center">

                            {/* Imagen más chica en mobile */}
                            <div className="w-full h-40 md:h-48 bg-[#262837] rounded-xl overflow-hidden 
                            flex items-center justify-center mb-3 md:mb-4">
                                <img
                                    src={producto.image}
                                    alt={producto.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Título */}
                            <h2 className="font-semibold text-base md:text-lg mb-1 md:mb-2">
                                {producto.title}
                            </h2>

                            {/* Descripción compacta en mobile */}
                            <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2 line-clamp-2">
                                {producto.description}
                            </p>

                            {/* Precio más destacado */}
                            <p className="text-[#ec7c6a] font-bold text-lg md:text-xl mb-3 md:mb-4">
                                ${producto.price}
                            </p>

                            {/* Botones adaptados */}
                            <Link
                                to={`producto/${producto.id}`}
                                className="block w-full bg-[#ec7c6a] hover:bg-[#d86b5a] 
                         text-white font-semibold py-2 rounded-lg 
                         text-sm md:text-base mb-2 transition-colors"
                            >
                                Ver más detalles
                            </Link>

                            <button
                                className="w-full bg-[#ec7c6a] hover:bg-[#d86b5a] 
                         text-white font-semibold py-2 rounded-lg 
                         text-sm md:text-base transition-colors"
                                onClick={() => agregarCarrito(producto)}
                            >
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productos