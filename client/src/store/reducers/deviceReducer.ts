import { DeviceAction, DeviceActionTypes, DeviceState } from "../types/device";


const initialState: DeviceState = {
    types: [],
    brands: [],
    devices: [],
    isSelectedTypeId: 1,
    isSelectedBrandsId: 1,
    page: 1,
    totalCount: 0,
    limit: 3 
}

export const deviceReducer = (state = initialState, action: DeviceAction): DeviceState => {
    switch (action.type){
        case DeviceActionTypes.CHANGE_SELECTED_TYPE:
          return { ...state, isSelectedTypeId: action.isSelectedTypeId }
        case DeviceActionTypes.CHANGE_SELECTED_BRAND:
          return { ...state, isSelectedBrandsId: action.isSelectedBrandsId }
        case DeviceActionTypes.SET_TYPE:
          return { ...state, types: action.payload}
        case DeviceActionTypes.SET_BRAND:
          return { ...state, brands: action.payload}
        case DeviceActionTypes.SET_DEVICE:
          return { ...state, devices: action.payload}
        case DeviceActionTypes.SET_PAGE:
          return { ...state, page: action.payload}
        case DeviceActionTypes.SET_TOTAL_COUNT:
          return { ...state, totalCount: action.payload}
        case DeviceActionTypes.SET_LIMIT:
          return { ...state, limit: action.payload}        
        default:
          return state;
    }
}
