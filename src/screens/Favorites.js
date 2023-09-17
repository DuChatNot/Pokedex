import { SafeAreaView, Text, Button } from 'react-native'
import React from 'react'
import { getFavoritePokemon} from '../api/addFavFunction'

export default function FavoritesScreen() {
  
  const getfav = async () => {
    const response = await getFavoritePokemon();
    console.log(response)
  }

  return (
    <SafeAreaView>
      <Text>Favorites</Text>
      <Button title='Show' onPress={getfav}/>
    </SafeAreaView>
  )
}