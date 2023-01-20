import { StyledButton } from "../../../styles/Button"
import { StyledFinalBlock } from "./style"

export const FinalBlock = ({ title, text }) => {

    return(
        <StyledFinalBlock >
            <h3>{title}</h3>
            <div>
                <p>{text}</p>
                <a href="https://wa.me/553187138302?text=Ol%C3%A1%2C%20estou%20interessado%20no%20servi%C3%A7o%20de%20acompanhamento%20e%20consultoria%20de%20treinamentos%20personalizado.%20Poderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F">
                <StyledButton blue small >Tire suas dúvidas</StyledButton>
                </a>
            </div>
        </StyledFinalBlock>
    )

}