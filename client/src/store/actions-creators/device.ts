import { Dispatch } from 'react';
import axios from 'axios';

import { DeviceAction, DeviceActionTypes, ITypes } from './../types/device';

export const setSelectedType = (typeId: number) => {
    return(dispatch: Dispatch<DeviceAction>) =>{
     dispatch({type: DeviceActionTypes.CHANGE_SELECTED_TYPE, isSelectedTypeId: typeId})
    }
}

export const setSelectedBrand = (brandId: number) => {
    return(dispatch: Dispatch<DeviceAction>) =>{
     dispatch({type: DeviceActionTypes.CHANGE_SELECTED_BRAND, isSelectedBrandsId: brandId})
    }
}

export const setType = (type: ITypes[]) => {
    return(dispatch: Dispatch<DeviceAction>) =>{
     dispatch({type: DeviceActionTypes.SET_TYPE, payload: type})
    }
}
