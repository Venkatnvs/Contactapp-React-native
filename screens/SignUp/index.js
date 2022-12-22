import React, { useCallback, useContext, useEffect, useState } from 'react';
import SignUpcomponents from '../../components/SignUp';
import signup, { clearAuthState } from '../../context/action/auth/signup';
import axiosInstance from '../../helpers/axiosIntercept';
import {GlobalContext} from '../../context/provider'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { LOGIN } from '../../constants/routeNames';

const SignUp=() =>{
    const [form, setForm] = useState({});
    const {navigate} = useNavigation();
    const [errors, setError] = useState({});
    const {authDispatch, authState:{error,loading,data},} = useContext(GlobalContext);

    // console.log('erroes',error);
    // console.log('data',data);

    // useEffect(()=>{
    //     axiosInstance.post("/contacts/").catch((err)=>{
    //         console.log('error =>', err.response);
    //     });
    // },[]);

    React.useEffect(()=>{
        if (data){
            navigate(LOGIN);
        }
    },[data]);

    useFocusEffect(React.useCallback(() => {
        return () => {
            if(data || error){
                clearAuthState()(authDispatch);
            }
        };
    },[data, error]),);


    const onChange = ({name,value}) =>{
        setForm({...form,[name]:value});

        if (value !== ''){
            if(name==='Password'){
                if(value.length < 6){
                    setError((prev) => {
                        return {...prev, [name]:'Password must be atleast 6 characters'}
                    });
                }else{
                    setError((prev) => {
                        return {...prev, [name]:null}
                    });
                }
            }else{
                setError((prev) => {
                    return {...prev, [name]:null}
                });
            }
        }else{
            setError((prev) => {
                return {...prev, [name]:`This ${name} field is required`}
            });
        }
    };
    const onSubmit = () => {
        // validation
        // console.log(form)
        if (!form.UserName){
            setError((prev) => {
                return {...prev, UserName:'This UserName field is required'}
            });
        }
        if (!form.Email){
            setError((prev) => {
                return {...prev, Email:'This Email field is required'}
            });
        }
        if (!form.Password){
            setError((prev) => {
                return {...prev, Password:'This Password field is required'}
            });
        }
        if (!form.FirstName){
            setError((prev) => {
                return {...prev, FirstName:'This FirstName field is required'}
            });
        }
        if (!form.LastName){
            setError((prev) => {
                return {...prev, LastName:'This LastName field is required'}
            });
        }
        if (
            Object.values(form).length === 5 &&
            Object.values(form).every((items) => items.trim().length >0) &&
            Object.values(errors).every((items) => !items)
        ){
            signup(form)(authDispatch);
        }
    };
    return(
        <SignUpcomponents 
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            errors={errors}
            error={error}
            loading={loading}
        />
    );
};

export default SignUp;