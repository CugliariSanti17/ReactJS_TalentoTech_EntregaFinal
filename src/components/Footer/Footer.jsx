

const Footer = () => {
  return (
    <footer className="bg-[#1F1D2B] text-gray-400 text-center py-6 border-t border-[#262837] mt-10 ml-28">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-[#ec7c6a] font-semibold">Logo</span> — Todos los derechos reservados.
      </p>
      <p className="text-xs mt-2">
        Desarrollado por <span className="text-[#ec7c6a] font-medium">Santiago Cugliari</span>
      </p>
    </footer>
  )
}

export default Footer