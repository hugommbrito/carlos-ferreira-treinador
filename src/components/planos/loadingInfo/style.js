import styled from "styled-components";

export const StyledLoading = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--color-primary-50);
    position: fixed;
    backdrop-filter: blur(4px);
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .content{
        width: 50vw;
        height: 50vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }

    .loading{
        border: 16px solid var(--color-grey-0); 
        border-top: 16px solid var(--color-primary); 
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        flex-shrink: 0;
    }

    h3{
        text-align: center;
    }
    h4{
        text-align: center;
        color: var(--color-grey-0);
        font-family: 'Lexend Deca', sans-serif;
        font-size: 14px;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`