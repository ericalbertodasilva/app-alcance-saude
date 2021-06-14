import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    navBarBody: {
        marginTop: 25,
        backgroundColor: '#264d76',
        alignContent: 'flex-start',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop: 8,
        paddingBottom: 8,
        paddingStart:8,
        paddingEnd: 10
    },

    navBarCenter: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 30,    
    },
  
    loginBody: {
        backgroundColor: "#ffffff",
        borderColor:'#029ed7',
        justifyContent: 'center',
        alignItems:'center',
        padding:'5%',
        borderWidth:2,
        margin:'2%'
        
    },

    loginImage: {
        marginBottom:30,
        width:'50%'
    },

    loginTextInput:{
        borderColor:'#029ed7',
        height: 40,
        minWidth:'75%',
        borderWidth:2,
        marginBottom:20,
    },

    loginButton:{
        backgroundColor:'#264d76',
        padding: 10,
        borderRadius:5,
        height:50,
        marginTop:10,
        marginBottom:'10%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginButtonText:{
        fontSize: 25,
        textAlign: 'center',
        color: '#ffffff',
    },

    
})