import { useEffect,useState } from "react";
import axios from "axios";
function usePokemonList(){
    const [pokedexListState,setpokedexListState] = useState({
        pokemonList:[],
        loading:true,
        pokedexurl:"https://pokeapi.co/api/v2/pokemon",
        nexturl:'',
        prevurl:'',
    });
    async function downloadpokemon(){
              // setloading(true);
        setpokedexListState((state) => ({...state,loading:true}));
        const response = await axios.get(pokedexListState.pokedexurl);
        console.log(response)//This download list of 20 pokemons
        const pokemonResult = response.data.results;
        console.log('rrrrrr',pokemonResult)//we get the array of pokemon from results
        console.log( "response is",response.data,response.data.pokemon);
        // setnexturl(response.data.next);
        // setprevurl(response.data.previous);
        setpokedexListState((state) => ({...state,nexturl:response.data.next,prevurl:response.data.previous}));

        //iterating over the array of pokemon,and using their url , to create an array of promises
        //that will download those 20 pokemons
            const pokemonListPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url));

            //passing the promises array in axios.all
            const pokemonData = await axios.all(pokemonListPromise);
            console.log('pppp',pokemonData)
            const res = pokemonData.map((pokedata) =>{
                const pokemon = pokedata.data;
                console.log(pokemon)
                return{
                    id: pokemon.id,
                    name: pokemon.name,
                    image: (pokemon.sprites.other)? pokemon.sprites.other.dream_world.front_default :  pokemon.sprites.other.back_shiny,
                    types: pokemon.types
                } 
           
        });
        console.log(res);
        // setpokemonList(res);
        setpokedexListState((state) =>({...state,pokemonList:res , loading:false}));
        // setloading(false);
    }

    useEffect(() =>{
        downloadpokemon();
    },[pokedexListState.pokedexurl]);
    return[pokedexListState,setpokedexListState];
}

export default usePokemonList;