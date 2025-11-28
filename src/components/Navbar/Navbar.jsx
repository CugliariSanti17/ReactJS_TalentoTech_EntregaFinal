import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IoCartOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { CiLogout } from 'react-icons/ci';
import { RiAdminLine } from "react-icons/ri";
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';


const Navbar = () => {

  const {cantidadTotal} = useContext(CarritoContext)
  const {logout, user} = useContext(AuthContext)

  const esAdmin = user === 'admin'
  
  return (
    <nav className="bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full">
      <ul className="pl-4 h-full flex flex-col">
        <li>
          <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
            Logo
          </h1>
        </li>
        <li className="p-4 rounded-tl-xl rounded-bl-xl transition-colors">
          <NavLink
            to="/" className={({ isActive }) =>
              `p-4 flex justify-center rounded-xl text-xl transition-colors ${
                isActive
                  ? "bg-[#ec7c6a] text-white"
                  : "text-[#ec7c6a] hover:bg-[#262837] hover:text-white"
              }`
            }
          >
            <FaHome />
          </NavLink>
        </li>
        <li className="p-4 rounded-tl-xl rounded-bl-xl transition-colors">
          <NavLink to="/contacto" className={({ isActive }) =>
              `p-4 flex justify-center rounded-xl text-xl transition-colors ${
                isActive
                  ? "bg-[#ec7c6a] text-white"
                  : "text-[#ec7c6a] hover:bg-[#262837] hover:text-white"
              }`
            }
          >
            <AiOutlineMail />
          </NavLink>
        </li>
        <li className="p-4 rounded-tl-xl rounded-bl-xl transition-colors">
          <NavLink to="/nosotros" className={({ isActive }) =>
              `p-4 flex justify-center rounded-xl text-xl transition-colors ${
                isActive
                  ? "bg-[#ec7c6a] text-white"
                  : "text-[#ec7c6a] hover:bg-[#262837] hover:text-white"
              }`
            }
          >
            <FiUsers />
          </NavLink>
        </li>
         <li className="p-4 rounded-tl-xl rounded-bl-xl transition-colors">
          <NavLink to="/carrito" className={({ isActive }) =>
              `p-4 flex justify-center rounded-xl text-xl transition-colors ${
                isActive
                  ? "bg-[#ec7c6a] text-white"
                  : "text-[#ec7c6a] hover:bg-[#262837] hover:text-white"
              }`
            }
          >
            <div className='relative'>
              <IoCartOutline className='text-2xl' />
             <span className='absolute -top-2 -right-2 bg-red-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                {cantidadTotal}
              </span>

            </div>
          </NavLink>
        </li>
        {esAdmin && 
          <li className="p-4 rounded-tl-xl rounded-bl-xl transition-colors" onClick={logout}>
            <NavLink to="/admin" className={({ isActive }) =>
                `p-4 flex justify-center rounded-xl text-xl transition-colors ${
                  isActive
                    ? "bg-[#ec7c6a] text-white"
                    : "text-[#ec7c6a] hover:bg-[#262837] hover:text-white"
                }`
              }
            >
              <RiAdminLine />
            </NavLink>
          </li>
        }
        <li className="p-4 rounded-tl-xl rounded-bl-xl transition-colors mt-auto" onClick={logout}>
          <NavLink to="/nosotros" className={({ isActive }) =>
              `p-4 flex justify-center rounded-xl text-xl transition-colors ${
                isActive
                  ? "bg-[#ec7c6a] text-white"
                  : "text-[#ec7c6a] hover:bg-[#262837] hover:text-white"
              }`
            }
          >
            <CiLogout />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar