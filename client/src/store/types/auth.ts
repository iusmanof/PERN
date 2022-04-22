export interface IUser {
    email: string
    password: string
    role?: string
}

export interface AuthState {
    isAuth: boolean
    user: IUser | {}
}

export enum AuthActionTypes {
    AUTH_ADMIN = 'AUTH_ADMIN',
    AUTH_USER = 'AUTH_USER',
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER'
}

interface AuthActionAdmin {
    type: AuthActionTypes.AUTH_ADMIN
    payload: boolean
}

interface AuthActionUser {
    type: AuthActionTypes.AUTH_USER
    payload: boolean
}

interface AuthActionSetAuth {
    type: AuthActionTypes.SET_AUTH
    payload: boolean
}

interface AuthActionSetUser {
    type: AuthActionTypes.SET_USER
    payload: IUser | {}
}

export type AuthAction = AuthActionAdmin | AuthActionUser | AuthActionSetAuth | AuthActionSetUser