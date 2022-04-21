import * as React from "react"
import {BrowserRouter as Router} from "react-router-dom";

import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <AppRouter />
    </Router>
  )
}

export default App