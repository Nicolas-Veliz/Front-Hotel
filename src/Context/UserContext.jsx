/* eslint-disable react/prop-types */
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UsuariosContext = createContext()

const UserContext = ({ children }) => {
    const [usuarios, setUsuarios] = useState([])

    const getUsuarios = async () => {
        try {
            const response = await axios.get("http://localhost:3000/usuarios")
            console.log(response, "response context")
            setUsuarios(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const cerrarSesion = () => {
        localStorage.removeItem("usuario")
        window.location.href = "/InicioDeSesion"
    }

    useEffect(() => {
        getUsuarios()
    }, [])

    return (
        <UsuariosContext.Provider value={{ usuarios, setUsuarios, cerrarSesion }}>
            {children}
        </UsuariosContext.Provider>
    )
}

export default UserContext