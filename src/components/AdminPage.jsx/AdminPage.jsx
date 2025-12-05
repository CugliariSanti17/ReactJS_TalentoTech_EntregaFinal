// AdminDashboard.jsx
import React, { useContext, useState, useEffect } from "react";
import { ProductosContext } from "../../context/ProductosContext.jsx";
import FormProducto from "../FormProducto/FormProducto.jsx";
import Meta from 'react-document-meta'


const AdminPage = () => {

  const {getAllProducts, productos, eliminarProducto, error} = useContext(ProductosContext)

  const [mostrarForm, setMostrarForm] = useState(false)
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)
  const [modoFormulario, setModoFormulario] = useState('agregar')
  const [nombreBusqueda, setNombreBusqueda] = useState('')
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todas')

  const categorias = ["Todas", "Selecciones", "Europa", "Sudamerica", "Liga argentina", "Brasileirao", "Serie A", "La liga", "Ligue one"]
  
  useEffect(() => {
        getAllProducts()
    }, [])

    const abrirFormularioAgregar = () =>{
      setModoFormulario('agregar')
      setProductoSeleccionado(null)
      setMostrarForm(true)
    }

    const abrirFormularioEditar = (producto) =>{
      setModoFormulario('editar')
      setProductoSeleccionado(producto)
      setMostrarForm(true)
    }

    const cerrarForm = () =>{
      setMostrarForm(false)
      setProductoSeleccionado(null)
    }

    const productosFiltradosPorNombre = productos.filter((p) => {
        return p.title.toLowerCase().includes(nombreBusqueda.toLowerCase())
    })

    const productosFiltradosPorCategoria = productosFiltradosPorNombre.filter(p =>
        categoriaSeleccionada.toLowerCase() === 'todas' ? true : p.category.some(cat => cat.toLowerCase() === categoriaSeleccionada.toLowerCase())
    )   

    const productosAMostrar = productosFiltradosPorCategoria

    const meta = {
      title: "Panel de administración| Mi tienda",
      description: "Panel de admistracion para el control de los productos.",
      meta: {
        charset: "utf-8",
        name: {
          keywords: "producto, camisetas, futbol, remeras, equipos, argentina, europa, tienda, ecommerce, agregar, eliminar, editar, gestion, admin"
        }
      }
  }

  if (error) return <p>{error}</p>

  return (
    <div className="min-h-screen bg-[#252836] text-gray-200 p-8 ml-0 sm:ml-28">
      <Meta {...meta}/>
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-[#ec7c6a]">Admin Dashboard</h1>

        <div className="flex gap-3">
          <button
            type="button"
            className="bg-[#ec7c6a] hover:bg-[#d86b5a] text-white px-4 py-2 rounded-xl font-medium transition-colors" onClick={abrirFormularioAgregar}
          >
            + Agregar producto
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#1F1D2B] p-4 rounded-2xl shadow-md">
          <p className="text-sm text-gray-400">Productos totales</p>
          <p className="text-2xl font-semibold text-white">{productos.length}</p>
        </div>

        <div className="bg-[#1F1D2B] p-4 rounded-2xl shadow-md">
          <p className="text-sm text-gray-400">Visibilidad</p>
          <p className="text-2xl font-semibold text-white">Listado simple</p>
        </div>

        <div className="bg-[#1F1D2B] p-4 rounded-2xl shadow-md">
          <p className="text-sm text-gray-400">Categorías</p>
          <p className="text-2xl font-semibold text-white">
            {categorias.length}
          </p>
        </div>
      </section>

      <section>
        <div className="overflow-x-auto">
          <div className="mb-8 flex justify-center">
            <input type="text" placeholder="Buscar productos..." value={nombreBusqueda} onChange={(e) => setNombreBusqueda(e.target.value)} className="w-full max-w-md bg-[#1F1D2B] text-gray-200 placeholder-gray-500 border border-[#262837] focus:border-[#ec7c6a] outline-none rounded-xl px-4 py-2 transition-all duration-200 shadow-md"/>
          </div>
          <div className="mb-8 flex justify-center">
                <select
                    className="w-full max-w-md bg-[#1F1D2B] text-gray-200 border border-[#262837] rounded-xl px-4 py-2 outline-none
                   focus:border-[#ec7c6a] transition-all mx-auto"
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
          <table className="min-w-full bg-transparent">
            <thead>
              <tr className="text-left text-sm text-gray-400">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Producto</th>
                <th className="px-4 py-3">Título</th>
                <th className="px-4 py-3">Precio</th>
                <th className="px-4 py-3 hidden md:table-cell">Categoría</th>
                <th className="px-4 py-3">Acciones</th>
              </tr>
            </thead>

            <tbody>
              {productosAMostrar.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-4 py-6 text-center text-gray-400">
                    No hay productos para mostrar.
                  </td>
                </tr>
              ) : (
                productosAMostrar.map((p, i) => (
                  <tr key={p.id} className="odd:bg-[#1F1D2B] even:bg-[#262837]">
                    <td className="px-4 py-4 align-top text-sm text-gray-300">{i + 1}</td>
                  
                    <td className="px-4 py-4 align-top">
                      <div className="w-16 h-16 bg-[#262837] rounded-lg p-2 flex items-center justify-center">
                        <img src={p.image} alt={p.title} className="max-w-full max-h-full object-contain" />
                      </div>
                    </td>

                    <td className="px-4 py-4 align-top">
                      <div className="max-w-xs">
                        <p className="font-semibold text-white truncate">{p.title}</p>
                        <p className="text-sm text-gray-400 line-clamp-2">{p.description}</p>
                      </div>
                    </td>

                    <td className="px-4 py-4 align-top text-sm text-[#ec7c6a] font-semibold">${p.price}</td>

                    <td className="px-4 py-4 align-top text-sm text-gray-300 hidden md:table-cell">
                      {p.category.join(" - ")|| "-"}
                    </td>

                    <td className="px-4 py-4 align-top">
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-[#ec7c6a] text-white rounded-lg text-sm hover:bg-[#d86b5a] transition-colors" onClick={() => abrirFormularioEditar(p)}>
                          Editar
                        </button>
                        <button className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors" onClick={() => eliminarProducto(p.id)}>
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          { mostrarForm && (
            <>
              <FormProducto 
                productoInicial={productoSeleccionado || {}}
                modo={modoFormulario}
                onCerrar={cerrarForm}
              />
            </>
          )}

        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="text-sm text-gray-400">
            Mostrando <span className="text-white font-medium">
              {productosAMostrar.length}</span> productos.
          </div>
          <div>
            <button className="bg-[#1F1D2B] border border-[#3b3b4f] px-4 py-2 rounded-xl text-[#ec7c6a] hover:bg-[#262837] transition-colors">
              Exportar CSV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminPage