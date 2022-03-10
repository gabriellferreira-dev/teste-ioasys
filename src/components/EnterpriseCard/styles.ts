import styled from 'styled-components';

export const StyledEnterpriseCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 75px;
  background: ${({ theme }) => theme.colors['white-two']};
  border-radius: 4.8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  max-width: 924px;
  overflow: hidden;

  img {
    margin-bottom: 48px;
  }

  p {
    font-family: SourceSansPro;
    font-size: 34px;
    color: ${({ theme }) => theme.colors['warm-grey']};
    padding: 5px;
  }

  @media (max-width: 768px) {
    padding: 0;

    p {
      font-size: 25px;
      margin: 0 20px;
    }
  }
`;
