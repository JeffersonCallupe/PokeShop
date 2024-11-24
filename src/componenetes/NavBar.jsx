
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <figure className='logoContainer' > 
          <img src="../logoPokebola.png" alt="LogoPOkebola" />
        </figure>
        <Navbar.Brand to='/' as={NavLink}  > PokeShop  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to='/' as={NavLink} >Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item to='/category/Objeto' as={NavLink}  >Objetos</NavDropdown.Item>
              <NavDropdown.Item to='/category/Pokebola' as={NavLink}  >Poké Balls</NavDropdown.Item>
              <NavDropdown.Item to='/category/Pokemon' as={NavLink}  >Pokemones</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>

          <CardWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;














/*

const NavBar = () =>{
    return (
        <nav className="navBar">
            <a className="alink" href="#">Inicio</a>
            <a className="alink" href="#">Productos</a>
            <a className="alink" href="#">Nosotros</a>
            <a className="alink" href="#">Contactar</a>    


        </nav>
    )
}


export default NavBar; 

*/




