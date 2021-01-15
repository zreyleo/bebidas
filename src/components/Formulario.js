import { useContext, useState } from "react";

import categoriasContext from "../context/categoriasContext";
import recetasContext from '../context/recetasContext';

const Formulario = () => {
    const [bebida, setBebida] = useState({
        ingrediente: '',
        categoria: ''
    });

    const { categorias } = useContext(categoriasContext);
    const { setBusqueda, setConsultar } = useContext(recetasContext);

    const obtenerDatosRecetas = event => {
        setBebida({
            ...bebida,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = event => {
        event.preventDefault();

        setBusqueda(bebida);
        setConsultar(true);
    }

    return (
        <form className="col-12" onSubmit={onSubmit}>
            <fieldset className="text-center">
                <legend>Busca Bebidas por Categor&iacute;a o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        className="form-control"
                        name="ingrediente"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosRecetas}
                    />
                </div>
                <div className="col-md-4">
                    <select name="categoria" className="form-control" onChange={obtenerDatosRecetas}>
                        <option value="" >-- Selecciona Categor&iacute;a --</option>
                        {
                            categorias.map((cateogria, index) => (
                                <option key={index} value={cateogria}>{cateogria}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="submit" value="Buscar Bebidas" className="btn btn-block btn-primary" />
                </div>
            </div>
        </form>
    );
}
 
export default Formulario;