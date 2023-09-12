import styled from 'styled-components/';

export const PokeCardContainer = styled.div`
    border-radius: 10px;
    border: 1px white dotted;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 3px;
    width: 91px;
    height: 31px;
    background:${(props)=> props.typeColor} ;
`;

export const PId = styled.p`
    color:white;
    font-size: 10px;
`


export const ImagePokebola = styled.img`
    height: 20px;
    /* position: absolute;
    bottom: -79px;
    left: 180px; */
`
export const ImageType = styled.img`
    height: 20px;
    margin: 3px;
`