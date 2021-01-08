
import axiosWithAuth from "../utils/axiosWithAuth";
import { initialState } from "../reducers/plantReducer";

export const IS_LOADING_LOGIN = "IS_LOADING_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const IS_LOADING_REGISTER = "IS_LOADING_REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const IS_LOADING_PLANTS = "IS_LOADING_PLANTS";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";
export const ADD_PLANT_LOADING = "ADD_PLANT_LOADING";
export const ADD_PLANT_SUCCESS = "ADD_PLANT_SUCCESS";
export const ADD_PLANT_ERROR = "ADD_PLANT_ERROR";
export const IS_EDITING = "IS_EDITING";
export const UPDATE_PLANT_LOADING = "UPDATE_PLANT_LOADING";
export const UPDATE_PLANT_SUCCESS = "UPDATE_PLANT_SUCCESS";
export const UPDATE_PLANT_ERROR = "UPDATE_PLANT_LOADING";

// BASE URL https://water-my-plants-tracker.herokuapp.com

const loginURL = `https://water-my-plants-tracker.herokuapp.com/api/users/login/`;
const regURL = `https://water-my-plants-tracker.herokuapp.com/api/users/register`;
const plantsURL = `https://water-my-plants-tracker.herokuapp.com/api/plants`;
const plantsWUserURL = `https://water-my-plants-tracker.herokuapp.com/api/plants/user/`;
const updatePlantURL = `https://water-my-plants-tracker.herokuapp.com/api/plants/`;



export const registerUser = (data) => (dispatch) => {
    dispatch({
        type: IS_LOADING_REGISTER,
    })

    axiosWithAuth()
        .post(regURL, data)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            console.log(`ab: actions: registerUser: res:`, res)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.user

            })
        })
        .catch((err) => {
            console.error(err)
            dispatch({
                type: REGISTER_FAILURE,
            })
        })
}

export const loginToApp = (data) => (dispatch) => {
    dispatch({
        type: IS_LOADING_LOGIN,
    })

    axiosWithAuth()
        .post(loginURL, data)
        .then((res) => {
            console.log(`ab: actions: loginToApp: res:`, res)
            localStorage.setItem('token', res.data.token)
            dispatch({
                type: LOGIN_SUCCESS,

                payload: res.data.user

            })
        })
        .catch((err) => {
            console.error(err)
            dispatch({
                type: LOGIN_FAILURE,
            })
        })
}

export const loadPlantlist = () => (dispatch) => {
    dispatch({
        type: IS_LOADING_PLANTS,
    })


    axiosWithAuth()
        .get(plantsURL)
        .then((res) => {
            console.log(`ab: actions: loadPlantlist: res:`,res);
            dispatch({
                type: DATA_LOAD_SUCCESS,
                payload: res.data
            })

        })
        .catch((err) => {
            console.log(`ab: actions: loadPlanlist: err:`, err);
            dispatch({
                type: DATA_LOAD_ERROR
            })
        })
};

export const addPlant = (data, id) => (dispatch) => {
    dispatch({
        type: ADD_PLANT_LOADING
    })
    
    axiosWithAuth()
        .post(`${plantsWUserURL}${id}`, data)
        .then( (res) => {
            console.log(`ab: actions: addPlant: res:`, res);
            dispatch({
                type: ADD_PLANT_SUCCESS
            })
        })
        .catch( (err) => {
            console.error(`ab: actions: addPlant: err:`,err)
            dispatch({
                type: DATA_LOAD_ERROR
            })
        })

}

export const passDataToForm = (data) => (dispatch) => {
    dispatch({
        type: IS_EDITING,
        payload: data
    })


}

export const updatePlant = (data, id) => (dispatch) => {
    dispatch({
        type: UPDATE_PLANT_LOADING
    })

    axiosWithAuth()
        .put(`${updatePlantURL}${id}`, data)
        .then( (res) => {
            console.log(`ab: actions: updatePlant: res:`, res);
            
        })
        .catch( (err) => {
            console.error(`ab: actions: updatePlant: err:`, err);
        })
}

export const deletePlant = (id) => (dispatch) => {
    dispatch({
        type: UPDATE_PLANT_LOADING
    })

    axiosWithAuth()
        .delete(`${updatePlantURL}${id}`)
        .then( (res) => {
            console.log(`ab: actions: deletePlant: res:`, res)
            
        })
        .catch( (err) => {
            console.error(`ab: actions: deletePlant: err:`, err)
        })
}
