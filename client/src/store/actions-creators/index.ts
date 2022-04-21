import * as AuthActionCreators from './auth'
import * as DeviceActionCreators from './device'

export default { 
    ...AuthActionCreators,
    ...DeviceActionCreators
}