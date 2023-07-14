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
      {pokedex.length ? pokedex
        //TENTAR ORDENAR!!
        // .sort((a, b) => Number(a.url[a.url.length - 2]) - Number(b.url[b.url.length - 2])) 
        .map((pokemon)=>{
        console.log(pokemon)
        return <PokeCard key={pokemon.name} pokemonInitital={pokemon} />
      }) : <p>Pokedex Vazia</p>}
    </PokedexContainer>
   </>
  );
}