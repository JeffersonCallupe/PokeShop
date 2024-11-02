
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"> PokeShop  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Objetos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Poké Balls</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pokemones</NavDropdown.Item>
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




