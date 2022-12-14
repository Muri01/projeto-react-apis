import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { goToPokemonDatails } from '../../Router/coodinator';
import { PokeCardContainer } from './PokecardStyle';
import {PokemonsContext} from '../../Global/GlobalContext'

export default function PokeCard() {
  const id = 1
  const navigate = useNavigate()
  const params = useParams()
  const context = useContext(PokemonsContext)

  const {pokemons, setPokemons} = context
  console.log(pokemons)
 return (
   <PokeCardContainer>
     <div>
       <p>
        {pokemons[0].name}
      </p>
     </div>
     <div>
      <button>Capturar</button>
      <button onClick={()=>{goToPokemonDatails(navigate, id)}}>Detalhes</button>
     </div>

   </PokeCardContainer>
  );
}