import styled from "styled-components";

export const StyledInfoCard = styled.div`
    animation: slide-top 0.8s ease-out;

    h3{
        color: var(--color-grey-0);
        margin: 3rem auto 0;
        
        font-family: 'Archivo Black', sans-serif;
        text-align: center;
        font-size: 1.75rem;
    }

    p{
        color: var(--color-grey-0);
        margin: 1rem auto;
        
        font-family: 'Josefin Sans', sans-serif;
        text-align: center;
        font-size: 1.15rem;
    }


    @media (min-width: 900px) {
        width: 40%;
    }

`

export const StyledInfoSet = styled.div`
    width: 85%;
    margin: 5rem auto;

    @media (min-width: 900px) {
        display: flex;
        justify-content: space-between;
    }
`
