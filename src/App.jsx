import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
    return (
        <>
        <NavBar />
        <ItemListContainer greeting="¡Bienvenido a Figurama! Encontrá tus figuras favoritas" />
        </>
    );
};

export default App;