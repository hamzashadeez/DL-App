import React from 'react'
import { ImageBackground, StyleSheet} from 'react-native'

const Flash = () => {
    return (
        <ImageBackground resizeMode='cover' source={require('../assets/splash1.png')} style={{flex: 1, backgroundColor: "#2e4850", alignItems: 'center', justifyContent: 'center'}}>
            {/* <Text style={{fontFamily: "Lato", fontSize: 25, color: "#547c84"}}>Dausayin Labarai</Text> */}
        </ImageBackground>
    )
}

export default Flash

const styles = StyleSheet.create({})
