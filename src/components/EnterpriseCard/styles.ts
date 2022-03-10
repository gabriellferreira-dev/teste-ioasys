import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors['white-two']};
  padding: 30px;
  font-family: Roboto;
  position: relative;
  display: flex;
  border-radius: 4.7px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  img {
    width: 293px;
    margin-right: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-size: 30px;
      font-weight: bold;
      text-align: left;
    }

    p {
      font-size: 24px;
      color: ${({ theme }) => theme.colors['warm-grey']};
      text-align: left;
    }

    span {
      font-size: 18px;
      color: ${({ theme }) => theme.colors['warm-grey']};
      text-align: left;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    max-width: 500px;

    img {
      width: 100%;
      margin-right: 0;
    }

    div {
      padding: 20px;
      h3 {
        font-size: 25px;
      }
      p {
        font-size: 20px;
      }
    }
  }
`;
