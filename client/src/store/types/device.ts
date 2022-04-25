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
    img: string,
    info: Array<any>
}

export interface DeviceState {
    types: Array<ITypes> | ITypes[],
    brands: Array<IBrands>
    devices: Array<IDevices>
    isSelectedTypeId: number
    isSelectedBrandsId: number
    page: number
    totalCount: number
    limit: number
}

export enum DeviceActionTypes {
    CHANGE_SELECTED_TYPE = 'CHANGE_SELECTED_TYPE',
    CHANGE_SELECTED_BRAND = 'CHANGE_SELECTED_BRAND',
    SET_TYPE = 'SET_TYPE',
    SET_BRAND = 'SET_BRAND',
    SET_DEVICE = 'SET_DEVICE',
    SET_PAGE = 'SET_PAGE',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    SET_LIMIT = 'SET_LIMIT'
}

interface SetSelectedPaginationAction {
    type: DeviceActionTypes.SET_PAGE | DeviceActionTypes.SET_TOTAL_COUNT | DeviceActionTypes.SET_LIMIT
    payload: number
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

interface SetBrand {
    type: DeviceActionTypes.SET_BRAND
    payload: Array<IBrands>
}

interface SetDevice {
    type: DeviceActionTypes.SET_DEVICE
    payload: Array<IDevices>
}



export type DeviceAction = SetSelectedTypesAction | SetSelectedBrandsAction | SetType | SetBrand | SetDevice | SetSelectedPaginationAction