import { AuthState, AuthAction, AuthActionTypes } from './../types/auth';


const initialState: AuthState = {
    isAuth: false,
    user: {}
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type){
        case AuthActionTypes.AUTH_ADMIN:
          return { ...state, isAuth: action.payload }
        case AuthActionTypes.AUTH_USER:
          return { ...state, isAuth: action.payload }
        case AuthActionTypes.SET_AUTH:
          return { ...state ,isAuth: action.payload }
        case AuthActionTypes.SET_USER:
          return { ...state, user: action.payload }
        default:
          return state;
    }
}
