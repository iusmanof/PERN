import { AuthAction, AuthActionTypes, IUser } from './../types/auth';
import { Dispatch } from 'react';

export const adminAuth = () => {
    return async(dispatch: Dispatch<AuthAction>) => {
        dispatch({type: AuthActionTypes.AUTH_ADMIN, payload: true})
    }
}

export const userAuth = () => {
    return async(dispatch: Dispatch<AuthAction>) => {
        dispatch({type: AuthActionTypes.AUTH_ADMIN, payload: false})
    }
}

export const setIsAuth = (status: boolean) => {
    return async(dispatch: Dispatch<AuthAction>) => {
        dispatch({type: AuthActionTypes.SET_AUTH, payload: status})
    }
}

export const setUser = (user: IUser | {}) => {
    return async(dispatch: Dispatch<AuthAction>) => {
        dispatch({type: AuthActionTypes.SET_USER, payload: user})
    }
}