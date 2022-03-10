import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;

  header {
    justify-content: flex-start;
    align-items: flex-end;

    p {
      text-transform: uppercase;
    }

    button {
      border: none;
      background: transparent;
      outline: none;
      margin-right: 70px;
      display: flex;
      align-items: center;

      svg {
        font-size: 40px;
        color: ${({ theme }) => theme.colors['white-two']};
      }
    }

    @media (max-width: 768px) {
      p {
        font-size: 25px;
      }
      button {
        svg {
          font-size: 35px;
        }
      }
    }
  }
`;
