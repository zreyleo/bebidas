import { useContext, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Loader from 'react-loader-spinner';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import modalContext from '../context/modelContext';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    loader: {
        position: 'absolute',
        width: 165,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    }
}));

const Receta = ({ receta }) => {
    // Configuracion para abrir modal
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    const { receta: bebida, setIdReceta } = useContext(modalContext);

    const mostrarIngredientes = informacion => {
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
            if (informacion[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>
                        {informacion[`strIngredient${i}`] + "\t"}
                        {informacion[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredientes;
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="text-center text-light my-3">{receta.strDrink}</h2>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={`Foto de ${receta.strDrink}`} />
                <div className="card-body">
                    <button className="btn btn-block btn-warning" onClick={() => {
                        setIdReceta(receta.idDrink);
                        handleOpen();
                    }}>
                        Ver Receta
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setIdReceta('');
                            handleClose();
                        }}
                    >
                        {
                            bebida ? (
                                <div style={modalStyle} className={classes.paper}>
                                    <h2 className="text-info">{bebida.strDrink}</h2>
                                    <h3 className="mt-3">Instrucciones</h3>
                                    <p>{bebida.strInstructions}</p>
                                    <img className="img-fluid my-4" src={bebida.strDrinkThumb} alt={bebida.strDrink} />
                                    <h3>Ingredientes y Cantidades</h3>
                                    <ul>
                                        {
                                            mostrarIngredientes(bebida)
                                        }
                                    </ul>
                                </div>
                            ) : (
                                <div style={modalStyle} className={classes.loader}>
                                    <Loader
                                        type="Puff"
                                        color="#b98f0e"
                                        height={100}
                                        width={100}
                                        timeout={3000} //3 secs
                                    />
                                </div>
                            )
                        }
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Receta;