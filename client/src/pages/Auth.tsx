import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <div>
      <Card style={{width: 600}}>
        <h2>{isLogin ? 'Авторизация' : 'Регистрация'} </h2>
         <Form>
           <Form.Control placeholder='Email'/>
           <Form.Control placeholder='Password'/>
           {isLogin ? 
           <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink></div>
           :
           <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink></div>
          }
           <Button variant="outline-success">
           {isLogin ? 'Войти' : 'Регистрация'}
           </Button>
         </Form>
      </Card>
    </div>
  )
}

export default Auth
