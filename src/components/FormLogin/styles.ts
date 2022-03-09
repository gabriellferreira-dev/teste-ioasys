import styled from 'styled-components';

type FormProps = {
  isError?: boolean;
};

export const Container = styled.form<FormProps>`
  font-size: 1.6rem;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;

  div {
    &:first-child {
      margin-bottom: 33px;
    }
  }

  .error-message {
    font-family: Roboto;
    font-size: 12.2px;
    letter-spacing: -0.17px;
    text-align: center;
    margin: 13px 0;
    color: ${({ theme }) => theme.colors['neon-red']};
  }

  button {
    margin-top: ${({ isError }) => (isError ? '0' : '40px')};
  }
`;
