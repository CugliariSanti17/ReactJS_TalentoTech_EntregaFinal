import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext.jsx"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Checkout = () => {

  const { carrito, vaciarCarrito } = useContext(CarritoContext)

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    metodoPago: "tarjeta",
    comentario: ""
  })

  const subtotal = carrito.reduce((acc, p) => acc + p.price * p.cantidad, 0)
  const envio = 0
  const total = subtotal + envio

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Datos del checkout:", formData)
    console.log("Productos del carrito:", carrito)

    const confirmar = await Swal.fire({
      title: '¿Estás seguro que tus datos estan bien?',
      text: `Nombre: ${formData.nombre} - Apellido: ${formData.apellido} - 
              Email: ${formData.email} - Teléfono: ${formData.telefono} -
              Metodo de pago: ${formData.metodoPago} - Comentarios: ${formData.comentario} ` ,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#55b521ff',
      cancelButtonColor: '#1F1D2B',
      confirmButtonText: 'Confirmar compra',
      cancelButtonText: 'Cancelar',
      background: '#262837',
      color: '#fff'
    });

    if(confirmar.isConfirmed){
      try {
      // - enviar al backend
      vaciarCarrito()
      navigate("/checkout/succes")
      } catch (error) {
          Swal.fire({
            title: "Error al realizar la compra",
            icon: "error",
            draggable: true
          });
          console.error("Error al confirmar la compra", error)
      }
    }    
  }

  return (
    <div className="ml-0 sm:ml-28 min-h-screen bg-[#252836] text-gray-200 px-6 py-10">

      <h2 className="text-2xl font-bold text-[#ec7c6a] mb-8 text-center sm:text-left">
        Finalizar compra
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 justify-center">

        {/* ---------------- FORMULARIO ---------------- */}
        <div className="w-full max-w-lg bg-[#1F1D2B] rounded-2xl p-8 shadow-xl">

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div>
              <label className="text-sm text-gray-300">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded-lg bg-[#262837] border border-[#3b3b4f]
                           focus:border-[#ec7c6a] outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Apellido</label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded-lg bg-[#262837] border border-[#3b3b4f]
                           focus:border-[#ec7c6a] outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded-lg bg-[#262837] border border-[#3b3b4f]
                           focus:border-[#ec7c6a] outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-lg bg-[#262837] border border-[#3b3b4f]
                           focus:border-[#ec7c6a] outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Método de pago</label>
              <select
                name="metodoPago"
                value={formData.metodoPago}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-lg bg-[#262837] border border-[#3b3b4f]
                           focus:border-[#ec7c6a] outline-none"
              >
                <option value="tarjeta">Tarjeta de crédito / débito</option>
                <option value="transferencia">Transferencia bancaria</option>
                <option value="efectivo">Efectivo</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-300">Comentario (opcional)</label>
              <textarea
                name="comentario"
                value={formData.comentario}
                onChange={handleChange}
                rows="3"
                className="w-full mt-1 p-2 rounded-lg bg-[#262837] border border-[#3b3b4f]
                           focus:border-[#ec7c6a] outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#ec7c6a] hover:bg-[#d86b5a]
                        text-white font-semibold py-3 rounded-xl transition-colors">
              Confirmar compra
            </button>
          </form>
        </div>


        {/* ---------------- RESUMEN DE COMPRA ---------------- */}
        <div className="w-full max-w-lg bg-[#1F1D2B] rounded-2xl p-8 shadow-xl">

          <h3 className="text-xl font-semibold text-[#ec7c6a] mb-4 text-center lg:text-left">
            Resumen del pedido
          </h3>

          {carrito.length > 0 ? (
            <>
              <div className="space-y-3 max-h-64 overflow-y-auto pr-2">

                {carrito.map((item) => (
                  <div key={item.id}
                       className="flex items-center justify-between bg-[#262837] p-3 rounded-lg">
                    
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-contain bg-[#1F1D2B] p-2 rounded-lg"
                      />

                      <div>
                        <p className="text-white font-semibold text-sm">{item.title}</p>
                        <p className="text-gray-400 text-sm">
                          Cantidad: {item.cantidad}
                        </p>
                      </div>
                    </div>

                    <p className="text-[#ec7c6a] font-bold">
                      ${item.price * item.cantidad}
                    </p>
                  </div>
                ))}

              </div>

              <hr className="border-[#2e2f3b] my-4" />

              <div className="space-y-2 text-lg">
                <p className="flex justify-between">
                  <span className="text-gray-300">Subtotal</span>
                  <span className="font-semibold">${subtotal}</span>
                </p>

                <p className="flex justify-between">
                  <span className="text-gray-300">Envío</span>
                  {envio === 0 ? (
                    <span className="font-semibold text-green-300">¡Gratis!</span>
                  ) : (
                    <span className="font-semibold">${envio}</span>
                  )}
                </p>

                <p className="flex justify-between text-xl font-bold mt-3">
                  <span>Total</span>
                  <span className="text-[#ec7c6a]">${total}</span>
                </p>
              </div>
            </>
          ) : (
            <p className="text-gray-400 italic text-center">
              No hay productos en el carrito.
            </p>
          )}
        </div>

      </div>
    </div>
  )
}

export default Checkout