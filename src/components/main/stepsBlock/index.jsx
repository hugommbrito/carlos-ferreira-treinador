import { StyledStepBlock } from "./style"

export const StepBlock = ({ number, title, text }) => {

    return (
        <>
            <StyledStepBlock >
                <p className="number">{number}</p>
                <div></div>
                <h3>{title}</h3>
                <p>{text}</p>
            </StyledStepBlock>
        </>
    )
}