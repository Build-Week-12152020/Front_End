import { IS_LOADING_LOGIN, IS_LOADING_REGISTER, IS_LOADING_PLANTS, DATA_LOAD_SUCCESS, DATA_LOAD_ERROR } from "../actions";

export const initialState = {
    is_loading_login: false,
    is_loading_register: false,
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
        case IS_LOADING_REGISTER: {
            return {
                ...state,
                is_loading_register: true
            };
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
                plantlist: action.payload
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