import styled from "styled-components";

export const StyledFinalBlock = styled.div`
    height: max-content;
    width: 90%;
    margin: 95px auto;
    animation: slide-top 0.8s ease-out;
    background-color: var(--color-grey-4);
    padding: 30px;

    box-shadow: -15px 15px 0px 0px rgb(255 25 25 / 98%);
    
    h3{
        font-family: 'Archivo Black', sans-serif;
        font-weight: 600;
        font-size: 32px;
        color: var(--color-grey-0);
    }
    
    div{
        padding: 20px;
        font-family: 'Archivo Black', sans-serif;
        font-weight: 600;
        font-size: 18px;
        color: var(--color-grey-0);
        background-color: var(--color-grey-4);

    }

    @media (min-width: 900px) {
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
        padding: 5%;

        h3{
            width: 50%;
        }

        div{
            width: 45%;
            display: flex;
            flex-direction: column;
        }
    }
`