import React, { useContext } from 'react';
import PokeCard from '../../Components/PokeCard/PokeCard';
import { HomeContainer } from './PokedexListStyles';
import {PokemonsContext} from '../../Global/GlobalContext'

export default function PokedexListPage() {
    const context = useContext(PokemonsContext)

    const {pokemonsInitial} = context

    return (
    <>
        <h1>Todos os pokemons</h1>
        <HomeContainer>
            {pokemonsInitial ? pokemonsInitial.map((pokemon)=>{
                return <PokeCard pokemonInitital={pokemon} key={pokemon.name} />
            }) : <p>CARREGANDO</p>}
        </HomeContainer>
    </>
  );
}