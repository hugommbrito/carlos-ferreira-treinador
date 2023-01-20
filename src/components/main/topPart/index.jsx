import { useNavigate } from "react-router-dom"

import { StyledTopPart } from "./style"
import logo from "../../../assets/logo2.png"
import { StyledButton } from "../../../styles/Button"

export const TopPart = () => {
    const navigate = useNavigate()

    return (
        <StyledTopPart >
            <div className="container topPart">
                <img src={logo} />
                <p>Acompanhamento e consultoria 100% personalizado</p>
                <StyledButton onClick={() => navigate('/planos')}>COMECE AGORA</StyledButton>
                <a href="https://wa.me/553187138302?text=Ol%C3%A1%2C%20estou%20interessado%20no%20servi%C3%A7o%20de%20acompanhamento%20e%20consultoria%20de%20treinamentos%20personalizado.%20Poderia%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F">
                <StyledButton blue small >Tire suas dúvidas</StyledButton>
                </a>
            </div>
        </StyledTopPart>
    )
}