export interface ITypes{
    id: number,
    name: string
}

export interface IBrands{
    id: number,
    name: string
}

export interface IDevices{
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string
}

export interface DeviceState {
    types: Array<ITypes> | ITypes[],
    brands: Array<IBrands>
    devices: Array<IDevices>
    isSelectedTypeId: number
    isSelectedBrandsId: number
}

export enum DeviceActionTypes {
    CHANGE_SELECTED_TYPE = 'CHANGE_SELECTED_TYPE',
    CHANGE_SELECTED_BRAND = 'CHANGE_SELECTED_BRAND',
    SET_TYPE = 'SET_TYPE'
}

interface SetSelectedTypesAction {
    type: DeviceActionTypes.CHANGE_SELECTED_TYPE
    isSelectedTypeId: number
}

interface SetSelectedBrandsAction {
    type: DeviceActionTypes.CHANGE_SELECTED_BRAND
    isSelectedBrandsId: number
}

interface SetType {
    type: DeviceActionTypes.SET_TYPE
    payload: Array<ITypes>
}


export type DeviceAction = SetSelectedTypesAction | SetSelectedBrandsAction | SetType