import React from 'react'
import { Link } from 'react-router-dom'


const CompraFinalizada = () => {
  return (
    <div className="ml-28 min-h-screen bg-[#1F1D2B] flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-[#262837] rounded-2xl p-8 shadow-xl text-gray-200 text-center">

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center">
            <span className="text-3xl">✔</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#ec7c6a] mb-2">
          ¡Compra realizada con éxito!
        </h2>

        <p className="text-gray-300 mt-2">
          Gracias por confiar en nosotros. Tu pedido ha sido procesado y nuestro equipo se
          comunicará contigo a la brevedad para coordinar la entrega.
        </p>

        <p className="text-gray-400 mt-3 text-sm">
          También te enviamos un correo con el resumen de tu compra y todos los detalles necesarios.
          Si no lo encontrás, revisá la bandeja de spam.
        </p>

        <div className="mt-6">
          <Link
            to={"/"}
            className="bg-[#ec7c6a] hover:bg-[#d86b5a] text-white font-semibold py-2 px-6 rounded-xl transition-colors inline-block"
          >
            Volver al inicio
          </Link>
        </div>

      </div>
    </div>
  )
}

export default CompraFinalizada