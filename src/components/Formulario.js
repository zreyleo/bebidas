import { useContext } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
    const { categorias } = useContext(CategoriasContext)

    return (
        <form className="col-12">
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
                    />
                </div>
                <div className="col-md-4">
                    <select name="categoria" className="form-control">
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