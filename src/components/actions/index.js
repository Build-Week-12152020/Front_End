import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

export const IS_LOADING_LOGIN = "IS_LOADING_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const IS_LOADING_REGISTER = "IS_LOADING_REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const IS_LOADING_PLANTS = "IS_LOADING_PLANTS";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";

// BASE URL https://water-my-plants-tracker.herokuapp.com

const loginURL = `https://water-my-plants-tracker.herokuapp.com/api/users/login/`;
const regURL = `https://water-my-plants-tracker.herokuapp.com/api/users/register`;
 

export const registerUser = (data) => (dispatch) => {
    dispatch({
        type: IS_LOADING_REGISTER
    });

    axiosWithAuth()
        .post(regURL, data)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            console.log(`ab: actions: registerUser: res:`, res);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.message
            })
        })
        .catch((err) => {
            console.error(err);
            dispatch({
                type: REGISTER_FAILURE
            })
        })
};

export const loginToApp = (data) => (dispatch) => {
    dispatch({
        type: IS_LOADING_LOGIN
    });

    

    axiosWithAuth()
        .post(loginURL, data)
        .then((res) => {
            console.log(`ab: actions: loginToApp: res:`,res);
            localStorage.setItem('token', res.data.token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.message
            })
        })
        .catch((err) => {
            console.error(err);
            dispatch({
                type: LOGIN_FAILURE
            })
        })
};
