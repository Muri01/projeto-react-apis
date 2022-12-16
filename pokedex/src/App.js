import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./Router/Router";
import {PokemonsContext} from "./Global/GlobalContext"
import {useRequest} from './hook/useRequest'

function App() {
  // const [pokemons, setPokemons] = useState([{name: "bulbasaur", id:"001"}])

  // const getPokemons = ()=>{
  //   axios.get("https://pokeapi.co/api/v2/pokemon")
  //   .then((resp)=>{
  //     // console.log(resp.data.results[0])
  //     setPokemons(resp.data.results)
  //     // console.log(pokemons)
  //     // console.log("test", pokemons[0].url)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // }

  const [pokemonsInitial, setPokemonsInitial] = useRequest([])
  
  const context = {
    pokemonsInitial: pokemonsInitial,
    setPokemonsInitial: setPokemonsInitial,
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
