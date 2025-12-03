import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import Meta from 'react-document-meta'

const Signin = () => {

  const { login } = useContext(AuthContext)

  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')

  const navigate = useNavigate()

  const formHandled = (e) => {
    e.preventDefault()
    if (nickname.toLowerCase() === 'admin' && password.toLowerCase() === '1234') {
      login(nickname)
      navigate('/admin')
    } else {
      if (nickname.toLowerCase() === 'talentotech' && password.toLowerCase() === 'talentotech') {
        login(nickname)
        navigate("/")
      } else {
        Swal.fire({
          title: "Error",
          text: "Crendeciales incorrectas.",
          icon: "error",
          confirmButtonColor: '#ec7c6a',
          background: '#262837',
          color: '#fff'
        });
      }
    }
  }

  const meta = {
    title: "Inicio Sesión | Mi tienda",
    description: "Autenticacion del usuario.",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "producto, camisetas, futbol, remeras, equipos, argentina, europa, tienda, ecommerce, validar, usuario, contraseña"
      }
    }
  }

  return (
    <div className="bg-[#262837] min-h-screen text-gray-200 flex items-center justify-center px-4 pb-24 md:ml-28 md:pb-0 md:px-0 md:flex md:items-center md:justify-center">
      <Meta {...meta} />
      
      <div className="bg-[#1F1D2B] p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-[#ec7c6a] mb-6 text-center">
          Iniciar Sesión
        </h2>

        <form onSubmit={formHandled} className="flex flex-col space-y-5">
          <div>
            <label htmlFor="nickname" className="block text-sm mb-1">
              Usuario
            </label>
            <input
              type="text"
              id="nickname"
              className="w-full bg-[#262837] border border-[#3b3b4f] rounded-lg p-3 
                     text-gray-200 placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-[#ec7c6a]"
              placeholder="ejemplo@gmail.com"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-[#262837] border border-[#3b3b4f] rounded-lg p-3 
                     text-gray-200 placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-[#ec7c6a]"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ec7c6a] hover:bg-[#f38c79] transition-colors 
                   text-white font-semibold py-3 rounded-lg shadow-md"
          >
            Ingresar
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          ¿No tenés cuenta?{" "}
          <a
            href="#"
            className="text-[#ec7c6a] hover:underline hover:text-[#f38c79]"
          >
            Registrate
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signin