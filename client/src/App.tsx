import * as React from "react"
import {BrowserRouter as Router} from "react-router-dom";

import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
import { useActions } from "./store/hooks/authAction";
import { setUser } from "./store/actions-creators/auth";


const App: React.FC = () => {
  const { setIsAuth } = useActions()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
        check().then(data => {
            // setUser(true)
            setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

  if (loading) {
      return <Spinner animation={"grow"}/>
  }

  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  )
}

export default App