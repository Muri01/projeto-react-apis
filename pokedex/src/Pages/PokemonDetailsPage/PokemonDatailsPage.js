import React, { useEffect, useState } from 'react';
import { DetailsContainer, ImgBoxFront, ImgBoxBack, BaseStatus, PokemonData,Moves, ImagePokemon  } from './PokemonDatailsStyles';
import Bulbasaur from '../../images/Bulbasaur.png'
import { PokemonDetailsMock } from '../../constants/contanst';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function PokemonDetailsPage() {

  const [PokemonDetails, setPokemonDetails] = useState(PokemonDetailsMock)
  const location = useLocation()

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

  const RequestPokemonDetails = async () => {
    await axios
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
   <>
   <h1>Detalhes do pokemon</h1>
    <DetailsContainer>
      <ImgBoxFront>
      <img src={PokemonDetails.sprites.front_default}/>
      </ImgBoxFront>
      <ImgBoxBack>
        <img src={PokemonDetails.sprites.back_default}/>
      </ImgBoxBack>
      <BaseStatus>
          <h2>Base Status</h2>
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
        <p>{PokemonDetails.name}</p>
        {PokemonDetails.types.map((type)=> <p>{type.type.name}</p>)}
      </PokemonData>
      <Moves>
        <h2>Moves:</h2>
        {PokemonDetails.moves.slice(0, 4).map((move)=> <p>{move.move.name}</p>)}
      </Moves>
      <ImagePokemon>
        <img src={PokemonDetails.sprites.other.home.front_default}/>
      </ImagePokemon>
    </DetailsContainer>
   </>
  );
}