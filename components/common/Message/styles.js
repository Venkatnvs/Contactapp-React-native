import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";

export default StyleSheet.create({
    wrapper:{
        height:35,
        paddingHorizontal:8,
        borderRadius:1,
        marginVertical:6,
        // alignItems:'center',
        justifyContent:'center',
    },
    message:{
        fontSize:15,
    },
    retry:{
        color:colors.white,
    },
    maintxt:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    inputcontainer:{
        marginVertical: 3,
    },
});