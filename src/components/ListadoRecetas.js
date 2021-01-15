import { useContext } from 'react';

import recetasContext from '../context/recetasContext';

import Receta from './Receta';

const ListadoRecetas = () => {
    const { recetas } = useContext(recetasContext);

    return (
        <div className="row mt-5">
            {
                recetas.map(receta => (
                    <Receta key={receta.idDrink} receta={receta} />
                ))
            }
        </div>
    );
}
 
export default ListadoRecetas;