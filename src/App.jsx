import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componenetes/ItemListContainer';
import  Navbar  from './componenetes/NavBar';
import ItemDetailContainer from './componenetes/ItemDetailContainer';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<ItemListContainer greeting={'¡Bienvenidos a la tienda Pokemón!'}/> } /> 
        <Route path='/category/:category' element = {<ItemListContainer/>} />
        <Route path='/item/:id' element = {<ItemDetailContainer />}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
