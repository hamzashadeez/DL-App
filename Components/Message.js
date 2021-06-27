import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const First = ({message, sender})=>{
    return(
        <View style={styles.container} >
            <View style={styles.main}>
                <Text style={styles.message1}>{message}</Text>
            </View>
            <Text style={styles.name}>{sender}</Text>
        </View>
    )
}

const Second = ({message, sender})=>{
    return(
        <View style={styles.container2} >
            <View style={styles.main2}>
                <Text style={styles.message1}>{message}</Text>
            </View>
            <Text style={styles.name}>{sender}</Text>
        </View>
    )
}

export {First, Second} 


const styles = StyleSheet.create({
    container:{
        marginVertical: 10,
        width: "100%"
    },
    container2:{
        marginVertical: 10,
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: 'center'
    },
    main:{
        padding: 10,
        maxWidth: 230,
        borderRadius: 5,
        alignSelf:'flex-start',
        elevation: 4,
        backgroundColor: '#999',
    
    },
    main2:{
        padding: 10,
        maxWidth: 230,
        borderRadius: 5,
        alignSelf:'flex-end',
        elevation: 4,
        backgroundColor: '#2e4850',
    
    },
    message1:{
        fontFamily:"Lato",
        fontSize: 11,
        color: '#fff'
    },
    message2:{
        fontFamily:"Lato",
        fontSize: 13,
        color: '#222'
    },
    name:{
        fontSize: 10,
        color: "#444"
    }
})