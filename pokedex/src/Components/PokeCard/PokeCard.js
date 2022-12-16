import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { goToPokemonDatails } from '../../Router/coodinator';
import { PokeCardContainer } from './PokecardStyle';
import {PokemonsContext} from '../../Global/GlobalContext'
import axios from 'axios';
import { URL_BASE } from '../../constants/contanst';

export default function PokeCard(props) {
  const id = 1
  const navigate = useNavigate()
  const params = useParams()
  const context = useContext(PokemonsContext)

  const [pokemon, setPokemon] = useState({})

  useEffect(()=> {
    axios
      .get(props.pokemonInitital.url)
      .then((resp)=>{
        // console.log(resp.data)
        setPokemon(resp.data)
        // console.log(pokemon.sprites.other[`official-artwork`].front_default)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])

 return (
   <PokeCardContainer>
     <div>
       <p>#{pokemon && pokemon.id}</p>
       <p>{pokemon && pokemon.name}</p>

       {pokemon.types && pokemon.types.map((type)=>{
         return <span>{type.type.name} - </span>
       })}
       <img src={pokemon.sprites.other[`official-artwork`].front_default}/>
     </div>
     <div>
      <button>Capturar</button>
      <button onClick={()=>{goToPokemonDatails(navigate, id)}}>Detalhes</button>
     </div>

   </PokeCardContainer>
  );
}