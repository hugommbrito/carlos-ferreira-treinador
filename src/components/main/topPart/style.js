import styled from "styled-components";

export const StyledTopPart = styled.div`
        position: relative;
        animation: slide-top 0.8s ease-out;

        img{
        margin: 160px auto 3vh;
        display: block;
        }

        p {
        color: var(--color-grey-0);
        text-shadow:2px 2px 0px var(--color-grey-4);
        margin: 0 auto;
        
        font-family: 'Josefin Sans', sans-serif;
        text-align: center;
        font-size: 1.15rem;

    }

    h4 {
        color: var(--color-grey-0);
        text-shadow:2px 2px 0px var(--color-grey-4);
        margin: 0 auto;
        
        font-family: 'Josefin Sans', sans-serif;
        text-align: center;
        font-size: 0.9rem;
        cursor: pointer;
    }

        @media (min-width: 900px){
            img{
                max-width: 50vw;
            }
        }
`