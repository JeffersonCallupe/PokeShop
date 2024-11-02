import './App.css'
import NavBar from './componenetes/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componenetes/ItemListContainer';

function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={'¡Bienvenidos a la tienda Pokemón!'} />

    </div>
  )
}

export default App
