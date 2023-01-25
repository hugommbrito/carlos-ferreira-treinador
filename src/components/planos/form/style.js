import styled from "styled-components";

export const StyledForm = styled.div`
    width: 85%;
    margin: 30px auto;

    p{
        color: var(--color-grey-0);
        font-family: 'Lexend Deca', sans-serif;
        text-align: center;
        margin: 25px 10px;
    }

    .PDButtons{
        button{
            font-size: 12px;

        }
    }


    select, input{
        width: 100%;
        height: 40px;
        margin: 2px 0 15px;

        background-color: var(--color-grey-2);
        border: 3px solid var(--color-primary);
        border-radius: 8px;

        padding: 5px;
        color: var(--color-grey-0);
        font-family: 'Lexend Deca', sans-serif;

        :focus{
            outline: none;
            background-color: var(--color-grey-3);
            border-color: var(--color-primary-dark);
        }
    }

    .personalData, .anamnese, .pagamento {
        animation: slide-right 0.8s ease-out;

        border: 1px solid var(--color-grey-2);
        border-radius: 8px;
        margin-top: 20px;
        padding: 15px;
        
        h3{
            text-align: center;
        }

        label{
            color: var(--color-grey-0);
            font-family: 'Lexend Deca', sans-serif;
        }
        
        span{
            display: block;
            margin: -15px 0 8px;
            
            font-family: 'Lexend Deca', sans-serif;
            color: var(--color-grey-2);
            font-size: 10px;
        }
        
        .errorMsg{
            color: var(--color-primary);
            
        }
        
        .birthday{
            color: var(--color-grey-1);
            margin: 0;
        }
    }

    .personalData {
        display: ${ props => props.viewPersonalData ? 'block' : 'none'};
    }
    .anamnese {
        display: ${ props => props.viewAnamnese ? 'block' : 'none'};
    }
    .pagamento {
        display: ${ props => props.viewPagamento ? 'block' : 'none'};
    }

    @media (min-width: 900px) {
        max-width: 880px;

        .PDButtons{
            display: flex;
        }
    }
`
