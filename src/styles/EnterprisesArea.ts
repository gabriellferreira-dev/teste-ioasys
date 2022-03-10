import styled from 'styled-components';

export const EnterprisesArea = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors['beige-two']};
  position: relative;
  flex-grow: 1;
  padding: 40px 50px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;
