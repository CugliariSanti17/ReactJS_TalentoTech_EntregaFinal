
import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import {Route, Routes} from 'react-router-dom'
import Index from './pages/Index/Index.jsx'
import Contacto from './pages/Contacto/Contacto.jsx'
import DetalleProducto from './pages/DetalleProducto/DetalleProducto.jsx'
import Nosotros from './pages/Nosotros/Nosotros.jsx'
import Signin from './components/Signin/Signin.jsx'
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Carrito from './components/Carrito/Carrito.jsx'
import AdminPage from './components/AdminPage.jsx/AdminPage.jsx'
import RutaProtegida from './components/RutaProtegida/RutaProtegida.jsx'
import RutaProtegidaAdmin from './components/RutaProtegidaAdmin/RutaProtegidaAdmin.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
import CompraFinalizada from './components/CompraFinalizada/CompraFinalizada.jsx'

function App() {

  return (
    <div className='bg-[#262837] w-full min-h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/contacto' element={<RutaProtegida> <Contacto /> </RutaProtegida>}/>
        <Route path='/producto/:id' element={<RutaProtegida> <DetalleProducto /> </RutaProtegida>}/>
        <Route path='/carrito' element={<RutaProtegida> <Carrito /> </RutaProtegida>}/>
        <Route path='/nosotros' element={<RutaProtegida>  <Nosotros /> </RutaProtegida> }/>
        <Route path='/checkout' element={<RutaProtegida> <Checkout /> </RutaProtegida>}/>
        <Route path='/checkout/succes' element={<RutaProtegida> <CompraFinalizada /></RutaProtegida>}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/admin' element={<RutaProtegidaAdmin> <AdminPage /> </RutaProtegidaAdmin>} />
      </Routes>
      <Footer />
  
      <ToastContainer 
      position="top-right"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}/>
    </div>
  )
}

export default App
