import { AuthState, AuthAction, AuthActionTypes } from './../types/auth';


const initialState: AuthState = {
    isAuth: true
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type){
        case AuthActionTypes.AUTH_ADMIN:
          return { isAuth: action.payload }
        case AuthActionTypes.AUTH_USER:
          return { isAuth: action.payload }
        default:
          return state;
    }
}
