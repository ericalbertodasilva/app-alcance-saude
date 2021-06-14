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
  
    cardBody: {
        backgroundColor:'#264d76',
        borderRadius: 5,
        margin:'5%',
        padding:'5%',
    },

    cardTextName:{
        fontSize: 20,
        fontWeight: "bold",
        color: '#FFFFFF',
    },
    cardTextPlan:{
        fontSize: 20,
        color: '#FFFFFF',
    },
    cardTextNumber:{
        fontSize: 20,
        fontWeight: "bold",
        color: '#FFFFFF',
    },
    cardTextVal:{
        fontSize: 20,
        color: '#FFFFFF',
    },
})