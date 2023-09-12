import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

export default function PokemonList({pokemons}) {
  return (
    <>
    <FlatList
      contentContainerStyle={styles.flat}
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(p) =>String(p.id)}
      renderItem={({item}) => <Text>{item.name}</Text>} /*Es necesario utilizar la variable ITEM*/
    />
    </>
  )
}

const styles = StyleSheet.create({
  flat:{
    paddingHorizontal: 5
  }
})