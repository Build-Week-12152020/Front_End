import { IS_LOADING_LOGIN, IS_LOADING_REGISTER, IS_LOADING_PLANTS, DATA_LOAD_SUCCESS, DATA_LOAD_ERROR, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, ADD_PLANT_LOADING, ADD_PLANT_SUCCESS, IS_EDITING, ADD_PLANT_ERROR, UPDATE_PLANT_LOADING, UPDATE_PLANT_SUCCESS, UPDATE_PLANT_ERROR } from "../actions";

export const initialState = {
    // login & registration
    is_loading_login: false,
    is_loading_register: false,
    register_success: false,
    register_error: false,
    login_success: false,
    login_error: false,
    current_user: {},
    // loading plants
    is_loading_plants: false,
    plantlist: [],
    is_editing: false,
    // vv holds current plant being edited
    plant_isediting: {},
    // editing plantlist
    add_plant_loading: false,
    add_plant_success: false,
    add_plant_error: false,
    // update plant
    update_loading: false,
    update_success: false,
    update_error: false,
    // error handling across app
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
                current_user: action.payload,
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
                current_user: action.payload,
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
        case ADD_PLANT_LOADING: {
            return {
                ...state,
                add_plant_loading: true,
                is_editing: false,
                plant_isediting: {}
            }
        }
        case ADD_PLANT_SUCCESS: {
            return {
                ...state,
                add_plant_loading: false,
                add_plant_success: true,
                is_editing: false,
                plant_isediting: {}

            }
        }
        case ADD_PLANT_ERROR: {
            return {
                ...state,
                add_plant_loading: false,
                add_plant_error: action.payload,
                is_editing: false,
                plant_isediting: {}
            }
        }
        case IS_EDITING: {
            return {
                ...state,
                is_editing: true,
                plant_isediting: action.payload
            }
        }
        case UPDATE_PLANT_LOADING: {
            return {
                ...state,
                is_editing: false,
                update_loading: true
            }
        }
        case UPDATE_PLANT_SUCCESS: {
            return {
                ...state,
                is_editing: false,
                update_success: true
            }
        }
        case UPDATE_PLANT_ERROR: {
            return {
                ...state,
                is_editing: false,
                update_error: true
            }
        }
        default:
            return state;
    }
};

export default plantReducer;