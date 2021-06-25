import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const Login = ({navigation}) => {
    return (
        <View style={{flex: 1, padding: 15, backgroundColor: "#2e4850"}}>
            <Text style={{fontFamily:"Lato", fontSize: 30, color: "#547c84", marginTop: 40}}>Welcome Back</Text>
            <Text style={{fontFamily:"Lato", fontSize: 14, color: "#547c84", marginBottom: 40}}>Muna murna da dawowarka</Text>

            <View>
                <TextInput style={styles.input} placeholderTextColor='#2e4850' placeholder="Email Address"/>
                <TextInput style={styles.input} placeholderTextColor='#2e4850' placeholder="Password"/>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{fontFamily: "Lato", color: "#fff"}}>Login</Text>
                </TouchableOpacity>
                <View style={{marginTop: 35, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <Text style={{fontFamily:"Lato", fontSize: 16, color: "#eee"}}>Babu account?</Text>
                <TouchableOpacity style={{marginLeft: 10}} onPress={()=>navigation.navigate("Register")}>
                    <Text style={{fontFamily:"Lato", fontSize: 16, color: "#547c84"}}>Yi Register</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    input:{
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#547c84',
        borderRadius: 3,
        marginBottom: 10,
        fontSize: 15,
        color: "#eee",
        fontFamily: "Lato",
        
    },
    btn:{
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'seagreen',
        alignItems: "center",
        justifyContent: "center"
    }
})
