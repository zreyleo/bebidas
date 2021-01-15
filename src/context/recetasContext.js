import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const recetasContext = createContext();

export const RecetasProvider = props => {
    const [recetas, setRecetas] = useState([]);
    const [busqueda, setBusqueda] = useState({
        ingrediente: '',
        categoria: ''
    });
    const [consultar, setConsultar] = useState(false);

    useEffect(() => {
        if (consultar) {
            const obtenerRecetas = async () => {
                const { ingrediente, categoria } = busqueda;
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
                const response = await axios.get(url);
                // console.log(response.data.drinks);
                setRecetas(response.data.drinks);
            }
            obtenerRecetas();
        }
    }, [busqueda]);

    return (
        <recetasContext.Provider value={{
            busqueda,
            recetas,
            setBusqueda,
            setConsultar
        }}>
            {
                props.children
            }
        </recetasContext.Provider>
    );
}

export default recetasContext;