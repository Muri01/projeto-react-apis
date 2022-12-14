import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalStyled } from "./GlobalStyled";
import PokedexListPage from "./Pages/PokedexListPage/PokedexListPage";
import PokedexPage from "./Pages/PokedexPage/PokedexPage";
import PokemonDetailsPage from "./Pages/PokemonDetailsPage/PokemonDatailsPage";
import Router from "./Router/Router";

function App() {
  const [pokemons, setPokemons] = useState([])

  const getPokemons = ()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then((resp)=>{
      // console.log(resp.data.results[0])
      setPokemons(resp.data.results)
      // console.log(pokemons)
      console.log("test", pokemons[0].url)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

 useEffect(()=>{
  getPokemons()
  // teste()
  },[])

//  useEffect(()=>{
//   teste()
//   },[pokemons])


    return (
      <div >
        <GlobalStyled />
        <Router/>
        {/* <PokedexListPage/>
        <PokedexPage/>
        <PokemonDetailsPage/> */}
      </div>
  );
}

export default App;
