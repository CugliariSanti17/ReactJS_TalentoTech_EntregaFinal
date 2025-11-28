import React, { useContext, useState } from 'react'
import { ProductosContext } from '../../context/ProductosContext'

const EditarProducto = ({productoSeleccionado, onActualizar}) => {

    //const {getAllProducts, productos} = useContext(ProductosContext)

    const [producto, setProducto] = useState(productoSeleccionado || {
        title: '',
        price: '',
        image: '',
        description: ''
    })
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        
        try {
            const response = await fetch('')
        } catch (error) {
            
        }
    }
  return (
    <>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <label className="block text-sm text-gray-300">Nombre</label>
            <input
              value={producto.title}
              onChange={handleChange()}
              className="w-full p-3 bg-[#1F1D2B] border border-[#3b3b4f] rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ec7c6a]"
              placeholder="Nombre del producto"
              required
            />

            <label className="block text-sm text-gray-300">Precio</label>
            <input
              value={producto.price}
              onChange={handleChange()}
              className="w-full p-3 bg-[#1F1D2B] border border-[#3b3b4f] rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ec7c6a]"
              placeholder="Ej: 29.99"
              required
            />

            <label className="block text-sm text-gray-300">Descripción</label>
            <textarea
              value={producto.description}
              onChange={handleChange()}
              className="w-full p-3 bg-[#1F1D2B] border border-[#3b3b4f] rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ec7c6a] h-28 resize-none"
              placeholder="Descripción breve"
            />
          </div>

          <div className="space-y-3 flex flex-col">
            <label className="block text-sm text-gray-300">URL de imagen</label>
            <input
              value={producto.image}
              onChange={handleChange}
              className="w-full p-3 bg-[#1F1D2B] border border-[#3b3b4f] rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ec7c6a]"
              placeholder="https://"
            />

            <div className="mt-auto flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full bg-[#1F1D2B] border border-[#3b3b4f] text-[#ec7c6a] py-2 rounded-lg hover:bg-[#262837] transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="w-full bg-[#ec7c6a] text-white py-2 rounded-lg hover:bg-[#d86b5a] transition-colors"
              >
                Editar producto
              </button>
            </div>
          </div>
        </form>
    </>
  )
}

export default EditarProducto