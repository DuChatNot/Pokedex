import { View, Text, } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import PokedexScreen from '../screens/Pokedex'
import PokemonTemplate from '../screens/PokemonTemplate'

const Stack = createNativeStackNavigator();

export default function PokedexStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='MergePokedex' component={PokedexScreen} options={{title:'', headerShown:false}}/>
            <Stack.Screen name='MergePokemonTemplate' component={PokemonTemplate} />
        </Stack.Navigator>
    );
};