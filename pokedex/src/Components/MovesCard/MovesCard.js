import { MoveContainer } from "./MovesCardStyle"

export const MovesCard = (props)=>{
    return(
        <MoveContainer>
            <p>{props.name}</p>
        </MoveContainer>
    )
}