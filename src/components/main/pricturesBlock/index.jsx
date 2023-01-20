import { StyledPicturesBlock } from "./style"

export const PicturesBlock = ({ pic1, pic1Alt, pic2, pic2Alt, pic3, pic3Alt }) => {
    return (
        <StyledPicturesBlock >
            <img src={pic1} alt={pic1Alt} />
            <img src={pic2} alt={pic2Alt} />
            <img src={pic3} alt={pic3Alt} />
        </StyledPicturesBlock>
    )
}