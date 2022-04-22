import { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { useActions } from '../store/hooks/authAction'
import { useTypedSelector } from '../store/hooks/TypedSelector'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'

const Auth = () => {
  const { user, isAuth } = useTypedSelector(state => state.auth)
  const { setIsAuth, setUser } = useActions()
  
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useNavigate();
  
  const click = async () => {
    try {
        let data;
        if(isLogin){
          data = await login(email, password)
        } else {
          data = await registration(email, password)
        }
        setUser({email: email ,password: password})
        setIsAuth(true)
        history(SHOP_ROUTE);
    } catch (e: any) {
      alert(e.response.data.message)
    }
  
  }

  return (
    <div>
      <Card style={{width: 600}}>
        <h2>{isLogin ? 'Авторизация' : 'Регистрация'} </h2>
         <Form>
           <Form.Control 
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
           <Form.Control 
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
           />
           {isLogin ? 
           <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink></div>
           :
           <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink></div>
          }
           <Button 
             variant="outline-success"
             onClick={click}
           >
           {isLogin ? 'Войти' : 'Регистрация'}
           </Button>
         </Form>
      </Card>
    </div>
  )
}

export default Auth
