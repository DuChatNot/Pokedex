import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import getColor from '../utils/getColorType';

export default function PokemonCard({data}) {

    const touchPokemon = () => {
        console.log(data.name)
    }
    const pokemonColor = getColor(data.type)
    const bgStyle = {backgroundColor: pokemonColor, ...styles.bgStyle}; // Merge de StyleSheet

return (
    <TouchableWithoutFeedback onPress={touchPokemon}>
        <View style={styles.card}>
            <View style={styles.in_card}>
                <View style={bgStyle}>
                    <Text style={styles.order}>#{`${data.order}`.padStart(3,0)}</Text>
                    <Image source={{uri: data.image}} style={styles.image}/>
                    <Text style={styles.name}>{data.name}</Text>
                </View>
            </View>
        </View>
        
    </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    card:{
        flex:1,
        padding: 2,
        margin: 2,
        height: 130,
        backgroundColor:'lightgray',
        borderRadius: 8
    },
    in_card: {
        flex: 1,
        padding: 5,
    },
    bgStyle:{
        flex: 1,
        padding: 10,
        borderRadius: 15,
    },

    order:{
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11
    },

    image:{
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 100,
        height: 100
    },

    name:{
        fontSize: 15,
        paddingTop: 15,
        color: '#fff',
        textTransform: 'capitalize'
    }
});