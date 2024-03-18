import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Header from "./navigation";
import back from '../assets/back.png';
import menu from '../assets/menu.png';
import Footer from "./footer";

const description = (props) => {
    return (
        <View style={style.container}>
            <Header
                back={back}
                description='Man united Jersey'
                icon={menu}
            />

            <View style={style.wrapper}>
                <Text style={style.text}>{props.name}</Text>
                <Image
                    style={style.image}
                    source={props.item}
                />
            </View>

            <TouchableOpacity style={style.click}>
                <Text style={style.button_text}>size</Text>
            </TouchableOpacity>

            <View style={style.num}>
                <TouchableOpacity style={style.button}>
                    <Text>32</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button}>
                    <Text>33</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button}>
                    <Text style={style.button_text}>34</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button}>
                    <Text>35</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={style.buttons}>
                <Text style={style.inner}>BUY NOW</Text>
            </TouchableOpacity>

            <Footer />


        </View>
    )
}

const style = StyleSheet.create({
    container: {
        // alignItems: 'center'
        // padding: 10,
        marginTop:30
    },
    wrapper: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(110, 149, 127, 0.2)',
        marginBottom: 30,
        alignItems:'center',
        paddingVertical:8,
        marginHorizontal:10
    },
    text: {
        fontWeight:"bold"
    },
    image: {
        width: 250,
        height: 250,
        marginVertical:20
    },
    click: {
        width: '25%',
        backgroundColor: 'fff',
        borderWidth: 0.2,
        borderColor:'red',
        borderRadius:50,
        paddingVertical: 4,
        alignItems: 'center',
        marginBottom: 30,
        marginLeft:'35%'
    },
    button_text: {
        color: 'red'
    },
    num: {
        flexDirection: 'row',
        marginBottom: 30,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:50
    },
    button: {
        width: '13%',
        borderColor: 'rgba(110, 149, 127, 0.2)',
        padding: 4,
        borderRadius: 40,
        borderWidth: 1,
        alignItems: 'center',
        marginRight:5
    },
    buttons: {
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius:30,
        padding:8,
        marginBottom:10,
        marginHorizontal:10
    },
    inner: {
        color: '#fff'
    }
})

export default description