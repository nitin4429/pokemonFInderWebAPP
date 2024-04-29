import useDebounce from "../../hooks/useDebounce";
import "./Search.css"
function Search({updateSearchTerm}){
   const debouncecall = useDebounce((e) =>updateSearchTerm(e.target.value))
 return(
    <input
    id="Search-wrapper" 
    type = "text"
    placeholder="pokemon name..." 
    onChange={(e) =>debouncecall(e,'123')}
    />
 )
}
export default Search;

