import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useActions } from '../../store/hooks/authAction'
import { useTypedSelector } from '../../store/hooks/TypedSelector';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/consts';

const NavBar = () => {
  const { userAuth, adminAuth} = useActions()
  const { isAuth } = useTypedSelector(state => state.auth)
  const history = useNavigate() 
  
  return (
   <Navbar bg="dark" variant="dark">
    <Container>
    <NavLink style={{color: 'white'}} to={SHOP_ROUTE} >Store</NavLink>
    {isAuth ?
      <Nav className="ml-auto">
        <Button onClick={() => history(ADMIN_ROUTE)}>Админ панель</Button>
        <Button onClick={() => history(LOGIN_ROUTE)}>Войти</Button>
      </Nav>
      :
      <Nav className="ml-auto">
        <Button onClick={adminAuth}>Авторизация</Button>
      </Nav>
    }
    </Container>
  </Navbar>
  )
}

export default NavBar
