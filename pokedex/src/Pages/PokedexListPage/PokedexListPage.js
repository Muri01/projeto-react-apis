import React, { useContext } from 'react';
import Header from '../../Components/Header/Header';
import PokeCard from '../../Components/PokeCard/PokeCard';
import { HomeContainer } from './PokedexListStyles';
import {PokemonsContext} from '../../Global/GlobalContext'

export default function PokedexListPage() {
    const context = useContext(PokemonsContext)

    const {pokemons, setPokemons} = context
    return (
        <>
            {/* <Header/> */}
            <h1>Todos os pokemons</h1>
            <HomeContainer>
                {pokemons ? (<PokeCard pokemons={pokemons}/>) : <p>CARREGANDO...</p>}
            </HomeContainer>
        </>
  );
}