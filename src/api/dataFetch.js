import {API} from '../utils/constants';

export async function fetchPokemon () { // Hace fetch a un array de objetos, cada objeto tiene propiedades, entre ellas 'results' la cual es un array de objetos tipo {name: 'aaa', url: 'https://.....'}
    try {                              // La URL contenida tiene toda la información de cada pokemon
        const url = `${API}/pokemon?limit=20&offset=0`;
        const response = await fetch(url);
        const res = await response.json(); // Objeto con una propiedad 'results' que contiene la lista de pokemons + url
        return res;
    } catch (err) {
        throw err;
    }
};

export async function getPokemonApi(url) { // Hace fetch a una URL dada
    try{
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } 
    catch (err){
        throw err
    }
}