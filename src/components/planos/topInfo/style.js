import styled from "styled-components";

export const StyledTopInfo = styled.div`
        width: 85%;
        margin: 120px auto 30px;
        
        font-family: 'Lexend Deca', sans-serif;

    .info{
        a{
            text-decoration: none;
            color: var(--color-primary);
            font-size: 16px;
        
        }
        
        h1{
            margin: 12px 0;

            color: var(--color-grey-0);
            font-size: 36px;
            line-height: 40px;
        }
        
        p{
            color: var(--color-grey-0);
            font-size: 16px;

        }
    }

    .steps{
        display: flex;
        justify-content: space-between;
        color: var(--color-grey-0);
        
        position: relative;
        z-index: 0;
        div{
            margin-top: 40px;
            width: 30%;

            display: flex;
            flex-direction: column;
            align-items: center;


            p{
                background-color: var(--color-grey-3);
                width: 30px;
                height: 30px;
                border-radius: 50%;

                text-align: center;
                line-height: 30px;
            }

            h3{
                margin-top: 5px;
                text-align: center;

                font-weight: 400;
            }
        }

        .HBar{
            background-color: var(--color-grey-3);
            height: 8px;
            width: 55vw;

            position: absolute;
            z-index: -1;
            top: 11px;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media (min-width: 900px) {
        max-width: 880px;
        .steps{
            width: 50%;
            margin: 0 auto;

            .HBar{
                width: 300px;
            }
        }
    }
`