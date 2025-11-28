import { createContext, useState } from "react";


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
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}