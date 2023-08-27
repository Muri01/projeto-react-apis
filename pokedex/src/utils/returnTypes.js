import  Poison from "../assets/poison.png"
import  Grass from "../assets/grass.png"
import  Fire from "../assets/fire.png"
import  Flying from "../assets/flying.png"
import  Water from "../assets/water.png"
import  Bug from "../assets/bug.png"
import  Normal from "../assets/normal.png"
import  Dark from "../assets/dark.png"
import  Dragon from "../assets/dragon.png"
import  Electric from "../assets/electric.png"
import  Fairy from "../assets/fairy.png"
import  Fighting from "../assets/fighting.png"
import  Ghost from "../assets/ghost.png"
import  Steel from "../assets/steel.png"
import  Rock from "../assets/rock.png"
import  Psychic from "../assets/psychic.png"
import  Ice from "../assets/ice.png"
import  Ground from "../assets/ground.png"

export const returnTypes = (type)=>{
    console.log(type)
    switch (type){
        case "poison":
            return "#AD61AE"
        case "grass":
            return "#70B873"
        case "fire":
            return "#F44900"
        case "flying":
            return "#6892B0"
        case "water":
            return "#33A4F5"
        case "bug":
            return "#316520"
        case "normal":
            return "#8A8A8A"
        case "dark":
            return "#5C5365"
        case "dragon":
            return "#0A6CBF"
        case "electric":
            return "#F4D23B"
        case "fairy":
            return "#EC8FE6"
        case "fighting":
            return "#CE4069"
        case "ghost":
            return "#5269AC"
        case "ground":
            return "#D97745"
        case "ice":
            return "#74CEC0"
        case "psychic":
            return "#F67176"
        case "rock":
            return "#C7B78B"
        case "steel":
            return "#BBBBBB"
        default:
      return "#BBBBBB";
    }
  }
