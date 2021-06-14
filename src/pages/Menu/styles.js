import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    NavBarBody: {
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

    NavBarCenter: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 30,    
    },
  
    ButtonsBody: {
        backgroundColor: '#ffffff',
        flexWrap: "wrap",
        flexDirection:'row',
        justifyContent:'space-between',
    },

    ButtonsButton: {
        backgroundColor: "#ffffff",
        borderColor:'#029ed7',
        borderWidth:2,
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginVertical: "1%",
        width: "48%",
        minHeight: "35%",
        justifyContent:'center'
    },

    ButtonsText:{
        textAlign: "center",
        fontSize: 20,
        justifyContent: "center",
        color: '#029ed7',
    }
})