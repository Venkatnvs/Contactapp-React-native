import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Container from "../common/Container";
import CtmButton from "../common/CtmButton";
import Input from "../common/Input";
import styles from './styles';
import { LOGIN } from '../../constants/routeNames';
import Message from "../common/Message";

const SignUpcomponents = ({onSubmit,onChange,form,errors,error,loading}) => {
    const { navigate } = useNavigation();
    return (
        <Container>
            <Image height={60} width={60} style={styles.logoimg} source={require('../../assets/icon.png')}/>
            <View>
                <Text style={styles.title}>Welcome to the Contacts</Text>
                <Text style={styles.subtitle}>Create a free Account here</Text>
            </View>
            <View>
                {error?.error && <Message danger retry retryFun={()=>{
                    console.log("some wrong")
                }} message={error?.error}/>}
                {/* {console.log('error-s',error?.error?.toString())} */}
            </View>
            <View style={styles.form}>
                <Input
                    label='UserName'
                    onChangeText={(value) => onChange({name:"UserName",value})}
                    placeholder='Enter UserName'
                    error={errors.UserName || error?.username?.[0]}
                ></Input>
                <Input
                    label='First Name'
                    onChangeText={(value) => onChange({name:"FirstName",value})}
                    placeholder='Enter First Name'
                    error={errors.FirstName || error?.first_name?.[0]}
                ></Input>
                <Input
                    label='Last Name'
                    onChangeText={(value) => onChange({name:"LastName",value})}
                    placeholder='Enter Last Name'
                    error={errors.LastName || error?.last_name?.[0]}
                ></Input>
                <Input
                    label='Email'
                    onChangeText={(value) => onChange({name:"Email",value})}
                    placeholder='Enter Email'
                    error={errors.Email || error?.email?.[0]}
                ></Input>
                <Input
                    label='Password'
                    onChangeText={(value) => onChange({name:"Password",value})}
                    placeholder='Enter Password'
                    secureTextEntry={true}
                    error={errors.Password || error?.password?.[0]}
                    icon={<Text>hide</Text>}
                    iconposition='right'
                    // errors="This field is required"
                ></Input>
                <CtmButton OnPress={onSubmit} title='Submit' primary loading={loading} disabled={loading}/>
                <View style={styles.createnext}>
                    <Text style={styles.linktxt}>Need an new Account ?</Text>
                    <TouchableOpacity onPress={()=>{navigate(LOGIN)}}>
                        <Text style={styles.links}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    );
};

export default SignUpcomponents;