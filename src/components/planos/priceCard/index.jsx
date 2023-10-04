import { StyledPriceCard } from "./style"

export const PriceCard = ({ plan, oldPrice, currentPrice, discount, period, radioId, value, handleChange }) => {

    return(
        <StyledPriceCard className="card">
            <p className="plan">Plano {plan}</p>
            <p className="oldPrice">R$ {oldPrice}/mês</p>
            <p className="currentPrice">R$ {currentPrice}/mês</p>
            {period ? <p className="period">fidelidade de {period}</p> : <p className="period">Sem fidelidade</p>}
            <p className="discount">{discount} OFF</p>
            <input type="radio" className="radio" name="price" id={radioId} value={value} onChange={() => handleChange(value)}/>
            <label htmlFor={radioId}>SELECIONAR</label>
        </StyledPriceCard>
    )
}