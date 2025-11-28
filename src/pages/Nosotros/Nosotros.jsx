import React from 'react'
import Meta from 'react-document-meta'

const Nosotros = () => {
  const meta = {
     title: "Nosotros | Mi tienda",
    description: "Conocé un poco más acerca de nuestro negocio. ",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "producto, camisetas, futbol, remeras, equipos, argentina, europa, tienda, ecommerce, nosotros, negocio,"
      }
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-200">
      <Meta {...meta} />
      <h1 className="text-3xl font-bold text-[#ec7c6a] mb-6">
        Sobre Nosotros
      </h1>

      <div className="bg-[#1F1D2B] p-6 rounded-2xl shadow-lg border border-[#262837]">
        <p className="text-gray-300 leading-relaxed mb-4">
          Somos una tienda dedicada a traer las mejores camisetas de fútbol, 
          combinando calidad, estilo y pasión por este deporte. Nuestro objetivo 
          es ofrecer productos únicos que representen a los clubes y selecciones 
          más importantes del mundo.
        </p>

        <p className="text-gray-300 leading-relaxed mb-4">
          Trabajamos día a día para brindar una experiencia de compra fácil, 
          segura y rápida, con un catálogo en constante crecimiento y envíos a 
          todo el país.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Si te gusta el fútbol tanto como a nosotros, este es tu lugar.  
          Gracias por ser parte de nuestra comunidad.
        </p>

      </div>
    </div>
  )
}

export default Nosotros