import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { goToPokemonDatails } from '../../Router/coodinator';
import { ImagePokemon, PId, PokeButtonContainer, PokeCardContainer, PokeDetailsContainer, PokeInfoContainer, PokeTypesContainer, ADetails, ButtonDetails } from './PokecardStyle';
import {PokemonsContext} from '../../Global/GlobalContext'
import axios from 'axios';
import { pokemonMock } from '../../constants/contanst';

export default function PokeCard(props) {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname)

  const context = useContext(PokemonsContext)
  const {pokedex, setPokedex} = context

  const [pokemonList, setPokemonList] = useState(pokemonMock)
  
  useEffect(()=> {
    RequestPokemonListDetail()
  }, [])

  const RequestPokemonListDetail = async ()=>{
    await axios
      .get(props.pokemonInitital.url)
      .then((resp)=>{
        setPokemonList(resp.data)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  const addPokemonFromPokedex = (pokemonToAdd)=>{
    if (!pokedex.includes(pokemonToAdd)) {
      setPokedex([...pokedex, pokemonToAdd])
      //MENSAGEM DE POKEMON FOI CAPTURADO
    }
    // MENSAGEM DE ERRO
  }

  const removePokemonFromPokedex = (pokemonToRemove)=>{
    const newPokedex = pokedex.filter(pokemon => pokemon.name !== pokemonToRemove.name);
    setPokedex(newPokedex)
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

      {location.pathname === "/" ? 
        <ButtonDetails onClick={()=>{addPokemonFromPokedex(props.pokemonInitital)}}>Capturar</ButtonDetails> : 
        <ButtonDetails style={{backgroundColor: '#FF6262', color: "#FFFFFF"}} onClick={()=>{removePokemonFromPokedex(props.pokemonInitital)}}>Excluir</ButtonDetails> 
      }
     </PokeButtonContainer>
   </PokeCardContainer>
  );
}