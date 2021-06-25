import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Dausayin Labarai</Text>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#2e4850",
        paddingTop: 25,
        paddingBottom: 15,
        marginBottom: 5,
        paddingHorizontal: 13
    },
    text:{
        color: "#fff",
        fontFamily: "Lato",
        fontSize: 20
    }
})
