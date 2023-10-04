import { StyledTextAndPic } from "./style"

export const TextAndPic = ({ text, pic, picAlt }) => {

    return(
        <StyledTextAndPic >
            <img src={pic} alt={picAlt}/>
            <p>{text}</p>
        </StyledTextAndPic>
    
    )
}