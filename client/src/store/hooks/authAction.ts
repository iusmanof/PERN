import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import  AuthActionCreators from '../actions-creators/index'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AuthActionCreators, dispatch)
}