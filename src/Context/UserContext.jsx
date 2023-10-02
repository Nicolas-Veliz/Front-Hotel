import axios from 'axios';
import { createContext, useEffect, useState } from 'react'

export const InventoryContext = createContext()

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
        <UserContext.Provider value={{ usuarios, setUsuarios, cerrarSesion }}>
            {children}
        </UserContext.Provider>
    )
}

export default User;