import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componenetes/ItemListContainer';
import  Navbar  from './componenetes/NavBar';


function App() {

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={'¡Bienvenidos a la tienda Pokemón!'}   stock={4}  />
      
    </div>
  )
}

export default App
