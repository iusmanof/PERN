import { Dispatch } from 'react';

import { DeviceAction, DeviceActionTypes, ITypes, IBrands, IDevices } from './../types/device';

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

export const setType = (type: Array<ITypes>) => {
    return(dispatch: Dispatch<DeviceAction>) =>{
     dispatch({type: DeviceActionTypes.SET_TYPE, payload: type})
    }
}

export const setBrand = (brand: Array<IBrands>) => {
    return(dispatch: Dispatch<DeviceAction>) =>{
     dispatch({type: DeviceActionTypes.SET_BRAND, payload: brand})
    }
}

export const setDevice = (device: Array<IDevices>) => {
    return(dispatch: Dispatch<DeviceAction>) =>{
     dispatch({type: DeviceActionTypes.SET_DEVICE, payload: device})
    }
}

export const setPage = (page: number) => {
    return(dispatch: Dispatch<DeviceAction>) =>{
     dispatch({type: DeviceActionTypes.SET_PAGE, payload: page})
    }
}

export const setTotalCount = (count: number) => {
    return(dispatch: Dispatch<DeviceAction>) =>{
     dispatch({type: DeviceActionTypes.SET_TOTAL_COUNT, payload: count})
    }
}

export const setLimit = (limit: number) => {
    return(dispatch: Dispatch<DeviceAction>) =>{
     dispatch({type: DeviceActionTypes.SET_LIMIT, payload: limit})
    }
}