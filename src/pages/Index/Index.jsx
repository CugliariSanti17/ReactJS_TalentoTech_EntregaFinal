import Productos from "../../components/Productos/Productos.jsx"
import  Meta  from "react-document-meta"

const Index = () => {

  const meta = {
     title: "Inicio | Mi tienda",
    description: "Explora nuestra variedad de productos.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "producto, camisetas, futbol, remeras, equipos, argentina, europa, tienda, ecommerce"
      }
    }
  }

  return (
    <div className='ml-28 min-h-screen bg-[#252836] text-gray-200 p-8'>
      <Meta {...meta} />  
      <Productos />
    </div>
  )
}

export default Index