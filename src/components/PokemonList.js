import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList({pokemons}) {
  return (
    <>
    <FlatList
      contentContainerStyle={styles.flat}
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(p) =>String(p.id)}
      renderItem={({item}) => <PokemonCard data={item}/>} /*Es necesario utilizar la variable ITEM*/
    />
    </>
  )
}

const styles = StyleSheet.create({
  flat:{
    padding: 5,
  }
})