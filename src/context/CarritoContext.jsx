import { toast, Bounce} from "react-toastify";
import { createContext, useState} from "react";

export const CarritoContext = createContext()

export const CarritoProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([])
    
    const agregarCarrito = (producto) =>{
        const productoExistente = carrito.findIndex(item => item.id === producto.id)

        if(productoExistente != -1) {
            const nuevoCarrito = [...carrito]
            const cantidadActual = nuevoCarrito[productoExistente].cantidad || 1

            nuevoCarrito[productoExistente] = {
                ...nuevoCarrito[productoExistente],
                cantidad: cantidadActual + 1
            }

            setCarrito(nuevoCarrito)
        }else{
            setCarrito([...carrito, {...producto, cantidad: 1}])
        }

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

    const actualizarCantidad = (indice, nuevaCantidad) =>{
        const nuevoCarrito = [...carrito]

        nuevoCarrito[indice] = {...nuevoCarrito[indice], cantidad: nuevaCantidad}
        setCarrito(nuevoCarrito) 
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
        <CarritoContext.Provider value={{carrito, cantidadTotal, agregarCarrito, actualizarCantidad, vaciarCarrito, eliminarCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}