import { useState } from "react";
import Search from "../Search/Search";
import PokemonList from "../pokemonList/PokemonList";
import "./pokedex.css";
import PokemonDetails from "../PokemonDetails/pokemonDetails";
function Pokedex(){
    const [searchterm,setSearchterm] = useState('');
 return(
    <div className="pokedex-wrapper">
      
        <Search updateSearchTerm={setSearchterm}/>
        {searchterm}
       {(!searchterm)? <PokemonList /> : <PokemonDetails key={searchterm} pokemonName={searchterm}/>}
    </div>
 )
}
export default Pokedex;