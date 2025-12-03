import Meta from 'react-document-meta'

const Contacto = () => {

  const handleForm = (e) => {
    e.preventDefault()
  }

  const meta = {
    title: "Contacto | Mi tienda",
    description: "Espacio para que puedas comunicarte con nosotros para cubrir todas sus dudas/reclamos",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "producto, camisetas, futbol, remeras, equipos, argentina, europa, tienda, ecommerce, contacto, mensaje, dudas, reclamos"
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#1F1D2B] flex flex-col items-center justify-center text-gray-200 p-6 ml-0 sm:ml-28">
      <Meta {...meta} />

      <div className="bg-[#262837] w-full max-w-md p-8 rounded-2xl shadow-lg text-center sm:text-left">
        <h3 className="text-2xl font-semibold text-[#ec7c6a] mb-6 text-center">
          Contacto
        </h3>

        <form className="flex flex-col gap-4" onSubmit={handleForm}>
          <div className="text-center sm:text-left">
            <label htmlFor="nombre" className="block mb-1 text-sm text-gray-300">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              className="w-full p-2 bg-[#1F1D2B] border border-[#3b3b4f] rounded-lg 
          focus:outline-none focus:border-[#ec7c6a] text-gray-100 placeholder-gray-500"
            />
          </div>

          <div className="text-center sm:text-left">
            <label htmlFor="email" className="block mb-1 text-sm text-gray-300">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tuemail@ejemplo.com"
              className="w-full p-2 bg-[#1F1D2B] border border-[#3b3b4f] rounded-lg 
          focus:outline-none focus:border-[#ec7c6a] text-gray-100 placeholder-gray-500"
            />
          </div>

          <div className="text-center sm:text-left">
            <label htmlFor="telefono" className="block mb-1 text-sm text-gray-300">
              Teléfono:
            </label>
            <input
              type="number"
              id="telefono"
              name="telefono"
              placeholder="Tu número"
              className="w-full p-2 bg-[#1F1D2B] border border-[#3b3b4f] rounded-lg 
          focus:outline-none focus:border-[#ec7c6a] text-gray-100 placeholder-gray-500"
            />
          </div>

          <div className="text-center sm:text-left">
            <label htmlFor="asunto" className="block mb-1 text-sm text-gray-300">
              Asunto:
            </label>
            <textarea
              id="asunto"
              name="asunto"
              placeholder="Escribí el asunto"
              className="w-full p-2 bg-[#1F1D2B] border border-[#3b3b4f] rounded-lg 
          focus:outline-none focus:border-[#ec7c6a] text-gray-100 placeholder-gray-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-[#ec7c6a] hover:bg-[#d86b5a] 
        text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>

  )
}

export default Contacto