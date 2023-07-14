import { useState } from "react";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./Router/Router";
import {PokemonsContext} from "./Global/GlobalContext"
import {useRequest} from './hook/useRequest'

function App() {

  const [pokemonsInitial, setPokemonsInitial] = useRequest([])
  const [pokedex, setPokedex] = useState([])
  
  const context = {
    pokemonsInitial,
    setPokemonsInitial,
    pokedex,
    setPokedex
  }
//  useEffect(()=>{
//     getPokemons()
//   },[])


    return (
      <PokemonsContext.Provider value={context} >
          <GlobalStyled />
          <Router/>
      </PokemonsContext.Provider>
  );
}

export default App;
