import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADGING, REGISTER_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosIntercept";

export const clearAuthState = () => (dispatch) => {
    dispatch({
        type: CLEAR_AUTH_STATE,
    });
};

export default ({
    Email:email,
    Password:password,
    UserName:username,
    FirstName: first_name,
    LastName: last_name,
}) => (dispatch) => {
    dispatch({
    type: REGISTER_LOADGING,
});
    axiosInstance.post('/auth/register',{
        email,
        password,
        username,
        first_name,
        last_name,
    })
    .then((res) =>{
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) =>{
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response ? err.response.data : {error:"Something went wrong"},
        });
    })
};