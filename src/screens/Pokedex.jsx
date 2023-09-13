import {SafeAreaView, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import PokemonList from '../components/PokemonList'
import { limit } from '../api/APIfetch';
import fetchPokemonData from '../api/APIfetch';

const pArray = [];

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
    setPokemon([...pokemons, ...pArray])
  };

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons}/>
    </SafeAreaView>
  );
};