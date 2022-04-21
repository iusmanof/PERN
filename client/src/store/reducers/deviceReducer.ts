import { DeviceAction, DeviceActionTypes, DeviceState } from "../types/device";


const initialState: DeviceState = {
    types: [
        {id: 1, name: "Холодильник"},
        {id: 2, name: "Смартфоны"}
    ],
    brands: [
        {id: 1, name: "Samsung"},
        {id: 2, name: "Nokia"}
    ],
    devices: [
        {id: 1, name: 'Iphone 12 Pro', price: 120, rating: 5, img: '6ed8b842-1057-4a73-9574-c600c70f7773.jpg'},
        {id: 2, name: 'Iphone 13 Pro', price: 130, rating: 2, img: '6ed8b842-1057-4a73-9574-c600c70f7773.jpg'},
        {id: 3, name: 'Iphone 14 Pro', price: 140, rating: 1, img: '6ed8b842-1057-4a73-9574-c600c70f7773.jpg'},
    ],
    isSelectedTypeId: 1,
    isSelectedBrandsId: 1 
}

export const deviceReducer = (state = initialState, action: DeviceAction): DeviceState => {
    switch (action.type){
        // case DeviceActionTypes.FETCH_DEVICES_SUCCESS:
        //   return { types: action.types , brands: action.brands , devices: action.devices }
        case DeviceActionTypes.CHANGE_SELECTED_TYPE:
          return { ...state, isSelectedTypeId: action.isSelectedTypeId }
        case DeviceActionTypes.CHANGE_SELECTED_BRAND:
          return { ...state, isSelectedBrandsId: action.isSelectedBrandsId }
        default:
          return state;
    }
}
