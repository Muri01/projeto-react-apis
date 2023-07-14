import styled from 'styled-components/';

export const PokeCardContainer = styled.section`
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 10px; */
    /* width: 440px;
    height: 210px; */
    margin: 10px 0;
    background: green;
    color: #FFFFFF;
`;

export const PokeInfoContainer = styled.section`
    /* border: 1px solid black; */
    display: flex;
    align-items: end;
    /* background: blue; */

`

export const PokeDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* background: red; */
`

export const PokeButtonContainer = styled.section`
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    color: #FFFFFF;
`


export const PokeTypesContainer = styled.section`
    border: 1px solid black;
    padding: 10px;
`

export const PId = styled.p`
    
`

export const ADetails = styled.a`
    color: white;
`

export const ButtonDetails = styled.button`
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
`

export const ImagePokemon = styled.img`
    width: 100px;
    height: 100px;
`