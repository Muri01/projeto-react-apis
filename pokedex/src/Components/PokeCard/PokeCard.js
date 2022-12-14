import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { goToPokemonDatails } from '../../Router/coodinator';
import { PokeCardContainer } from './PokecardStyle';

export default function PokeCard() {
  const id = 1
  const navigate = useNavigate()
  const params = useParams()
  
 return (
   <PokeCardContainer>
     <div>
       <p>
        PokeCard
      </p>
     </div>
     <div>
      <button>Capturar</button>
      <button onClick={()=>{goToPokemonDatails(navigate, id)}}>Detalhes</button>
     </div>

   </PokeCardContainer>
  );
}