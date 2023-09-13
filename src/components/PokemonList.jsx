import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList({pokemons}) {

  return (
    <>
    <FlatList
    contentContainerStyle={styles.list}
    data={pokemons}
    numColumns={2}
    keyExtractor={(p) => String(p.id)}
    renderItem={({item}) => <PokemonCard data = {item}/>}
    />
    </>
  )
}

const styles = StyleSheet.create({
  list:{
    paddingHorizontal: 3
  }
})