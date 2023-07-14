import React from 'react';
import { HeaderContainer } from './HeaderStyle';
import Pokelogo from '../../images/pokemon.png'
import { useLocation, useNavigate} from 'react-router-dom';

import { goToBack, goToPokedex, goToPokemonList} from '../../Router/coodinator';

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()

 return (
   <HeaderContainer>
     <a onClick={()=>{goToBack(navigate)}}>Voltar</a>
    <img src={Pokelogo} />
    <button onClick={()=>{goToPokemonList(navigate)}}>pokemons</button>
    <button onClick={()=>{goToPokedex(navigate)}}>Pokedex</button>
   </HeaderContainer>
  );
}