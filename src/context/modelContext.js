import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const modalContext = createContext();

export const ModalProvider = (props) => {
    const [idreceta, setIdReceta] = useState('');
    const [receta, setReceta] = useState(null);

    useEffect(() => {
        const obtenerReceta = async () => {
            if (!idreceta) {
                setReceta(null)
                return;
            }
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const response = await axios.get(url);
            setReceta(response.data.drinks[0]);
        }
        obtenerReceta();
    }, [idreceta]);

    return (
        <modalContext.Provider value={{
            receta,
            setIdReceta
        }}>
            {
                props.children
            }
        </modalContext.Provider>
    )
}

export default modalContext;
