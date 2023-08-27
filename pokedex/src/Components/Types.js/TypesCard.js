import React, { useContext, useEffect, useState } from 'react';
import { ImagePokemon, PId, PokeButtonContainer, PokeCardContainer, PokeDetailsContainer, PokeInfoContainer, PokeTypesContainer, ADetails, ButtonDetails, PokeImagemContaner, ImagePokebola, Name, ImageType } from './TypesCardStyle';
import {PokemonsContext} from '../../Global/GlobalContext'
import { returnTypes } from '../../utils/returnTypes';
import  Poison from "../../assets/poison.png"
import  Grass from "../../assets/grass.png"
import  Fire from "../../assets/fire.png"
import  Flying from "../../assets/flying.png"
import  Water from "../../assets/water.png"
import  Bug from "../../assets/bug.png"
import  Normal from "../../assets/normal.png"
import  Dark from "../../assets/dark.png"
import  Dragon from "../../assets/dragon.png"
import  Electric from "../../assets/electric.png"
import  Fairy from "../../assets/fairy.png"
import  Fighting from "../../assets/fighting.png"
import  Ghost from "../../assets/ghost.png"
import  Steel from "../../assets/steel.png"
import  Rock from "../../assets/rock.png"
import  Psychic from "../../assets/psychic.png"
import  Ice from "../../assets/ice.png"
import  Ground from "../../assets/ground.png"



export default function TypesCard(props) {
 
  const [typeCard, setTypeCard]=useState("")

  useEffect(()=>{
    returnTypes(props.name)
  },[props])

  const returnTypes = (type)=>{
    switch (type){
        case "poison":
            setTypeCard(Poison)
            return typeCard
        case "grass":
            setTypeCard(Grass)
            return typeCard
        case "fire":
            setTypeCard(Fire)
            return typeCard
        case "flying":
            setTypeCard(Flying)
            return typeCard
        case "water":
            setTypeCard(Water)
            return typeCard
        case "bug":
            setTypeCard(Bug)
            return typeCard
        case "normal":
            setTypeCard(Normal)
            return typeCard
        case "dark":
            setTypeCard(Dark)
            return typeCard
        case "dragon":
            setTypeCard(Dragon)
            return typeCard
        case "electric":
            setTypeCard(Electric)
            return typeCard
        case "fairy":
            setTypeCard(Fairy)
            return typeCard
        case "fighting":
            setTypeCard(Fighting)
            return typeCard
        case "ghost":
            setTypeCard(Ghost)
            return typeCard
        case "ground":
            setTypeCard(Ground)
            return typeCard
        case "ice":
            setTypeCard(Ice)
            return typeCard
        case "psychic":
            setTypeCard(Psychic)
            return typeCard
        case "rock":
            setTypeCard(Rock)
            return typeCard
        case "steel":
            setTypeCard(Steel)
            return typeCard
        default:
      return Ghost;
    }
  }

 return (
  <PokeCardContainer colorContainer={props.name}>
    <ImageType src={ typeCard} alt={`imagem do logotipo: ${typeCard}`}/>
    <PId><b>{props.name && (props.name[0].toUpperCase() +  props.name.substring(1))}</b></PId>
  </PokeCardContainer>
  );
}