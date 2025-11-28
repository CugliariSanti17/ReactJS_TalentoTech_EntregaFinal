import { useContext } from 'react'
import {AuthContext} from '../../context/AuthContext.jsx'
import { Navigate} from 'react-router-dom'

const RutaProtegida = ({children}) => {

    const {user} = useContext(AuthContext)
    
    if (!user){
        return <Navigate to={"/signin"} replace/>
    }

    return children
}

export default RutaProtegida