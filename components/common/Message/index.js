import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../theme/colors';
import styles from './styles';

const Message = ({style,message,retry,retryFun,onDismiss,primary,secondary,danger,warning,success,...props}) => {
    const [userDismissed, setDismissed] = useState(false);
    const getBgColor = ()=>{
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
        }
        if(warning){
            return colors.warning;
        }else{
            return colors.grey;
        }
    }
    return (
    <>
    {userDismissed ? null :
    <View style={styles.inputcontainer}>
        <TouchableOpacity style={[styles.wrapper,{backgroundColor:getBgColor()}]}>
            <View style={styles.maintxt}>
                {message && <Text style={[styles.message,{color: colors.white,}]}>{message}</Text>}
                {retry && typeof onDismiss !== 'function' && (<TouchableOpacity onPress={retryFun}>
                    <Text style={styles.retry}>retry</Text>
                    </TouchableOpacity>)}
                {typeof onDismiss === 'function' && (<TouchableOpacity onPress={()=>{
                    setDismissed(true);
                    onDismiss();
                }}>
                <Text style={{color: colors.white,}}>
                    X
                </Text>
                </TouchableOpacity>)}
            </View>
        </TouchableOpacity>
    </View>
    }
    </>
    );
};

export default Message;