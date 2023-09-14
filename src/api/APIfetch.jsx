import React, { useState }from "react";
const API = `https://pokeapi.co/api/v2`;
export const limit = 20


export default async function fetchPokemonData () {

    const fetchData = async (url) => {
        const d = await fetch(url);
        const data = await d.json();
        return data;
    }

    const urlList = [];
    const url = `${API}/pokemon?limit=${limit}&offset=0`
    const response = await fetch(url);
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
    setRealI(realI+=20)
    return pokemData;
};
