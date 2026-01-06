import { useState } from "react"

const Checkout = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    metodoPago: "tarjeta",
    comentario: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Datos del checkout:", formData)

    // acá después:
    // - validar
    // - enviar al backend
    // - vaciar carrito
    // - redirigir a confirmación
  }

  return (
    <div className="ml-28 min-h-screen bg-[#1F1D2B] flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-[#262837] rounded-2xl p-8 shadow-xl text-gray-200">
        
        <h2 className="text-2xl font-bold text-center text-[#ec7c6a] mb-6">
          Finalizar compra
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Nombre */}
          <div>
            <label className="text-sm text-gray-300">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 rounded-lg bg-[#1F1D2B] border border-[#3b3b4f]
                         focus:border-[#ec7c6a] outline-none"
            />
          </div>

          {/* Apellido */}
          <div>
            <label className="text-sm text-gray-300">Apellido</label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 rounded-lg bg-[#1F1D2B] border border-[#3b3b4f]
                         focus:border-[#ec7c6a] outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 rounded-lg bg-[#1F1D2B] border border-[#3b3b4f]
                         focus:border-[#ec7c6a] outline-none"
            />
          </div>

          {/* Teléfono */}
          <div>
            <label className="text-sm text-gray-300">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-lg bg-[#1F1D2B] border border-[#3b3b4f]
                         focus:border-[#ec7c6a] outline-none"
            />
          </div>

          {/* Método de pago */}
          <div>
            <label className="text-sm text-gray-300">Método de pago</label>
            <select
              name="metodoPago"
              value={formData.metodoPago}
              onChange={handleChange}
              className="w-full mt-1 p-2 rounded-lg bg-[#1F1D2B] border border-[#3b3b4f]
                         focus:border-[#ec7c6a] outline-none"
            >
              <option value="tarjeta">Tarjeta de crédito / débito</option>
              <option value="transferencia">Transferencia bancaria</option>
              <option value="efectivo">Efectivo</option>
            </select>
          </div>

          {/* Comentario */}
          <div>
            <label className="text-sm text-gray-300">Comentario (opcional)</label>
            <textarea
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 p-2 rounded-lg bg-[#1F1D2B] border border-[#3b3b4f]
                         focus:border-[#ec7c6a] outline-none resize-none"
            />
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="mt-4 bg-[#ec7c6a] hover:bg-[#d86b5a]
                       text-white font-semibold py-2 rounded-xl transition-colors"
          >
            Confirmar compra
          </button>
        </form>
      </div>
    </div>
  )
}

export default Checkout