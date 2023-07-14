import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToPokemonDatails } from '../../Router/coodinator';
import { ImagePokemon, PId, PokeButtonContainer, PokeCardContainer, PokeDetailsContainer, PokeInfoContainer, PokeTypesContainer, ADetails, ButtonDetails } from './PokecardStyle';
import {PokemonsContext} from '../../Global/GlobalContext'
import axios from 'axios';

export default function PokeCard(props) {
  const id = 1
  const navigate = useNavigate()
  const context = useContext(PokemonsContext)
  const {pokedex, setPokedex} = context

  const [pokemonList, setPokemonList] = useState({})

  // const RequestPokemonListDetail = ()=>{}

  // const RequestPokedexListDetail = ()=>{}
  
  useEffect(()=> {
    axios
      .get(props.pokemonInitital.url)
      .then((resp)=>{
        // console.log(resp.data)
        setPokemonList(resp.data)
        // console.log(pokemon.sprites.other[`official-artwork`].front_default)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[props, pokedex])
  console.log(pokemonList.sprites)

 return (
   <PokeCardContainer>
     <PokeInfoContainer>
        <PokeDetailsContainer>
          <PId>#{pokemonList && pokemonList.id}</PId>
          <h1>{pokemonList && pokemonList.name}</h1>
          <PokeTypesContainer>
              {pokemonList.types && pokemonList.types.map((type)=>{
                return <span>{type.type.name} </span>
              })}
          </PokeTypesContainer>
        </PokeDetailsContainer>

       {pokemonList === undefined && <ImagePokemon src={pokemonList.sprites.other.home.front_default}/>}



        {/* <ImagePokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png"/> */}
      </PokeInfoContainer>
       
     <PokeButtonContainer>
      <ADetails style={{ fontSize: 10}} href="" onClick={()=>{goToPokemonDatails(navigate, id)}}>Detalhes</ADetails>
      <ButtonDetails onClick={()=>{setPokedex([...pokedex, props.pokemonInitital])}}>Capturar</ButtonDetails>
     </PokeButtonContainer>
   </PokeCardContainer>
  );
}