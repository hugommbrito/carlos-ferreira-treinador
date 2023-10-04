import { useNavigate } from "react-router-dom"

import { StyledHeader } from "./style"
import logoSmall from "../../assets/logo3.png"

export const Header = () => {
    const navigate = useNavigate()

    return (
        <StyledHeader >
            <div className="container">
                <img src={logoSmall} alt="Logo Carlos Ferreira" onClick={() => navigate('/main')} />
            </div>
        </StyledHeader>
    )
}