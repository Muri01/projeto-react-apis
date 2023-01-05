import React from 'react';
import { HeaderContainer } from './HeaderStyle';
import Pokelogo from '../../images/pokemon.png'
import { useNavigate } from 'react-router-dom';
import { goToBack, goToPokedex, goToPokemonList} from '../../Router/coodinator';

export default function Header() {
  const navigate = useNavigate()

 return (
   <HeaderContainer>
     <a onClick={()=>{goToBack(navigate)}}>Voltar</a>
    <img src={Pokelogo} />
    <button onClick={()=>{goToPokedex(navigate)}}>Pokedex</button>
    <button onClick={()=>{goToPokemonList(navigate)}}>pokemons</button>
   </HeaderContainer>
  );
}