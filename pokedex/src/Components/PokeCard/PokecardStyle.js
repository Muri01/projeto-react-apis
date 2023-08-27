import styled from 'styled-components/';

export const PokeCardContainer = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    margin: 26px 10px;
    width: 440px;
    height: 210px;
    background:${(props)=> props.color} ;
`;

export const PokeInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
`

export const PId = styled.p`
    color:white;
    font-size: 16px;
`

export const Name = styled.h1`
    color:white;
    font-size: 32px;
`

export const PokeTypesContainer = styled.section`
display: flex;
    padding: 10px;
`

export const PokeButtonContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ADetails = styled.a`
    font-size: 16px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    color: white;
`

export const ButtonDetails = styled.button`
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    width: 146px;
    height: 38px;
    border-radius: 5px;
`

export const PokeImagemContaner = styled.div`
    background: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative
`

export const ImagePokemon = styled.img`
    position: absolute;
    bottom: -10px;
    left: 225px;
    height: 193px;
`

export const ImagePokebola = styled.img`
    height: 210.73px;
    position: absolute;
    bottom: -79px;
    left: 180px;
`