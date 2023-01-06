import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { goToPokemonDatails } from '../../Router/coodinator';
import { ImagePokemon, PId, PokeButtonContainer, PokeCardContainer, PokeInfoContainer, PokeTypesContainer } from './PokecardStyle';
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
  console.log(pokemon.spri)

 return (
   <PokeCardContainer>
     <PokeInfoContainer>
       <PId>#{pokemon && pokemon.id}</PId>
       <h1>{pokemon && pokemon.name}</h1>
       <PokeTypesContainer>
          {pokemon.types && pokemon.types.map((type)=>{
            return <span>{type.type.name} - </span>
          })}
        </PokeTypesContainer>
       </PokeInfoContainer>
          <ImagePokemon src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png"/>
          {/* <img src={pokemon.sprites.other[`official-artwork`].front_default}/> */}
     <PokeButtonContainer>
      <a href=""><strong>Capturar</strong></a>
      <button onClick={()=>{goToPokemonDatails(navigate, id)}}>Detalhes</button>
     </PokeButtonContainer>

   </PokeCardContainer>
  );
}