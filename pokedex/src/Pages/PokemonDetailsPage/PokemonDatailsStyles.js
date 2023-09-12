import styled from 'styled-components/';

export const DetailsPage = styled.div`
    background: #605c5c;
    color: #FFFFFF;
    padding: 30px;
`
export const DetailsContainer = styled.main`
    display:flex;
    /* justify-self: center; 
    justify-items: center; */
    align-items: stretch;
    align-content: center;
    justify-content:space-evenly;
    /* height: 665.31px; */
    flex-wrap: wrap;
    margin: 2em auto;
    padding: 0.7em;
    border-radius: 15px;
    background:${(props)=> props.color} ;
    gap: 15px;
    color: black;
    /* width: 1389px; */
    height:663px
`;

export const ImgDetail = styled.div`
    display:grid;
    gap: 1em;
`

export const ImgBox = styled.div`
    border-radius: 5px;
    background-color: white;
`

export const ImagePokemons = styled.img`
    height: 282px;
`

export const BaseStatus = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: white;
    padding: 10px;
    width:343px
`
export const PokemonData = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    color: white;
    width:292px
`
export const Moves = styled.div`
    display: flex;
    flex-direction: column;
    gap:1em;
    border-radius: 5px;
    padding: 1em;
    background-color: white;
    color: black;
    height: 100%;
    z-index: 3;
`

export const ImagePokebola = styled.img`
    height:670px;
    position: absolute;
    left: 622px;
    top: 320px;
    z-index: 0;
`

export const ImagePokemonBox = styled.div`
    /* display:flex; */
    width:270px;
    /* border: solid white 1px; */
    border-radius: 15px;
    
`
export const ImagePokemonBig = styled.img`
    position:absolute;
    top: 170px;
    left: 1090px;
    /* position: relative;
    bottom:200px; left: 1px; */
    height: 270px;
    z-index: 1;
`

export const TitleDetail = styled.h1`
    margin:30px auto 60px auto;
    font-size: 40px;
`
