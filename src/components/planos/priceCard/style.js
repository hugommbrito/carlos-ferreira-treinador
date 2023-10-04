import styled from "styled-components";

export const StyledPriceCard = styled.div`
    color: var(--color-grey-0);
    width: 80%;
    height: max-content;
    margin: 25px auto;
    padding: 32px;
    position: relative;

    background-color: var(--color-grey-3);
    border: 3px solid var(--color-primary);
    border-radius: 24px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Lexend Deca', sans-serif;

    .plan{
        font-size: 16px;
        font-weight: 700;

        margin-bottom: 32px;
    }
    
    .oldPrice{
        font-size: 16px;
        font-weight: 300;
        text-decoration: line-through;
        
        margin-bottom: 8px;
    }
    
    .currentPrice{
        font-size: 20px;
        font-weight: 700;

    }
    
    .period{
        font-size: 14px;
        font-weight: 200;

    }

    .discount{
        font-size: 14px;
        font-weight: 700;

        padding: 4px 8px;
        border-radius: 6px;
        background-color: var(--color-primary);

        position: absolute;
        top: -16px;
    }

    label {
        display: inline-block;
        width: 200px;
        margin-top: 20px;
        padding: 10px;
        text-align: center;
        
        border: solid 3px var(--color-primary);
        border-radius: 8px;
        color: var(--color-primary);
        
        transition: all 0.3s;
    }
    input[type="radio"] {
       display: none;
    }
    input[type="radio"]:checked + label {
        background-color: var(--color-primary);
        color: var(--color-grey-0);
    }

`