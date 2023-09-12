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
    // console.log(type)
    switch (type){
        case "poison":
            return {color:"#AD61AE", image: Poison}
        case "grass":
            return {color:"#729F92", image: Grass}
        case "fire":
            return {color:"#EAAB7D", image: Fire}
        case "flying":
            return {color:"#6892B0", image: Flying}
        case "water":
            return {color:"#71C3FF", image: Water}
        case "bug":
            return {color:"#76A866", image: Bug}
        case "normal":
            return {color:"#BF9762", image: Normal}
        case "dark":
            return {color:"#5C5365", image: Dark}
        case "dragon":
            return {color:"#0A6CBF", image: Dragon}
        case "electric":
            return {color:"#F4D23B", image: Electric}
        case "fairy":
            return {color:"#EC8FE6", image: Fairy}
        case "fighting":
            return {color:"#CE4069", image: Fighting}
        case "ghost":
            return {color:"#5269AC", image: Ghost}
        case "ground":
            return {color:"#D97745", image: Ground}
        case "ice":
            return {color:"#74CEC0", image: Ice}
        case "psychic":
            return {color:"#F67176", image: Psychic}
        case "rock":
            return {color:"#C7B78B", image: Rock}
        case "steel":
            return {color:"#BBBBBB", image: Steel}
        default:
      return "#BBBBBB";
    }
  }
