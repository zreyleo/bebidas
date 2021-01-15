import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";

const categoriasContext = createContext();

export const CategoriasProvider = (props) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const response = await axios.get(url);
            setCategorias(response.data.drinks.map(drink => drink.strCategory))
        }
        obtenerCategorias();
    }, []);

    return (
        <categoriasContext.Provider
            value={{
                categorias
            }}
        >
            { props.children }
        </categoriasContext.Provider>
    )
}

export default categoriasContext;