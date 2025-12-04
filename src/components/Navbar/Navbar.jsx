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

  const links = [
    { to: "/", icon: <FaHome /> },
    { to: "/contacto", icon: <AiOutlineMail /> },
    { to: "/nosotros", icon: <FiUsers /> },
    {
      to: "/carrito",
      icon: (
        <div className="relative">
          <IoCartOutline className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cantidadTotal}
          </span>
        </div>
      ),
    },
    ...(esAdmin
      ? [{ to: "/admin", icon: <RiAdminLine /> }]
      : []),
  ];
  
  return (
    <>
      {/* NAVBAR VISTA ESCRITORIO */}
      <nav className="bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full hidden md:block">
        <ul className="pl-4 h-full flex flex-col">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>

          {links.map((link) => (
            <li key={link.to} className="p-4 transition-colors">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `p-4 flex justify-center rounded-xl text-xl transition-colors ${
                    isActive
                      ? "bg-[#ec7c6a] text-white"
                      : "text-[#ec7c6a] hover:bg-[#262837] hover:text-white"
                  }`
                }
              >
                {link.icon}
              </NavLink>
            </li>
          ))}

          <li
            className="p-4 transition-colors mt-auto cursor-pointer"
            onClick={logout}
          >
            <div className="p-4 flex justify-center rounded-xl text-xl text-[#ec7c6a] hover:bg-[#262837] hover:text-white">
              <CiLogout />
            </div>
          </li>
        </ul>
      </nav>

          {/* NAVBAR VISTA MOBILE*/}
      <nav className="md:hidden bg-[#1F1D2B] fixed bottom-0 left-0 w-full h-16 flex justify-around items-center shadow-xl border-t border-[#262837]">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xl p-2 ${
                isActive
                  ? "text-[#ec7c6a]"
                  : "text-gray-300 hover:text-[#ec7c6a]"
              }`
            }
          >
            {link.icon}
          </NavLink>
        ))}

        <button
          onClick={logout}
          className="flex flex-col items-center text-xl text-gray-300 hover:text-[#ec7c6a]"
        >
          <CiLogout />
        </button>
      </nav>
    </>
  )
}

export default Navbar