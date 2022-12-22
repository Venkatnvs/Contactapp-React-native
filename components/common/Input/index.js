import React from 'react';
import { View, Text, TextInput } from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';

const Input = ({onChangeText,style,value,label,icon,iconposition,error,...props}) => {
    const [Focused,SetFocused] = React.useState(false); 
    const getFlexdirection = ()=>{
        if(icon && iconposition){
            if(iconposition==='left'){
                return 'row';
            }else if (iconposition==='right'){
                return 'row-reverse';
            }else{
                return 'row-reverse';
            }
        }else{
            return 'row';
        }
    };
    const getBordercolor = ()=>{
        if(error){
            return colors.danger;
        if(Focused){
            return colors.primary;
        }
        }else{
            return colors.grey;
        }
    }
    return (
    <View style={styles.inputcontainer}>
        {label && <Text>{label}</Text>}
        <View style={[styles.Wrapper,{borderColor:getBordercolor(), flexDirection:getFlexdirection()}]}>
            <View>{icon && icon}</View>
            <TextInput
                style={styles.textinput}
                onChangeText={onChangeText}
                value={value}
                onFocus={()=>{SetFocused(true);}}
                onBlur={()=>{SetFocused(false);}}
                {...props}
            ></TextInput>
        </View>
        {error && <Text style={styles.error}>* {error}</Text>}
    </View>
    );
};

export default Input;