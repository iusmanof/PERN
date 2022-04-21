export interface AuthState {
    isAuth: boolean
}

export enum AuthActionTypes {
    AUTH_ADMIN = 'AUTH_ADMIN',
    AUTH_USER = 'AUTH_USER'
}

interface AuthActionAdmin {
    type: AuthActionTypes.AUTH_ADMIN
    payload: boolean
}

interface AuthActionUser {
    type: AuthActionTypes.AUTH_USER
    payload: boolean
}

export type AuthAction = AuthActionAdmin | AuthActionUser