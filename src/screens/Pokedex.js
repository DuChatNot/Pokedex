import {SafeAreaView, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import PokemonTemplate from './PokemonTemplate.js';
import { fetchPokemon, getPokemonApi} from '../api/dataFetch.js';

export default function PokedexScreen() {
  const [pokemons, setPokemon] = useState([]);

  const loadPokemon = async () =>{ // Recibe la informacion de la función importada getPokemonApi() (asíncrona)
    try{
      const res = await fetchPokemon(); // res = Objeto de objetos y propiedad 'results' que contiene la lista de pokemons + URLs
      const pArray = [];

      for await(const p of res.results){ // Ciclo 'for' asíncrono que recorre la lista de pokemons + urls
        const pokemonData = await getPokemonApi(p.url); // Hace fetch a la url de cada pokemon contenido en la lista 'res' y la guarda en la variable pokemonData
        pArray.push({ //Se guarda en el array 'pArray' la info seleccionada de la variable 'pokemonData'
          id: pokemonData.id,
          name: pokemonData.name,
          type: pokemonData.types[0].type.name,
          order: pokemonData.order,
          image: pokemonData.sprites.other[`official-artwork`].front_default
        })
      }
      console.log(pArray);
      setPokemon([...pokemons, ...pArray]);
    } catch (err){
      console.log(err)
    };
  };
  useEffect(() => { // Ejecuta su primer parámetro al renderizar el componente en el que está declarado (PokedexScreen en este caso)
    (async () => {
      await loadPokemon(); // Ejecuta la función asincrona loadPokemon() al renderizarse la pantalla de Pokedex (componente PokedexScreen)
    })();
  },[])
  
  return (
    <SafeAreaView>
      <Text style={{fontSize:35}}>Pokedex Screen</Text>
      <PokemonTemplate />
    </SafeAreaView>
  );
};