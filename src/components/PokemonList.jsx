import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

export default function PokemonList({pokemons}) {
  return (
    <>
    <FlatList
    contentContainerStyle={styles.list}
    data={pokemons}
    keyExtractor={(p) => p.id}
    renderItem={({item}) => <Text>{item.name}</Text>}
    />
    </>
  )
}

const styles = StyleSheet.create({
  list:{
    paddingHorizontal: 5
  }
})