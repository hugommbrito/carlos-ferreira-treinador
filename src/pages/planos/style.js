import styled from "styled-components";

export const StyledPlanos = styled.div`
    /* height: 500vh; */
    background-color: #000000;
    padding: 30px 0 300px;

    h3{
        max-width: 85%;
        margin: 0 auto;

        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        font-weight: 700;
        color: var(--color-grey-0);
    }
    @media (min-width: 900px) {
        .priceCards{
            max-width: 85%;
            margin: 0 auto;

            display: flex;
            gap: 5vw;
            
        }
    }

`