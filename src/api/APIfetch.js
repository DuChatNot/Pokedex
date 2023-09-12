const API = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
export const limit = 20


export default async function fetchPokemonData () {

    const fetchData = async (url) => {
        const d = await fetch(url);
        const data = await d.json();
        return data;
    }

    const urlList = [];
    const response = await fetch(API);
    const res = await response.json();
    const results = res.results
    for (const p of results){
        const url = p.url
        urlList.push(url);
    };

    const pokemData = [];

    for(let i = 0; i<limit; i++)
    {
        const data = await fetchData(urlList[i]);
        pokemData.push(data);
    }
    return pokemData;
};
