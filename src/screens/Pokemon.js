import { View, Text } from 'react-native';
import React from 'react';

export default function Pokemon({navigation, route}) { //route propiedad pertenenciente al objeto (pokemon) proveniente de la API

  console.log(route)
  return (
    <View>
      <Text>Pokemon Details</Text>
    </View>
  )
};