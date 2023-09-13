import {API} from '../utils/constants';

export async function fetchPokemon (nextUrl) {
    try {                             
        
        const url = `${API}/pokemon?limit=20&offset=0`;
        const response = await fetch(nextUrl || url);
        const res = await response.json(); // Objeto de objetos con propiedad 'results' que contiene la lista de pokemons + url
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