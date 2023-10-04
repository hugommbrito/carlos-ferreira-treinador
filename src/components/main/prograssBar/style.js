import styled from "styled-components"

export const StyledProgressBar = styled.div`
    width: 85%;
    height: 30px;
    margin: 80px auto 20px;
    animation: slide-top 0.8s ease-out;

    background-color: var(--color-grey-1);
    border-radius: 15px;

    div{
        width: 90%;
        height: 100%;
        background-color: red;
        border-radius: 15px 0 0 15px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        animation: progressBar 2s ease-out;

        span{
            font-family: 'Archivo Black', 'Sans-Serif';
            font-size: 11px;
            font-weight: 400;
            color: var(--color-grey-0);
        }
    }

    @keyframes progressBar {
        0%{
            width: 0%;
        }

        100%{
            width: 90%;
        }
    }
`