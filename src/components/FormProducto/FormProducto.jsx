import { useContext, useState } from 'react'
import { ProductosContext } from '../../context/ProductosContext'

const FormProducto = ({ productoInicial = {}, modo = 'agregar', onCerrar }) => {

  const [productoAEditar, setProductoAEditar] = useState(productoInicial)
  const { agregarProducto, editarProducto } = useContext(ProductosContext)
  const [categoriaSeleccionada1, setCategoriaSeleccionada1] = useState(productoInicial.category?.[0] || "Selecciones")
  const [categoriaSeleccionada2, setCategoriaSeleccionada2] = useState(productoInicial.category?.[1] || "Selecciones")

  const categorias = ["Selecciones", "Europa", "Sudamerica", "Liga argentina", "Brasileirao", "Serie A", "La liga", "Ligue one"]

  const handleChange = (e) => {
    const { name, value } = e.target
    setProductoAEditar({ ...productoAEditar, [name]: value})
  }

  const handleSelect = (e, tipo) => {
    if (tipo === "cat1") {
      setCategoriaSeleccionada1(e.target.value)
      setProductoAEditar({...productoAEditar, category: [e.target.value, categoriaSeleccionada2]})
    }

    if (tipo === "cat2") {
      setCategoriaSeleccionada2(e.target.value)
      setProductoAEditar({...productoAEditar, category: [categoriaSeleccionada1, e.target.value]})
    }
}

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (modo === 'agregar') {
      await agregarProducto(productoAEditar)
    }

    if (modo === 'editar') {
      await editarProducto(productoAEditar)
    }

    onCerrar()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50" aria-modal="true" role="dialog">
      <div className="bg-[#262837] w-full max-w-xl rounded-2xl shadow-2xl p-6 text-gray-200">

        {/* ENCABEZADO */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#ec7c6a]">
            {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
          </h3>
        </div>

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Nombre */}
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300">Nombre</label>
              <input
                type="text"
                name="title"
                id="title"
                className="w-full p-3 bg-[#1F1D2B] border border-[#3b3b4f] 
                       rounded-lg text-gray-200 focus:outline-none 
                       focus:ring-2 focus:ring-[#ec7c6a]"
                placeholder="Ingrese el nombre del producto"
                value={productoAEditar.title || ""}
                onChange={handleChange}
                required
              />
            </div>

            {/* Precio */}
            <div>
              <label className="block text-sm text-gray-300">Precio</label>
              <input
                type="number"
                name="price"
                id="price"
                min="0"
                step="any"
                className="w-full p-3 bg-[#1F1D2B] border border-[#3b3b4f] 
                       rounded-lg text-gray-200 focus:outline-none 
                       focus:ring-2 focus:ring-[#ec7c6a]"
                placeholder="$0.00"
                value={productoAEditar.price || ""}
                onChange={handleChange}
                required
              />
            </div>

            {/* URL Imagen */}
            <div>
              <label className="block text-sm text-gray-300">URL de Imagen</label>
              <input
                type="text"
                name="image"
                id="image"
                className="w-full p-3 bg-[#1F1D2B] border border-[#3b3b4f] 
                       rounded-lg text-gray-200 focus:outline-none 
                       focus:ring-2 focus:ring-[#ec7c6a]"
                placeholder="https://ejemplo.com/imagen.jpg"
                value={productoAEditar.image || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300">Categoria 1:</label>
              <select
                    className="w-full max-w-md bg-[#1F1D2B] text-gray-200 border border-[#262837] rounded-xl px-4 py-2 outline-none
                   focus:border-[#ec7c6a] transition-all mx-auto"
                    value={categoriaSeleccionada1}
                    onChange={(e) => handleSelect(e, 'cat1')}
                    required
                >
                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                        </option>
                    ))}
              </select>
            </div>

             <div>
              <label className="block text-sm text-gray-300">Categoria 2:</label>
              <select
                    className="w-full max-w-md bg-[#1F1D2B] text-gray-200 border border-[#262837] rounded-xl px-4 py-2 outline-none
                   focus:border-[#ec7c6a] transition-all mx-auto"
                    value={categoriaSeleccionada2}
                    onChange={(e) => handleSelect(e, 'cat2')}
                    required
                >
                    {categorias.map((categoria) => (
                        <option key={categoria} value={categoria}>
                            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                        </option>
                    ))}
              </select>
            </div>

            {/* Descripción */}
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300">Descripción</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="w-full p-3 bg-[#1F1D2B] border border-[#3b3b4f] 
                       rounded-lg text-gray-200 focus:outline-none 
                       focus:ring-2 focus:ring-[#ec7c6a] resize-none"
                placeholder="Describa el producto"
                value={productoAEditar.description || ""}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>

          {/* ACCIONES */}
          <div className="mt-6 flex gap-3 justify-end">
            <button
              type="button"
              onClick={onCerrar}
              className="px-4 py-2 bg-[#1F1D2B] border border-[#3b3b4f] 
                     text-[#ec7c6a] rounded-lg hover:bg-[#262837] 
                     transition-colors w-full"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-[#ec7c6a] text-white rounded-lg hover:bg-[#d86b5a] transition-colors w-full">
              {modo === "agregar" ? "Agregar" : "Actualizar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormProducto