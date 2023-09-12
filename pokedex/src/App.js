import { useState } from "react";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./Router/Router";
import {PokemonsContext} from "./Global/GlobalContext"
import {useRequest} from './hook/useRequest'

function App() {

  const pokedexLocalString = localStorage.getItem("PokemonsCapturados");
  const pokedexLocal = JSON.parse(pokedexLocalString)

  // console.log(pokedexLocal)
  
  const [pokemonsInitial, setPokemonsInitial] = useRequest([])
  const [pokedex, setPokedex] = useState([])
  // console.log(pokemonsInitial)
  // console.log(pokedex)



  const context = {
    pokemonsInitial,
    setPokemonsInitial,
    pokedex,
    setPokedex
  }

  return (
    <PokemonsContext.Provider value={context} >
        <GlobalStyled />
        <Router/>
    </PokemonsContext.Provider>
);
}

export default App;
