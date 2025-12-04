import { createContext, useState } from "react";
import Swal from 'sweetalert2';
import { toast, Bounce} from "react-toastify";

export const ProductosContext = createContext()

export const ProductosProvider = ({children}) =>{

    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState(null)
    const [error, setError] = useState(null)

    const URL = 'https://690a298b1a446bb9cc219c36.mockapi.io/productos'

    const getAllProducts = async () =>{
        try {
            setError(null)
            
          const response = await fetch(URL)
          
          if(!response.ok) throw new Error (`Error HTTP: ${response.status}`)
          
          const data = await response.json()

          setProductos(data)
        } catch (error) {
            console.error("Error al obtener los productos:", error)
            setError("Error al obtener los productos")
        }
    }

    const getProductById = async (id) =>{
        try {
            setError(null)

            const response = await fetch(`${URL}/${id}`)
        
            if(!response.ok) throw new Error (`Error HTTP: ${response.status}`)

            const data = await response.json()

            setProducto(data)
        } catch (error) {
            console.error("Error al obtener el producto:", error)
            setError("Error al obtener el producto")
        }
    }

    const agregarProducto = async (producto) =>{
        try {
            setError(null)

            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(producto)
            })

            if (!response.ok) throw new Error ('Error al crear el producto')

            const data = await response.json()
            console.log('Producto agregado correctamente' + data)

            setProductos([...productos, data])     
            toast.success(`El producto ha sido creado correctamente`, {
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
        } catch (error) {
            console.error(error.message)
            setError('Error al crear el producto')
        }
    }

    const editarProducto = async (producto) =>{
        try {
            const response = await fetch(`${URL}/${producto.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(producto)
            })

            if(!response.ok) throw new Error (`Error HTTP: ${response.status}`)

            const productoActualizado = await response.json()

            setProductos(productos.map(p => p.id === productoActualizado.id ? productoActualizado : p))

        } catch (error) {
            console.error("Error al editar el producto", error)
            setError("Error al editar el producto")
        }
    }

    const eliminarProducto = async (id) =>{
        const confirmar = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará el producto definitivamente',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ec7c6a',
            cancelButtonColor: '#1F1D2B',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
            background: '#262837',
            color: '#fff'
        });

        if(confirmar.isConfirmed){
            try {
                setError(null)

                const response = await fetch(`${URL}/${id}`, {
                    method: "DELETE",
                })

                if(!response.ok) throw new Error (`Error HTTP: ${response.status}`)

                setProductos(productos.filter(producto => producto.id !== id))

            } catch (error) {
                console.error("Error al eliminar el producto", error)
                setError("Error al eliminar el producto")
            }
        }
    }

    return( 
        <ProductosContext.Provider value={{productos, producto, error, getAllProducts, getProductById, agregarProducto, editarProducto, eliminarProducto}}>
            {children}
        </ProductosContext.Provider>
    )
}