
import Pokemon from '../pokemon/pokemon.jsx';
import axios from 'axios';
import './pokemonList.css';
import usePokemonList from "../../hooks/usePokemonList.js";
function PokemonList(){
    const [pokedexListState,setpokedexListState] = usePokemonList(false);
    return(
        <div className="pokemon-list-wrapper">
           <h2 className="heading">Pokemon List</h2>
            <div className="pokemon-wrapper">
            {(pokedexListState.loading)?'Loading...': pokedexListState.pokemonList.map((p) =><Pokemon name={p.name} image={p.image} key={p.id} id={p.id}/>)}
            </div>
            <div className="controls">
            <button disabled={pokedexListState.prevurl==null} onClick={() =>{
                const urlToSet = pokedexListState.prevurl;
                setpokedexListState({...pokedexListState,pokedexurl: urlToSet})
                }}>Prev</button>
            <button disabled={pokedexListState.nexturl==null} onClick={() =>{
                const urlToSet = pokedexListState.nexturl;
                setpokedexListState({...pokedexListState,pokedexurl: urlToSet})
                }}>Next</button>
            </div>
        </div>
        )
}
export default PokemonList;