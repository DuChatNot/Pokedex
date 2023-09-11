import {SafeAreaView, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import PokemonTemplate from './PokemonTemplate.js';

import fetchPokemonData from '../api/APIfetch.js';

const pArray = [];
export const limit = 20;

export default function PokedexScreen() {
  const [pokemons, setPokemon] = useState([]);
  useEffect(() => { 
    (async () => {
      await loadPokemon();
    })();
  },[])

  const loadPokemon = async () =>{ 
    const res = await fetchPokemonData();

    for (let i = 0; i<limit; i++){
      const pokemData = res.map(p => ({
        id: p.id,
        name: p.name,
        type: p.types[0].type.name,
        order: p.order,
        image: p.sprites.other[`official-artwork`].front_default
      }))
      pArray.push(pokemData[i]);
    }
    console.log('Array length: ' + pArray.length)
    console.log(pArray)
  };

  return (
    <SafeAreaView>
      <Text style={{fontSize:35}}>Pokedex Screen</Text>
      <PokemonTemplate />
      <Text>Data: </Text>
      <Text>{pArray[0]}</Text>
    </SafeAreaView>
  );
};