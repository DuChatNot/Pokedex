import { ScrollView, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { pokemonDetails } from '../api/dataFetch';
import { Icon } from 'react-native-vector-icons/FontAwesome5';

import Header from '../components/PokemonStats/Header';
import Type from '../components/PokemonStats/Type';
import Stats from '../components/PokemonStats/Stats';

export default function Pokemon(props) { //route = propiedad pertenenciente al objeto (pokemon) proveniente de la API

  const {navigation, route:{params}} = props;
  const [pData, setpData] = useState(null)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      /*headerLeft: () => (
        <Icon name='arrow-left' color="#fff" size={20}
        style={{marginLeft: 20}}
        onPress={() => navigation.goBack}
        />)*/
    })
  },[navigation, params])



  useEffect(() => {
    (async ()=> {
      try{
        const response = await pokemonDetails(params.id)
        setpData(response);
      } catch(err){navigation.goBack();}
    })();
  }, [params])

    if(!pData) return null;
  return (
    <ScrollView>
      <Header name={pData.name} order={pData.id} 
      image={pData.sprites.other[`official-artwork`].front_default} 
      type={pData.types[0].type.name}/>

      <Type type={pData.types}/>
      <Stats stats={pData.stats}/>
    </ScrollView>
  )
};