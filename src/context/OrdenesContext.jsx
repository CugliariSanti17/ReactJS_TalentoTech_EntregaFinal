import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2';

export const OrdenesContext = createContext()

const OrdenesProvider = ({children}) => {

    const [ordenes, setOrdenes] = useState({})

    const api = 'https://690a298b1a446bb9cc219c36.mockapi.io/ordenes' 

    const getAllOrders = async () =>{
        try {
            const res = await fetch(api)

            if (!res.ok) throw new Error (`Error HTTP: ${response.status}`)

            const data = await res.json()

            setOrdenes(data)

        } catch (error) {
            console.error("Error al obtener las ordenes", error)
        }
    }

    const agregarOrden = async (orden) =>{
        try {
            const res = await fetch(api, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(orden)
            })

            if (!res.ok) throw new Error (`Error HTTP: ${response.status}`)

            const data = await res.json()
            console.log('Producto agregado correctamente' + data)


        } catch (error) {
            console.error("Error al crear la orden", error)
        }
    }

    const cancelarOrden = async (id) =>{
        const confirmar = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará la orden definitivamente',
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
                const response = await fetch(`${api}/${id}`, {
                    method: "DELETE",
                })

                if(!response.ok) throw new Error (`Error HTTP: ${response.status}`)

                setOrdenes(ordenes.filter(orden => orden.id !== id))

            } catch (error) {
                console.error("Error al eliminar la orden", error)
            }
        }
    }

    return(
       <OrdenesContext.Provider value={{ordenes, getAllOrders, agregarOrden, cancelarOrden}}>
            {children}
       </OrdenesContext.Provider>
    )
}

export default OrdenesContext