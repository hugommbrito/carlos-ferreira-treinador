import styled from "styled-components";

export const StyledTextAndPic = styled.div`
    width: 85%;
    margin: 0 auto;
    animation: slide-top 0.8s ease-out;

    img{
        max-height: 90vh;
        box-shadow: -20px 20px 50px 5px rgba(255, 0, 0, 0.2);
    }

    p{
        color: var(--color-grey-0);

        font-family: 'Josefin Sans', sans-serif;
        text-align: center;
        font-size: 1.15rem;
    }
    
    
    @media (min-width: 900px) {
        width: 85%;
        display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
            /* gap: 10vw; */
            align-items: center;
            margin-bottom: 10vh;
            
            img{
                width: 350px;
                box-shadow: -20px 20px 50px 5px rgba(255, 0, 0, 0.2);
            }

            p{
                width: 50%;
                text-align: left;
                font-size: 2rem;
            }

    }
`