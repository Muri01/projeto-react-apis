import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToPokemonDatails } from '../../Router/coodinator';
import { ImagePokemon, PId, PokeButtonContainer, PokeCardContainer, PokeDetailsContainer, PokeInfoContainer, PokeTypesContainer, ADetails, ButtonDetails, PokeImagemContaner, ImagePokebola, Name } from './PokecardStyle';
import {PokemonsContext} from '../../Global/GlobalContext'
import axios from 'axios';
import { pokemonMock } from '../../constants/contanst';
import pokebola from '../../assets/poke-backgroud-card.png'
import TypesCard from '../Types.js/TypesCard';
import { returnTypes } from '../../utils/returnTypes';

export default function PokeCard(props) {
  const navigate = useNavigate()

  const context = useContext(PokemonsContext)
  const {pokedex, setPokedex} = context

  const [pokemonList, setPokemonList] = useState(pokemonMock)

  useEffect( ()=> {
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

  const getIdByURLAPI = (pokemon)=>{
    let idPokemon
    if(pokemon.url.length === 36){
      idPokemon = pokemon.url[pokemon.url.length - 2]
    } else if(pokemon.url.length > 36){
      const lastNumber = pokemon.url[pokemon.url.length - 2]
      idPokemon = pokemon.url[pokemon.url.length - 3] + lastNumber
    }
    return idPokemon
  }

  const addPokemonFromPokedex = (pokemonToAdd)=>{
    if (!pokedex.includes(pokemonToAdd)) {

      const idPokemon = getIdByURLAPI(pokemonToAdd)
      //Guardar no local Storage
      const pokedexLocalString = localStorage.getItem("PokemonsCapturados");
      const pokedexLocal = JSON.parse(pokedexLocalString)
      
      if(!pokedexLocal){
        const pokemonLocal = JSON.stringify([idPokemon])
        localStorage.setItem("PokemonsCapturados", pokemonLocal);
      } else{
        pokedexLocal.push(idPokemon)
        const newPokedex = JSON.stringify(pokedexLocal)
        localStorage.setItem("PokemonsCapturados", newPokedex);
      }

      setPokedex([...pokedex, pokemonToAdd])
      alert("POKEMON CAPTURADO")
    }
    // INSERIR MENSAGEM DE ERRO, POKEMON JA FOI CAPTURADO
    // alert("Pokemons já foi capturado")
  }

  const removePokemonFromPokedex = (pokemonToRemove)=>{

    const idPokemon = getIdByURLAPI(pokemonToRemove)
    const pokedexLocalString = localStorage.getItem("PokemonsCapturados");
    const pokedexLocal = JSON.parse(pokedexLocalString)
    
    if(pokedexLocal){
      const newPokedex = JSON.stringify(pokedexLocal.filter(pokemon => pokemon !== idPokemon))
      localStorage.setItem("PokemonsCapturados", newPokedex);
    }
    const newPokedex = pokedex.filter(pokemon => pokemon.name !== pokemonToRemove.name);
    setPokedex(newPokedex)
  }

  const ToBeUpeerCase = (string) => {
    const newString = pokemonList.name[0].toUpperCase() + pokemonList.nome.substring(1)
    return newString
  }
  console.log(pokemonList)

 return (
   <PokeCardContainer color={returnTypes(pokemonList.types[0].type.name).color}>
     <PokeInfoContainer>
          <PId><b>#0{pokemonList && pokemonList.id}</b></PId>
          {/* <Name>{pokemonList.name ? (pokemonList.name[0].toUpperCase() + pokemonList.nome.substring(1)) : "..."} </Name> */}
          <Name>{pokemonList.name} </Name>
          <PokeTypesContainer>
              {pokemonList.types && pokemonList.types.map((type)=>{
                return <TypesCard name={type.type.name}/> 
              })}
          </PokeTypesContainer>

     </PokeInfoContainer>

     <PokeImagemContaner>
        <ImagePokebola src={pokebola} alt="backgroud de pokebola"/>
        <ImagePokemon src={pokemonMock.sprites.other.home.front_default && pokemonList.sprites.other["official-artwork"]?.front_default}/>
     </PokeImagemContaner>
       
     <PokeButtonContainer>
      <ADetails href="" onClick={()=>{goToPokemonDatails(navigate, pokemonList.id)}}>Detalhes</ADetails>

      {!pokedex.includes(props.pokemonInitital) ? 
        <ButtonDetails onClick={()=>{addPokemonFromPokedex(props.pokemonInitital)}}>Capturar!</ButtonDetails> : 
        <ButtonDetails style={{backgroundColor: '#FF6262', color: "#FFFFFF"}} onClick={()=>{removePokemonFromPokedex(props.pokemonInitital)}}>Excluir</ButtonDetails> 
      }
     </PokeButtonContainer>
   </PokeCardContainer>
  );
}