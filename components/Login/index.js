import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Container from "../../components/common/Container";
import CtmButton from "../../components/common/CtmButton";
import Input from "../../components/common/Input";
import styles from './styles';
import { SIGNUP } from '../../constants/routeNames';
import Message from "../common/Message";

const Logincomponents = ({onChange,errors,onSubmit,loading,error,form}) => {
    const { navigate } = useNavigation();
    return (
        <Container>
            <Image height={60} width={60} style={styles.logoimg} source={require('../../assets/icon.png')}/>
            <View>
                <Text style={styles.title}>Welcome to the Contacts</Text>
                <Text style={styles.subtitle}>Please Login here...</Text>
            </View>
            {error?.error && <Message danger onDismiss={()=>{}} retry retryFun={()=>{}} message={error?.error}/>}
            {error && !error.error && (<Message onDismiss={()=>{}} retry retryFun={()=>{}} danger message="Invalid credentials"/>)}
            <View style={styles.form}>
                <Input
                    label='Username'
                    onChangeText={(value) => onChange({name:"UserName",value})}
                    placeholder='Enter Username'
                    error={errors.UserName}
                ></Input>
                <Input
                    label='Password'
                    onChangeText={(value) => onChange({name:"Password",value})}
                    placeholder='Enter Password'
                    secureTextEntry={true}
                    icon={<Text>hide</Text>}
                    iconposition='right'
                    error={errors.Password}
                    // error="This field is required"
                ></Input>
                <CtmButton title='Submit' primary loading={loading} OnPress={onSubmit} disabled={loading}/>
                <View style={styles.createnext}>
                    <Text style={styles.linktxt}>Need an new Account ?</Text>
                    <TouchableOpacity onPress={()=>{navigate(SIGNUP)}}>
                        <Text style={styles.links}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    );
};

export default Logincomponents;