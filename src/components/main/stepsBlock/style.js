import styled from "styled-components";

export const StyledStepBlock = styled.div`
    color: var(--color-grey-0);
    width: 85%;
    margin: 3rem auto 0;
    animation: slide-top 0.8s ease-out;

    

    .number{
        font-family: 'Inter', sans-serif;
        font-weight: 900;
        font-size: 59px;
        color: var(--color-grey-0);
    }
    
    div{
        border-top: 0.5px solid var(--color-grey-0);
        margin-top: 45px;
        margin-bottom: 45px;
        
    }
    
    h3{
        font-family: 'Archivo Black', sans-serif;
        font-weight: 900;
        font-size: 28px;
        margin-bottom: 20px;
        
    }
    
    p{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: var(--color-grey-1);
        
    }

    
    @media (min-width: 900px) {
        width: 28%;
    }
`