import { Link } from "react-router-dom"
import { StyledTopInfo } from "./style"

export const TopInfo = () => {

    return(
        <StyledTopInfo>
            <div className="info">
                <Link to={'/main'} >Voltar</Link>
                <h1>Assine agora a plataforma</h1>
                <p>Preencha os dados abaixo</p>
            </div>
            <div className="steps">
                <div>
                    <p>1</p>
                    <h3>Informações do Plano</h3>
                </div>
                <div>
                    <p>2</p>
                    <h3>Dados Pessoais</h3>
                </div>
                <div>
                    <p>3</p>
                    <h3>Pagamento</h3>
                </div>
                <div className="HBar"></div>
            </div>
        </StyledTopInfo>
    )
}