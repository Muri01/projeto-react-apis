import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToPokemonDatails } from '../../Router/coodinator';
import { ImagePokemon, PId, PokeButtonContainer, PokeCardContainer, PokeDetailsContainer, PokeInfoContainer, PokeTypesContainer, ADetails, ButtonDetails, PokeImagemContaner, ImagePokebola, Name } from './TypesCardStyle';
import {PokemonsContext} from '../../Global/GlobalContext'
import axios from 'axios';
import { pokemonMock } from '../../constants/contanst';
import pokebola from '../../assets/poke-backgroud-card.png'

export default function TypesCard(props) {
 return (
  <PokeCardContainer>
    <ImagePokebola src={pokebola} alt="backgroud de pokebola"/>
    <PId><b>{props.name && (props.name[0].toUpperCase() +  props.name.substring(1))}</b></PId>
  </PokeCardContainer>
  );
}