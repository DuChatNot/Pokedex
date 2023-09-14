import { View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import getColor from '../utils/getColor';

export default function PokemonCard({data}) {

    const cardPressed = () => {
        alert(data.name)
    }

    const bkColor = getColor(data.type)
    const BK = {...styles.BK, backgroundColor: bkColor}

return (
    <TouchableWithoutFeedback onPress={cardPressed}>
        <View style={styles.mainContainer}>
            <View style={BK}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.order}>#{`${data.id}`.padStart(3,0)}</Text>
                <Image source={{uri:data.image}} style={styles.image}/>
            </View>
        </View>
    </TouchableWithoutFeedback>

)
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        height:140,
        margin: 3,
    },

    BK:{
        flex: 1,
        borderRadius: 10,
        padding: 10,
        height: 140
    },

    name:{
        fontSize: 15,
        textTransform: 'capitalize',
        color: '#fff'
    },

    order:{
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11
    },

    image:{
        flex:1,
        position: 'absolute',
        bottom: 2,
        right: 2,
        height: 110,
        width: 110
    }
})