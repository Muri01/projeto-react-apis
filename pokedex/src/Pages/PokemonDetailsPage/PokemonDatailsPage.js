import React, { useContext, useEffect, useState } from 'react';
import { TitleDetail, DetailsPage, DetailsContainer, ImgBox, ImgDetail, BaseStatus, PokemonData, ImagePokebola, Moves,ImagePokemonBig, ImagePokemonBox, ImagePokemons  } from './PokemonDatailsStyles';
import { PokemonDetailsMock } from '../../constants/contanst';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { PokemonsContext } from '../../Global/GlobalContext';
import { returnTypes } from '../../utils/returnTypes';
import TypesCard from '../../Components/Types.js/TypesCard';
import { PokeTypesContainer } from '../../Components/PokeCard/PokecardStyle';
import { MovesCard } from '../../Components/MovesCard/MovesCard';
import pokebola from '../../assets/poke-background-datails.png'

export default function PokemonDetailsPage() {

  const [PokemonDetails, setPokemonDetails] = useState(PokemonDetailsMock)
  const location = useLocation()

  const context = useContext(PokemonsContext)
  const {pokedex} = context

  console.log(pokedex)

  useEffect(()=>{
    RequestPokemonDetails()
  },[])
  
  // Pegar o id do pokemon escolhido pelo ultimo caracter da URL. 
  // Se for mais que 10 pega os dois ultimos caracteres da URL
  const getIdByURL = ()=>{
    let idPokemon
    if(location.pathname.length === 10){
      idPokemon = location.pathname[location.pathname.length - 1]
    } else if(location.pathname.length > 10){
      const lastNumber = location.pathname[location.pathname.length - 1]
      idPokemon = location.pathname[location.pathname.length - 2] + lastNumber
    }
    return idPokemon
  }

  const RequestPokemonDetails =  () => {
     axios
      .get(`https://pokeapi.co/api/v2/pokemon/${getIdByURL()}`)
      .then((resp)=>{
        setPokemonDetails(resp.data)
      })
      .catch((err)=>{
        console.log(err)
      })

  }

  const sumStatus = ()=>{
    let total = 0
    for (let value of PokemonDetails.stats) {
      total =total + value.base_stat
    }
    return total
  }


 return (
   <DetailsPage>
    <TitleDetail>Detalhes</TitleDetail>
    
    <DetailsContainer color={returnTypes(PokemonDetails.types[0].type.name).color}>
      <ImgDetail>
        <ImgBox>
          <ImagePokemons src={PokemonDetails.sprites.front_default}/>
        </ImgBox>
        <ImgBox>
          <ImagePokemons src={PokemonDetails.sprites.back_default}/>
        </ImgBox>
      </ImgDetail>
      <BaseStatus>
          <h2>Base stats</h2>
          <p>{PokemonDetails.stats[0].stat.name.toUpperCase()}: {PokemonDetails.stats[0].base_stat}</p>
          <p>{PokemonDetails.stats[1].stat.name}: {PokemonDetails.stats[1].base_stat}</p>
          <p>{PokemonDetails.stats[2].stat.name}: {PokemonDetails.stats[2].base_stat}</p>
          <p>{PokemonDetails.stats[3].stat.name}: {PokemonDetails.stats[3].base_stat}</p>
          <p>{PokemonDetails.stats[4].stat.name}: {PokemonDetails.stats[4].base_stat}</p>
          <p>{PokemonDetails.stats[5].stat.name}: {PokemonDetails.stats[5].base_stat}</p>
          <p>Total {sumStatus()}</p>
      </BaseStatus>
      <PokemonData>
        {PokemonDetails.id < 10 ? <p>#0{PokemonDetails.id}</p>:<p>#{PokemonDetails.id}</p>}
        <h1>{PokemonDetails.name}</h1>
        <PokeTypesContainer>
          {PokemonDetails.types && PokemonDetails.types.map((type) => <TypesCard name={type.type.name}/>)}
        </PokeTypesContainer>
        <Moves>
          <h2>Moves:</h2>
          {PokemonDetails.moves.slice(0, 4).map((move)=> <MovesCard name = {move.move.name}/>)}
        </Moves>
      </PokemonData>
      <ImagePokemonBox>
        <ImagePokebola src={pokebola} alt="backgroud de pokebola"/>
        <ImagePokemonBig src={PokemonDetails.sprites.other.home.front_default}/>
      </ImagePokemonBox>
    </DetailsContainer>
   </DetailsPage>
  );
}