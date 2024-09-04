import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:15,
        backgroundColor:'#1F1E25',
        height:56,
        borderRadius:5,
        color:'#FFF',
        padding:16,
        fontSize:16,
        marginRight:20,
        alignItems:'center',
        flex:1
        
    },
    name:{
        color:'white',
        flex:1
    },
    buttonText:{
      color:'#FFF',
      fontSize:24,
  
    },
    button:{
      width:56,
      height:56,
      borderRadius:5,
      backgroundColor:'#F23C44',
      alignItems:'center',
      justifyContent:'center'
    }
})