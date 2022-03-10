import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.beige};

  @media (max-width: 600px) {
    padding: 20px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 15px !important;
    }
  }

  img {
    margin-bottom: 65px;
  }

  h2 {
    max-width: 172px;
    margin-bottom: 25px;
  }

  p {
    width: 351px;
    height: 50px;
    font-family: Roboto;
    font-size: 17px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.48;
    letter-spacing: 0.2px;
    text-align: center;
    color: ${({ theme }) => theme.colors['charcoal-grey']};
    margin-bottom: 46px;
  }
`;
