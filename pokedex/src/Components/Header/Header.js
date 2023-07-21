import React from 'react';
import { HeaderContainer } from './HeaderStyle';
import Pokelogo from '../../images/pokemon.png'
import { useLocation, useNavigate} from 'react-router-dom';

import { goToBack, goToPokedex, goToPokemonList} from '../../Router/coodinator';

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location.pathname)

 return (
   <HeaderContainer>
    {location.pathname === "/" || <a onClick={()=>{goToPokemonList(navigate)}}>Voltar</a>}
    {/* <button onClick={()=>{goToPokemonList(navigate)}}>pokemons</button>  */}
    <img src={Pokelogo} />
    {location.pathname === "/" && <button onClick={()=>{goToPokedex(navigate)}}>Pokedex</button> 
    }
   </HeaderContainer>
  );
}