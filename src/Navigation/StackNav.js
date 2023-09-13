import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Pokemon from "../screens/Pokemon";
import Pokedex from '../screens/Pokedex';

const Stack = createNativeStackNavigator();

export default function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MergePokedex" component={Pokedex} options={{title:'',headerShown:false}}/>
            <Stack.Screen name="MergePokemon" component={Pokemon} />
        </Stack.Navigator>
    );
}