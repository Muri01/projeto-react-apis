import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./Router/Router";
import {PokemonsContext} from "./Global/GlobalContext"

function App() {
  const [pokemons, setPokemons] = useState([{name: "bulbasaur", id:"001"}])

  const getPokemons = ()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then((resp)=>{
      // console.log(resp.data.results[0])
      setPokemons(resp.data.results)
      // console.log(pokemons)
      // console.log("test", pokemons[0].url)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const context = {
    pokemons: pokemons,
    setPokemons: setPokemons
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
