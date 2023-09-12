import React from 'react';
import { PId, PokeCardContainer, ImageType } from './TypesCardStyle';
import { returnTypes } from '../../utils/returnTypes';


export default function TypesCard(props) {
 
 return (
  <PokeCardContainer typeColor={returnTypes(props.name).color}>
    <ImageType src={returnTypes(props.name).image} alt={`imagem do logotipo: ${props.name}`}/>
    <PId><b>{props.name && (props.name[0].toUpperCase() +  props.name.substring(1))}</b></PId>
  </PokeCardContainer>
  );
}