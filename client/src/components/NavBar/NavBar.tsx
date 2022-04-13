import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const NavBar = () => {
  return (
   <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Store</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar
