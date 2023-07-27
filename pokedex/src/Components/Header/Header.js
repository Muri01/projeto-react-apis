import React, { useContext } from 'react';
import { ButtonHeder, HeaderContainer, ImgLogo, Voltar, VoltarContainer, ButtonContainer,ImgContainer } from './HeaderStyle';
import Pokelogo from '../../images/pokemon.png'
import { useLocation, useNavigate} from 'react-router-dom';

import { goToBack, goToPokedex, goToPokemonList} from '../../Router/coodinator';
import { PokemonsContext } from '../../Global/GlobalContext';

export default function Header() {

  const navigate = useNavigate()
  const location = useLocation()

  const context = useContext(PokemonsContext)
  const {pokedex, setPokedex} = context
  // console.log(pokedex)

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
  // console.log(location.pathname.match("details")? "true": "false")

 return (
    <HeaderContainer>
      <VoltarContainer>
        {location.pathname !== "/" && <Voltar onClick={()=>{goToPokemonList(navigate)}}> {"< Todo Pokémons"}</Voltar> }
      </VoltarContainer>
      <ImgContainer>
        <ImgLogo src={Pokelogo} />
      </ImgContainer>
      <ButtonContainer>
        {location.pathname === "/" && <ButtonHeder onClick={()=>{goToPokedex(navigate)}}>Pokedex</ButtonHeder> }
        {location.pathname.match("details") && 
          <ButtonHeder onClick={()=>{goToPokedex(navigate)}}>Excluir</ButtonHeder> 
        }
        {/* <button onClick={()=>{goToPokemonList(navigate)}}>pokemons</button>  */}
      </ButtonContainer>
   </HeaderContainer>
  );
}