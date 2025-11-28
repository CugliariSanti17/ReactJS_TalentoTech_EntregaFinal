import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

const RutaProtegidaAdmin = ({children}) => {

    const {user} = useContext(AuthContext)

    if (user !== 'admin'){
        return <Navigate to={"/signin"} replace/>
    }

    return children
}

export default RutaProtegidaAdmin