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
        case "grass":
            setTypeCard(Grass)
            setTypeColor("#70B873")            
        case "fire":
            setTypeCard(Fire)
            setTypeColor("#F44900")            
        case "flying":
            setTypeCard(Flying)
            setTypeColor("#6892B0")            
        case "water":
            setTypeCard(Water)
            setTypeColor("#33A4F5")            
        case "bug":
            setTypeCard(Bug)
            setTypeColor("#316520")            
        case "normal":
            setTypeCard(Normal)
            setTypeColor("#8A8A8A")            
        case "dark":
            setTypeCard(Dark)
            setTypeColor("#5C5365")            
        case "dragon":
            setTypeCard(Dragon)
            setTypeColor("#0A6CBF")            
        case "electric":
            setTypeCard(Electric)
            setTypeColor("#F4D23B")            
        case "fairy":
            setTypeCard(Fairy)
            setTypeColor("#EC8FE6")            
        case "fighting":
            setTypeCard(Fighting)
            setTypeColor("#CE4069")            
        case "ghost":
            setTypeCard(Ghost)
            setTypeColor("#5269AC")            
        case "ground":
            setTypeCard(Ground)
            setTypeColor("#D97745")            
        case "ice":
            setTypeCard(Ice)
            setTypeColor("#74CEC0")            
        case "psychic":
            setTypeCard(Psychic)
            setTypeColor("#F67176")            
        case "rock":
            setTypeCard(Rock)
            setTypeColor("#C7B78B")            
        case "steel":
            setTypeCard(Steel)
            setTypeColor("#BBBBBB")
            
        default:
      return "#AD61AEEEEEEEE";
    }
  }


 return (
  <PokeCardContainer typeColor={typeColor}>
    <ImageType src={ typeCard} alt={`imagem do logotipo: ${typeCard}`}/>
    <PId><b>{props.name && (props.name[0].toUpperCase() +  props.name.substring(1))}</b></PId>
  </PokeCardContainer>
  );
}