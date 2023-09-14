import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList({pokemons, load}) {

  const nextLoad = () => {
    console.log('End reached')
  };

  return (
    <>
    <FlatList
    contentContainerStyle={styles.list}
    data={pokemons}
    numColumns={2}
    keyExtractor={(p) => String(p.id)}
    renderItem={({item}) => <PokemonCard data = {item}/>}
    onEndReached={nextLoad}
    onEndReachedThreshold={0.2}
    ListFooterComponent = {
      <ActivityIndicator size={'large'} style={styles.spinner} color={'#AEAEAE'}/>
    }
    />
    </>
  )
}

const styles = StyleSheet.create({
  list:{
    paddingHorizontal: 3
  },
  spinner:{
    marginTop:20
  }
})