import { CategoriasProvider } from "./context/categoriasContext";
import { ModalProvider } from "./context/modelContext";
import { RecetasProvider } from "./context/recetasContext";

import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoRecetas from "./components/ListadoRecetas";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            
            <ListadoRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;