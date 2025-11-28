

const Loader = () => {
  return (
    <div className="ml-28 min-h-screen flex flex-col items-center justify-center bg-[#1F1D2B] text-gray-200">
      <div className="w-12 h-12 border-4 border-[#ec7c6a] border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-[#ec7c6a] text-lg font-medium animate-pulse">
        Cargando productos...
      </p>
    </div>
  )
}

export default Loader