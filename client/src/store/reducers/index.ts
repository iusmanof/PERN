import { authReducer } from './authReducer';
import { combineReducers } from "redux";
import { deviceReducer } from './deviceReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    device: deviceReducer,
})

export type RootState = ReturnType<typeof rootReducer>