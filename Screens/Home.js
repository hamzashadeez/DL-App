import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Box from '../Components/Box'
import HomeHeader from '../Components/HomeHeader'

const Home = () => {
    return (
        <View style={styles.screen}>
            <HomeHeader />
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                <Text style={styles.desc}>Zabi bangaren da kake so</Text>
                {/* Category New Arrival */}
                <View style={styles.category}>
                    <Text style={{fontFamily: "Lato", color: "#222"}}>NEW</Text>
                    <ScrollView snapToInterval={100} style={styles.list} showsHorizontalScrollIndicator={false} horizontal>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </ScrollView>
                </View>
                {/* Category Soyayyah */}
                <View style={styles.category}>
                    <Text style={{fontFamily: "Lato", color: "#222"}}>SOYAYYAH</Text>
                    <ScrollView snapToInterval={100} style={styles.list} showsHorizontalScrollIndicator={false} horizontal>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </ScrollView>
                </View>
                {/* Category Rayuwa */}
                <View style={styles.category}>
                    <Text style={{fontFamily: "Lato", color: "#222"}}>RAYUWA</Text>
                    <ScrollView snapToInterval={100} style={styles.list} showsHorizontalScrollIndicator={false} horizontal>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </ScrollView>
                </View>
                {/* Category Soyayyah */}
                <View style={styles.category}>
                    <Text style={{fontFamily: "Lato", color: "#222"}}>DOGON ZANGO (SERIES)</Text>
                    <ScrollView snapToInterval={100} style={styles.list} showsHorizontalScrollIndicator={false} horizontal>
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                        <Box />
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    screen:{
        backgroundColor: "white",
        flex: 1,
    },
    main:{
        flex: 1,
        padding: 10
    },
    desc:{
        textTransform: "uppercase",
        fontSize: 10,
        color: '#ccc',
        marginBottom: 8
    },
    category:{
        marginBottom: 20
    },
    list:{
        // height: 150,
        width: "100%",
        marginTop: 3
    },
    
})
