import React, { useContext } from 'react';
import PokeCard from '../../Components/PokeCard/PokeCard';
import { PokemonsContext } from '../../Global/GlobalContext';
import { PokedexContainer } from './PokedexStyles';

export default function PokedexPage() {

  const context = useContext(PokemonsContext)

  const {pokedex} = context
  console.log(pokedex)
 return (
   <>
    <h1>Meus Pokemons</h1>
    <PokedexContainer>
      {pokedex ? pokedex.map((pokemon)=>{
        return <PokeCard pokemonInitital={pokemon} key={pokemon.name} />
      }) : <p>CARREGANDO</p>}
    </PokedexContainer>
   </>
  );
}