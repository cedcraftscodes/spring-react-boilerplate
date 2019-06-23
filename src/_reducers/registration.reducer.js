import { userConstants } from '../_constants';

export function registration(state = {} , action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {registering: true};
        case userConstants.REGISTER_SUCESS:
            return {};
        case userConstants.REGISTRATION_FAILURE:
            return {};
        default: 
            return state
    }
}