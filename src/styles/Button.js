import styled from "styled-components";

export const StyledButton = styled.button`
  padding: ${({ small }) => small ? '0.5rem 1.3rem' : '25px 50px'};
  margin: 1rem auto;
  display: block;

  background:linear-gradient(${({ blue }) => blue ? '180deg, #a50aff 0%, #382E98 80%' : '180deg, #ff0000 0%, #eb285f 80%'});
  box-shadow: ${({ blue }) => blue ? '0px 0px 34px 0px rgb(159 56 182 / 50%)' : '0px 0px 44px 0px rgba(255,0,0,0.5)'};
  border: none;
  border-radius: 50ch;
  
  font-family: "Archivo Black", sans-serif;
  font-size: ${({ small }) => small ? '13px' : '20px'};
  color: ${({ blue }) => blue ? '#FFFFFF' : '#000000'};

  cursor: pointer;
  transition: 0.15s ease;

  &:hover {
    /* color: var(--color-grey-0); */
    box-shadow: 0px 0px 34px 0px rgba(255,255,255,0.3);


  }
`;

export const StyledPageButton = styled.button`
  padding: 12px 30px;
  margin: 1rem auto;
  display: block;

  background:var(--color-grey-4);
  border: 3px solid var(--color-primary);
  border-radius: 16px;
  
  font-family: 'Lexend Deca', sans-serif;
  font-size: 16px;
  color: var(--color-primary);

  cursor: pointer;
  transition: 0.15s ease;

  &:hover {
    background:var(--color-primary);
    border: 3px solid var(--color-primary);
    color: var(--color-grey-0);

  }
`;