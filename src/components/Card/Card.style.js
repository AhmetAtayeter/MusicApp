import React from "react";
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    view1:{
        backgroundColor: 'blue',
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height / 7,
        margin: 5,
        flexDirection: 'row'
    },
    view2: {
        backgroundColor: 'white',
        flex: 3
    },
    view3: {
        backgroundColor: 'yellow',
        flex: 7
    },
    view4: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'flex-end'
    },
    view5: {
        backgroundColor: 'magenta',
        flex: 1,
        flexDirection: 'row'
    },
    view6: {
        backgroundColor: 'white',
        flex: 7,
        flexDirection: 'row'
    },
    view7: {
        backgroundColor: 'white',
        flex: 3,
        alignItems: 'center'
    },
    image: {
        flex: 1,
        borderRadius: 50,
        margin: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    artist: {
        fontSize: 12,
        marginRight: 5
    },
    year: {
        fontSize: 10,
        color: 'gray'
    },
    isSoldOut: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        color: 'red',
        fontSize: 12,
        padding: 3
    }
})