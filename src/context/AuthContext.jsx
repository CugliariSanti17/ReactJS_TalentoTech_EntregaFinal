import { createContext, useState } from "react";
import { toast, Bounce } from "react-toastify";


export const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)

    const login = (nombreUsuario) =>{
        const token = `fake-token-${nombreUsuario}`
        localStorage.setItem('authToken', token)
        setUser(nombreUsuario)
    }

    const logout = () =>{
        localStorage.removeItem('authToken')
        setUser(null)
         toast.success(`¡Sesion cerrada con éxito!`, {
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

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}