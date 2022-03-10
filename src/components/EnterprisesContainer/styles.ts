import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  & > p {
    font-family: Roboto;
    font-size: 32px;
    color: ${({ theme }) => theme.colors['charcoal-grey']};
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
