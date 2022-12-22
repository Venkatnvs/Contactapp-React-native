import { StyleSheet } from "react-native"
import colors from "../../../theme/colors";

export default StyleSheet.create({
    Wrapper:{
        height:45,
        borderColor: colors.grey,
        borderWidth:2,
        borderRadius:4,
        paddingHorizontal:6,
        alignItems:'center',
        marginTop:5,
    },
    textinput:{
        flex:1,
        width:'100%',
    },
    inputcontainer:{
        paddingVertical:6,
    },
    error:{
        color: colors.danger,
        paddingTop:3,
        fontSize:12,
        paddingLeft:6,
    },
});