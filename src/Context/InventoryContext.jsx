/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const ContextoInventario = createContext()

const ContextoDeInventario = ({ children }) => {
    const [inventario, setInventario] = useState([])

    const getInventario = async () => {
        try {
            const response = await axios.get("http://localhost:3000/inventario")
            setInventario(response.data)
            console.log(response, "response context")
        } catch (error) {
            console.log(error, "Error de Inventario")
        }
    }

    useEffect(() => {
        getInventario()
    }, [])


    return (
        <ContextoInventario.Provider value={{ inventario, setInventario }}>
            {children}
        </ContextoInventario.Provider>
    )
}

export default ContextoDeInventario