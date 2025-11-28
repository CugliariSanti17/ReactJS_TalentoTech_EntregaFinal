import { useContext, useEffect, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext.jsx'
import Loader from '../Loader/Loader.jsx'
import { Link } from 'react-router-dom'
import { ProductosContext } from '../../context/ProductosContext.jsx'

const Productos = () => {

    const { productos, getAllProducts, error } = useContext(ProductosContext)
    const { agregarCarrito } = useContext(CarritoContext)

    const [nombreBusqueda, setNombreBusqueda] = useState("")

    const productosFiltrados = productos.filter((p) =>{
        return p.title.toLowerCase().includes(nombreBusqueda.toLowerCase())
    })

    const productosAMostrar = nombreBusqueda.trim() === '' ? productos : productosFiltrados

    useEffect(() => {
        getAllProducts()
    }, [])

    if (error) return <p>{error}</p>

    if (productos.length === 0) return <Loader />

    return (
        <div>
            <h1 className='text-3xl font-bold text-[#ec7c6a] mb-8'>Productos</h1>
            
            <div className="mb-8 flex justify-center">
                <input type="text" placeholder="Buscar productos..." value={nombreBusqueda} onChange={(e) => setNombreBusqueda(e.target.value)} className="w-full max-w-md bg-[#1F1D2B] text-gray-200 placeholder-gray-500 border border-[#262837] focus:border-[#ec7c6a] outline-none rounded-xl px-4 py-2 transition-all duration-200 shadow-md"/>
            </div>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {productosAMostrar.map((producto) => {
                    return (
                        <div className='bg-[#1F1D2B] rounded-2xl p-4 shadow-lg hover:shadow-[#ec7c6a]/40 transition-all duration-300'>
                            <div className='text-center'>
                                <div className="w-full h-48 bg-[#262837] rounded-xl overflow-hidden flex items-center justify-center mb-4">
                                    <img src={producto.image} alt={producto.title} className='w-full h-full object-cover'/>
                                </div>
                                <h2 className='font-semibold text-lg mb-2'>{producto.title}</h2>
                                <p className='text-gray-400 text-sm mb-2 line-clamp-2'>{producto.description}</p>
                                <p className='text-[#ec7c6a] font-bold mb-4'>${producto.price}</p>
                                <Link to={`producto/${producto.id}`} className='inline-block bg-[#ec7c6a] hover:bg-[#d86b5a] text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200'>Ver más detalles</Link>
                                <button className="mt-4 w-full bg-[#ec7c6a] hover:bg-[#d86b5a] text-white font-semibold py-2 rounded-xl transition-colors" onClick={() => agregarCarrito(producto)}>Agregar al carrito</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Productos