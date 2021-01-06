import { IS_LOADING_LOGIN, IS_LOADING_REGISTER, IS_LOADING_PLANTS, DATA_LOAD_SUCCESS, DATA_LOAD_ERROR, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

export const initialState = {
    is_loading_login: false,
    is_loading_register: false,
    register_success: false,
    register_error: false,
    login_success: false,
    login_error: false,
    is_loading_plants: false,
    plantlist: [],
    error: ""
};

const plantReducer = (state= initialState, action) => {
    switch(action.type) {
        case IS_LOADING_LOGIN: {
            return {
                ...state,
                is_loading_login: true
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                is_loading_login: false,
                login_success: true,
                error: ""
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                is_loading_login: false,
                login_error: true,
                error: action.payload
            }
        }
        case IS_LOADING_REGISTER: {
            return {
                ...state,
                is_loading_register: true
            };
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                is_loading_register: false,
                register_success: true,
                error: ""
            }
        }
        case REGISTER_FAILURE: {
            return {
                ...state,
                is_loading_register: false,
                register_error: true,
                error: action.payload
            }
        }
        case IS_LOADING_PLANTS: {
            return {
                ...state,
                is_loading_plants: true
            }
        }
        case DATA_LOAD_SUCCESS: {
            return {
                ...state,
                is_loading_plants: false,
                plantlist: action.payload,
                error: "",
            };
        }
        case DATA_LOAD_ERROR: {
            return {
                ...state,
                is_loading_plants: false,
                error: action.payload
            };
        }
        default:
            return state;
    }
};

export default plantReducer;