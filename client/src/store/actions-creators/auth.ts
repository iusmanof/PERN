import { AuthAction, AuthActionTypes } from './../types/auth';
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