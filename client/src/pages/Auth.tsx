import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    if(isLogin){
      const response = await login(email, password)
    } else {
      const response = await registration(email, password)
      console.log(response)
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
