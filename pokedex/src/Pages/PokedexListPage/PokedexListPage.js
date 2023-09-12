import React, { useContext } from 'react';
import PokeCard from '../../Components/PokeCard/PokeCard';
import { HomeContainer, PokedexList } from './PokedexListStyles';
import {PokemonsContext} from '../../Global/GlobalContext'

export default function PokedexListPage() {
    
    const context = useContext(PokemonsContext)
    const {pokemonsInitial} = context

    return (
    <PokedexList>
        <h1>Todos os pokemons</h1>
        <HomeContainer>
            {pokemonsInitial.length ? pokemonsInitial.map((pokemon, index)=>{
            return <PokeCard key={index} pokemonInitital={pokemon} />
        }) : <p>CARREGANDO</p>}
        </HomeContainer>
    </PokedexList>
  );
}