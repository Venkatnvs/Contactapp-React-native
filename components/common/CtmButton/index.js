import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';

const CtmButton = ({style,disabled,loading,title,primary,secondary,danger,OnPress,success,...props}) => {
    const getBgColor = ()=>{
        if(disabled){
            return colors.grey;
        }
        if(primary){
            return colors.primary;
        }
        if(success){
            return colors.success;
        }
        if(danger){
            return colors.danger;
        }
        if(secondary){
            return colors.secondary;
        }else{
            return colors.grey;
        }
    }
    return (
    <View style={styles.inputcontainer}>
        <TouchableOpacity 
        disabled={disabled}
        onPress={OnPress}
        style={[styles.wrapper,{backgroundColor:getBgColor()}]}>
            <View style={styles.maintxt}>
                {loading && <ActivityIndicator color={colors.white}/>}
                {title && <Text style={[styles.text,{color: disabled ? colors.black : colors.white, paddingLeft: loading ? 7 : 0,}]}>{title}</Text>}
            </View>
        </TouchableOpacity>
    </View>
    );
};

export default CtmButton;