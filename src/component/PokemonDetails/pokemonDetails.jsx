
import { useParams } from "react-router-dom";
import axios from "axios";
import './pokemonDetails.css';
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails({pokemonName}){
    const {id} = useParams();
    const [pokemon] = usePokemonDetails(id,pokemonName);
    return(
        <>
       <div className="whole-pokemon">
       <div className="pokemon-details-wrapper">
            <img className="pokemon-details-image" src={pokemon.image} alt="nhi hua " />
            <div className="pokemon-details-name">{pokemon.name}</div>
            <div className="weight">Weight:{pokemon.weight}</div>
            <div className="height">Height:{pokemon.height}</div>
            <div className="types">
                {pokemon.types && pokemon.types.map((t) => <div className="get1" key={t}>{t}</div>)}</div>
        </div>
       {
        pokemon.types && pokemon.similarState &&
        <div className="samePokemon-wrap">
            more {pokemon.types[0]} type pokemons
            <ul>
                { pokemon.similarState.map((p) =><li key={p.pokemon.url}>{p.pokemon.name}</li>)}
            </ul>
        </div>
       }
       </div>
        </>
    )
}
export default PokemonDetails;