import styled from "styled-components";

export const StyledPicturesBlock = styled.div`
    margin: 0 auto;
    width: 85%;
    animation: slide-top 0.8s ease-out;

    img{
        margin: 20px auto;
        box-shadow: -10px 10px 15px 5px rgba(255, 0, 0, 0.2);
    }

    @media (min-width: 900px) {
        display: flex;

        img{
            width: 28%;
        }
    }
`