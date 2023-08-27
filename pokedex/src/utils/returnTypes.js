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
    switch (type){
        case "Poison":
            return Poison
        case "Grass":
            return Grass
        case "Fire":
            return Fire
        case "Flying":
            return Flying
        case "Water":
            return Water
        case "Bug":
            return Bug
        case "Normal":
            return Normal
        case "Dark":
            return Dark
        case "Dragon":
            return Dragon
        case "Electric":
            return Electric
        case "Fairy":
            return Fairy
        case "Fighting":
            return Fighting
        case "Ghost":
            return Ghost
        case "Ground":
            return Ground
        case "Ice":
            return Ice
        case "Psychic":
            return Psychic
        case "Rock":
            return Rock
        case "Steel":
            return Steel
        default:
      return Ghost;
    }
}