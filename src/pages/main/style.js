import styled from "styled-components";

export const StyledMain = styled.main`

    .textAndPicDiv, .stepBlocks, .progressBarDiv, .picturesBlock, .finalBlock{
        min-height: 25vh;
    }



    .stepBlocks{
        width: 85%;
        margin: 0 auto;
        animation: slide-top 1s ease-out;


    }

    
    @media (min-width: 900px) {
        .stepBlocks{
            display: flex;
            justify-content: space-between;
            margin-top: 64px;
        }
        
    }
`