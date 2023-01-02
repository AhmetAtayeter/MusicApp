import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Card.style"

const Card = ({data}) =>{

    return(
        <View style={styles.view1}>
            <View style={styles.view2}>
                <Image style={styles.image} source={{uri: data.imageUrl}}></Image>
            </View>
            <View style={styles.view3}>
                <View style={styles.view4}>
                    <Text style={styles.title}>{data.title}</Text>
                </View>
                <View style={styles.view5}>
                    <View style={styles.view6}>
                        <Text style={styles.artist}>{data.artist}</Text>
                        <Text style= {styles.year}>{data.year}</Text>
                    </View>
                    <View style={styles.view7}>
                        {data.isSoldOut && <Text style={styles.isSoldOut}>TÜKENDİ</Text>}
                        
                    </View>
                </View>
            </View>
        </View>
    )

}

export default Card;