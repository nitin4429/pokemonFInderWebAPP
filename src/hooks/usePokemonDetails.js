import usePokemonList from "./usePokemonList";
import { useState,useEffect } from "react";
import axios from "axios";
function usePokemonDetails(id,pokemonName){
    const [pokemon,setPokemon] = useState({});
    async function downloads(){
        try{
            let response;
            if(pokemonName){
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); 
            }
            else{
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); 
            }
            
            const pokemonSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name:""}`)
            setPokemon({name: response.data.name,
                image:response.data.sprites.other.dream_world.front_default,
                weight:response.data.weight,
                height:response.data.height,
                types: response.data.types.map((t) => t.type.name),
                similarState : pokemonSameTypes.data.pokemon.slice(0,5),
            })
            setpokedexListState({...pokedexListState, type:response.data.types ? response.data.types[0].type.name:""});

}catch(error){
    console.log('something went wrong')
}
}
const [pokedexListState,setpokedexListState]= useState({});

useEffect(() =>{
    downloads();
    console.log("list",pokemon.types,pokedexListState);
},[]);
return[pokemon]
}
export default usePokemonDetails;