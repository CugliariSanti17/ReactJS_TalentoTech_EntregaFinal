import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader.jsx'
import { Link } from 'react-router-dom'
import { ProductosContext } from '../../context/ProductosContext.jsx'
import Meta from 'react-document-meta'

const DetalleProducto = () => {

  const meta = {
     title: "Detalle producto | Mi tienda",
    description: "Explora el detalle de nuestros productos.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "producto, camisetas, futbol, remeras, equipos, argentina, europa, tienda, ecommerce"
      }
    }
  }

    const {producto, error, getProductById} = useContext(ProductosContext)
    const {id} = useParams()

    useEffect(() => {
      getProductById(id)
    }, [id])

    if (error) return <p>{error}</p> 

    if(!producto) return <Loader />
    
  return (
    <div className='min-h-screen bg-[#1F1D2B] text-gray-200 flex flex-col items-center justify-center p-6'>
      <Meta {...meta}/>
      <div className='bg-[#262837] rounded-2xl shadow-xl p-8 max-w-md w-full text-center'>
        <div className="w-full h-64 bg-[#1F1D2B] rounded-xl overflow-hidden flex items-center justify-center mb-6">
          <img src={producto.image} alt={producto.title} className="w-full h-full object-cover"/>
        </div>
        <h2 className='text-2xl font-semibold mb-4'>{producto.title}</h2>
        <p className='text-gray-400 text-sm mb-6 leading-relaxed'>{producto.description}</p>
        <p className="text-[#ec7c6a] font-bold text-xl mb-8">${producto.price}</p>
        <Link to={"/"} className='inline-block bg-[#ec7c6a] hover:bg-[#d86b5a] text-white font-semibold py-2 px-6 rounded-xl transition-colors duration-200'>← Volver</Link>
      </div>
    </div>
  )
}

export default DetalleProducto