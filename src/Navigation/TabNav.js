import React from 'react';
import { Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import FavoritesScreen from '../screens/Favorites';
import PokedexScreen from '../screens/Pokedex';
import AccountScreen from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator>
        <Tab.Screen name ='Favorites' component={FavoritesScreen} options = {{
          tabBarIcon: ({color,size}) => (<Icon name='heart' color={color} size={size}/>)
        }}/>

        <Tab.Screen name='Pokedex' component={PokedexScreen} options={{
          tabBarLabel: 'Pokedex',
          tabBarIcon: () => renderPokeball()
        }}/>

        <Tab.Screen name='Account' component={AccountScreen} options={{
          tabBarLabel:'Profile',
          tabBarIcon: ({color, size}) => (<Icon name='user' color={color} size={size}/>)
        }}/>
    </Tab.Navigator>
  )
};


const renderPokeball = () => {
  return(
    <Image source={require('../assets/Pokeball.png')}
    style={{width: 50, height: 50, top: -5}}
    />
  );
};