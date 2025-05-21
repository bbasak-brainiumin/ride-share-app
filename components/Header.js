import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Header(props) {
  return (
    <View style={styles.headerRow}>
      {props.left}
      <Text style={styles.headerTitle}>{props.title}</Text>
      {props.end}
    </View>
  )
}

const styles = StyleSheet.create({
    headerRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
    },
    headerTitle : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5893D4',
        flex: 1
    }
})