import { useEffect, useState } from "react";
import { URL_BASE } from '../constants/contanst';
import axios from "axios";

export const useRequest= (stateInitial,pokeLocal)=> {
    const [pokemonsInitial, setPokemonsInitial] = useState(stateInitial)

    useEffect(()=>{
        axios
            .get(`${URL_BASE}/pokemon/`)
            .then((resp)=>{
                setPokemonsInitial(resp.data.results)
                // const pokedex = resp.data.results.filter((result, indice)=> pokeLocal.indexOf(indice) !== -1)
                // console.log(pokedex)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

 return [pokemonsInitial,setPokemonsInitial]
}

// export const usePokedexLocal = (pokedexLocal) =>{
//     useEffect(()=>{
//         pokedexLocal.map((numPokemon)=>{
//             axios
//             .get(`${URL_BASE}/pokemon/`)
//             .then((resp)=>{
//                 setPokemonsInitial(resp.data.results)
//             })
//             .catch((err)=>{
//                 console.log(err)
//             })
//         })
//     },[])
// }


// const RequestPokemonDetails = async () => {
//     await axios
//       .get(`https://pokeapi.co/api/v2/pokemon/${getIdByURL()}`)
//       .then((resp)=>{
//         setPokemonDetails(resp.data)
//       })
//       .catch((err)=>{
//         console.log(err)
//       })

//   }