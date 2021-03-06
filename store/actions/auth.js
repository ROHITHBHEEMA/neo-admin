import axios from 'axios';

import * as actionTypes from './actionTypes';
import {convertJsonToGQL} from "../../lib/utility";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username: username,
            password: password,
        };
        const login_query = {
            query: `
                query{
                    login(logindata:authdata){
                        userId
                        token
                        expiresIn
                        
                    }
                }
            `
        }
        login_query.query = convertJsonToGQL(login_query.query, authData, "authdata")
        axios.post("http://localhost:8080/graphql", login_query)
            .then(response => {
                console.log(response);
                const expirationDate = new Date(new Date().getTime() + response.data.data.login.expiresIn * 1000);
                localStorage.setItem('token', response.data.data.login.token);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.data.login.userId);
                dispatch(authSuccess(response.data.data.login.token, response.data.data.login.userId));
                dispatch(checkAuthTimeout(response.data.data.login.expiresIn));
                console.log('authenticated')
            })
            .catch(err => {
                dispatch(authFail(err));
            });
    };
};
export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};