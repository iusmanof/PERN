import {Routes, Route, Navigate} from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes";
import { useTypedSelector } from "../../store/hooks/TypedSelector";

const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.auth)
  return (
    <Routes>
        {isAuth && authRoutes.map(({path, Component}) =>{
            return <Route key={path} path={path} element={Component} />
        })}
        {publicRoutes.map(({path, Component}) =>{
            return <Route key={path} path={path} element={Component} />
        })}
        <Route path="*" element={<Navigate to="/" replace />} /> 
    </Routes>
  )
}

export default AppRouter
