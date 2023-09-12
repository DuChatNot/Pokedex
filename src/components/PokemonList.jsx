import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function PokemonList({pokemons}) {
  return (
    <>
    <FlatList 
    data={pokemons}
    keyExtractor={(p) => p.id}
    renderItem={({item}) => <Text>{item.name}</Text>}
    />
    </>
  )
}