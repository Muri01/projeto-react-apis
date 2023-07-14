import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToPokemonDatails } from '../../Router/coodinator';
import { ImagePokemon, PId, PokeButtonContainer, PokeCardContainer, PokeDetailsContainer, PokeInfoContainer, PokeTypesContainer, ADetails, ButtonDetails } from './PokecardStyle';
import {PokemonsContext} from '../../Global/GlobalContext'
import axios from 'axios';

export default function PokeCard(props) {
  const navigate = useNavigate()
  const context = useContext(PokemonsContext)
  const {pokedex, setPokedex} = context

  const pokemonMock = {
    id: "",
    name: "",
    types: [{type: {name: "", url:""}}, {type: {name: "", url:""}}],
    sprites: {
      other:{
        home:{
          // front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
          front_default:"https://media.tenor.com/8sTMqGWjYAQAAAAC/ball-pokemon.gif"
        }
      }
    }
  }
  const [pokemonList, setPokemonList] = useState(pokemonMock)
  
  useEffect(()=> {
    RequestPokemonListDetail()
  },[])

  const RequestPokemonListDetail = async ()=>{
    await axios
      .get(props.pokemonInitital.url)
      .then((resp)=>{
        // console.log(resp.data)
        setPokemonList(resp.data)
        // console.log(pokemon.sprites.other[`official-artwork`].front_default)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

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

       <ImagePokemon src={pokemonList.sprites.other.home.front_default}/>
      </PokeInfoContainer>
       
     <PokeButtonContainer>
      <ADetails style={{ fontSize: 10}} href="" onClick={()=>{goToPokemonDatails(navigate, pokemonList.id)}}>Detalhes</ADetails>
      <ButtonDetails onClick={()=>{setPokedex([...pokedex, props.pokemonInitital])}}>Capturar</ButtonDetails>
     </PokeButtonContainer>
   </PokeCardContainer>
  );
}