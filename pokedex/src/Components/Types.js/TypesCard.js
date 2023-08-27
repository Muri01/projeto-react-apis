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
  const [typeColor, setTypeColor]=useState("black")

  useEffect(()=>{
    returnTypes(props.name)
  },[props])

  const returnTypes = (type)=>{
    switch (type){
        case "poison":
            setTypeCard(Poison)
            setTypeColor("#AD61AE")
            return "#AD61AE"
        case "grass":
            setTypeCard(Grass)
            setTypeColor("#70B873")
            return "#AD61AE"
        case "fire":
            setTypeCard(Fire)
            setTypeColor("#F44900")
            return "#AD61AE"
        case "flying":
            setTypeCard(Flying)
            setTypeColor("#6892B0")
            return "#AD61AE"
        case "water":
            setTypeCard(Water)
            setTypeColor("#33A4F5")
            return "#AD61AE"
        case "bug":
            setTypeCard(Bug)
            setTypeColor("#316520")
            return "#AD61AE"
        case "normal":
            setTypeCard(Normal)
            setTypeColor("#8A8A8A")
            return "#AD61AE"
        case "dark":
            setTypeCard(Dark)
            setTypeColor("#5C5365")
            return "#AD61AE"
        case "dragon":
            setTypeCard(Dragon)
            setTypeColor("#0A6CBF")
            return "#AD61AE"
        case "electric":
            setTypeCard(Electric)
            setTypeColor("#F4D23B")
            return "#AD61AE"
        case "fairy":
            setTypeCard(Fairy)
            setTypeColor("#EC8FE6")
            return "#AD61AE"
        case "fighting":
            setTypeCard(Fighting)
            setTypeColor("#CE4069")
            return "#AD61AE"
        case "ghost":
            setTypeCard(Ghost)
            setTypeColor("#5269AC")
            return "#AD61AE"
        case "ground":
            setTypeCard(Ground)
            setTypeColor("#D97745")
            return "#AD61AE"
        case "ice":
            setTypeCard(Ice)
            setTypeColor("#74CEC0")
            return "#AD61AE"
        case "psychic":
            setTypeCard(Psychic)
            setTypeColor("#F67176")
            return "#AD61AE"
        case "rock":
            setTypeCard(Rock)
            setTypeColor("#C7B78B")
            return "#AD61AE"
        case "steel":
            setTypeCard(Steel)
            setTypeColor("#BBBBBB")
            return "#AD61AE"
        default:
      return "#BBBBBB";
    }
  }

 return (
  <PokeCardContainer typeColor={typeColor}>
    <ImageType src={ typeCard} alt={`imagem do logotipo: ${typeCard}`}/>
    <PId><b>{props.name && (props.name[0].toUpperCase() +  props.name.substring(1))}</b></PId>
  </PokeCardContainer>
  );
}