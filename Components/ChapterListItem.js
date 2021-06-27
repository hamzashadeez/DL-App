import React from 'react'
import { StyleSheet, Text, Pre, Pressable } from 'react-native'

const ChapterListItem = ({title}) => {
    return (
        <Pressable style={styles.main}>
            <Text style={{fontFamily: "Lato", fontSize: 13, color: "#2e4850"}}>{title}</Text>
        </Pressable>
    )
}

export default ChapterListItem

const styles = StyleSheet.create({
    main:{
        marginBottom: 10,
        width: "100%",
        padding: 13,
        alignItems: 'flex-start',
        justifyContent: "center",
        backgroundColor: 'whitesmoke'
    }
})
