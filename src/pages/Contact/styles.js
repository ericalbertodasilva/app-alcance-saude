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
  
    buttonsBody: {
        backgroundColor: "#ffffff",
        borderColor:'#029ed7',
        justifyContent:'space-between',
        alignItems:'center',
        height: 80,
        borderWidth:2,
        borderRadius: 50,
        flexDirection:'row',
        margin:'2%'
        
    },

    buttonsIcon: {
        paddingLeft: 25,
    },

    buttonsText:{
        fontSize: 20,
        minWidth:'70%',
        color: '#029ed7',
    }
})