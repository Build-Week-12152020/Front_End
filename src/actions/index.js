import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

export const IS_LOADING_LOGIN = "IS_LOADING_LOGIN";
export const IS_LOADING_REGISTER = "IS_LOADING_REGISTER";
export const IS_LOADING_PLANTS = "IS_LOADING_PLANTS";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";

// BASE URL https://water-my-plants-tracker.herokuapp.com

export const registerUser = (data) => (dispatch) => {
    dispatch({
        type: IS_LOADING_REGISTER
    })
}

export const loginToApp = (data) => (dispatch) => {
    dispatch({
        type: IS_LOADING_LOGIN
    });

    const loginURL = `https://water-my-plants-tracker.herokuapp.com/api/users/login`;

    axiosWithAuth()
        .post(loginURL, data)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err)
        })
};
