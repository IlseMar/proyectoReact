import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

//rafce
const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting="Personaliza tus fundas para celular y espejos" />
    </>
  );
};

export default App;
