import { toast, Bounce} from "react-toastify";
import { createContext, useState} from "react";

export const CarritoContext = createContext()

export const CarritoProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])
    
    const agregarCarrito = (producto) =>{
        setCarrito([...carrito, producto])
        toast.success(`${producto.title} ha sido agregado al carrito`, {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    } 

    const eliminarCarrito = (idProducto) =>{
        const nuevoCarrito = carrito.filter((producto) => producto.id !== idProducto)

        setCarrito(nuevoCarrito)
    }

    const vaciarCarrito = () =>{
        setCarrito([])
    }

    const cantidadTotal = carrito.length

    return(
        <CarritoContext.Provider value={{carrito, cantidadTotal, agregarCarrito, vaciarCarrito, eliminarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}