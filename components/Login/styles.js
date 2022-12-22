import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
    logoimg:{
        height:150,
        width:150,
        alignSelf:'center',
        marginTop:25,
        marginBottom:20,
    },
    title:{
        fontSize:22,
        textAlign:'center',
        paddingTop:8,
        fontWeight:'900',
    },
    subtitle:{
        fontSize:17,
        textAlign:'center',
        paddingTop:8,
        fontWeight:'500',
    },
    form:{
        paddingHorizontal:8,
        paddingVertical:18,
        // borderWidth:2,
    },
    links:{
        color:colors.primary,
        paddingLeft:10,
        fontSize:16,
        fontWeight:'500',
    },
    createnext:{
        paddingVertical:7,
        justifyContent:'center',
        flexDirection:'row',
    },
    linktxt:{
        fontSize:16,
    },
});