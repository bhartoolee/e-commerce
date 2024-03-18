import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";

const header = (props) => {
    return (
        <View style={style.header}>
            <Image
                style={style.nav}
                source={props.back}
            />

            <Text style={style.description}>{props.description}</Text>

            <Image
                style={style.nav}
                source={props.icon}
            />
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginHorizontal:10,
        marginTop: 30,
        marginBottom:50,
        justifyContent: 'space-between'
    },
    nav: {
        backgroundColor: 'rgba(255, 224, 204, 0.91)',
        width: 30,
        height: 30,
        borderRadius: 3
    },
    description: {
        fontSize: 20,
        fontWeight: "bold"
    },
})

export default header