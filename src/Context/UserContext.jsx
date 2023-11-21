import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext(); 

const UserContextProvider = ({ children }) => { 
    const [usuarios, setUsuarios] = useState([]);

    const getUsuarios = async () => {
        try {
            const response = await axios.get("http://localhost:3000/usuarios");
            console.log(response, "response context");
            setUsuarios(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const cerrarSesion = () => {
        localStorage.removeItem("usuario");
        window.location.href = "/Login";
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    return (
        <UserContext.Provider value={{ usuarios, setUsuarios, cerrarSesion }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider; // Cambiado a UserContextProvider
