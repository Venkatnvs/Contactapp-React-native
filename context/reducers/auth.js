import { CLEAR_AUTH_STATE, LOGIN_FAIL, LOGIN_LOADGING, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_LOADGING, REGISTER_SUCCESS } from "../../constants/actionTypes";

const auth = (state, {type,payload})=>{

    switch(type){
        case REGISTER_LOADGING:
            return {
                ...state,
                loading: true,
            };

        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case LOGIN_LOADGING:
            return {
                ...state,
                loading: true,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                isLoggedIn: true,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload,
            };
        case CLEAR_AUTH_STATE:
            return {
                ...state,
                loading: false,
                data: null,
                error: null,
            };
        
        default:
            return state;
    }

};

export default auth;