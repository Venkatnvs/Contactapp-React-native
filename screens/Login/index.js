import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import Logincomponents from "../../components/Login";
import loginUser from "../../context/action/auth/loginUser";
import { clearAuthState } from "../../context/action/auth/signup";
import { GlobalContext } from "../../context/provider";

const Login = () => {
    const [form, setForm] = useState({});
    const {navigate} = useNavigation();
    const [errors, setError] = useState({});
    const {authDispatch, authState:{error,loading,data},} = useContext(GlobalContext);

    useFocusEffect(React.useCallback(() => {
        return () => {
            if(data || error){
                clearAuthState()(authDispatch);
            }
        };
    },[data, error]),);

    const onSubmit = () => {
        if (!form.UserName){
            setError((prev) => {
                return {...prev, UserName:'This UserName field is required'}
            });
        }
        if (!form.Password){
            setError((prev) => {
                return {...prev, Password:'This Password field is required'}
            });
        }
        if(form.UserName && form.Password){
            // console.log(form);
            loginUser(form)(authDispatch);
        }
    }

    const onChange = ({name,value}) =>{
        setForm({...form,[name]:value});

        if (value !== ''){
            setError((prev) => {
                return {...prev, [name]:null}
            });
        }else{
            setError((prev) => {
                return {...prev, [name]:`This ${name} field is required`}
            });
        }
    };

    return (
        <Logincomponents
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
            error={error}
            loading={loading}
        />
    );
};

export default Login;
